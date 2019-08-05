import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { SourceService } from '../source.service';

@Component({
  selector: 'app-source-edit',
  templateUrl: './source-edit.component.html',
  styleUrls: ['./source-edit.component.css']
})
export class SourceEditComponent implements OnInit {
  id: number;
  editMode = false;
  sourceForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private sourceService: SourceService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newSource = new Source(
    //   this.sourceForm.value['name'],
    //   this.sourceForm.value['description'],
    //   this.sourceForm.value['imagePath'],
    //   this.sourceForm.value['ingredients']);
    if (this.editMode) {
      this.sourceService.updateSource(this.id, this.sourceForm.value);
    } else {
      this.sourceService.addSource(this.sourceForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.sourceForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.sourceForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let sourceName = '';
    let sourceImagePath = '';
    let sourceDescription = '';
    let sourceIngredients = new FormArray([]);

    if (this.editMode) {
      const source = this.sourceService.getSource(this.id);
      sourceName = source.name;
      sourceImagePath = source.imagePath;
      sourceDescription = source.description;
      if (source['ingredients']) {
        for (let ingredient of source.ingredients) {
          sourceIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient, Validators.required),
              'amount': new FormControl(ingredient, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.sourceForm = new FormGroup({
      'name': new FormControl(sourceName, Validators.required),
      'imagePath': new FormControl(sourceImagePath, Validators.required),
      'description': new FormControl(sourceDescription, Validators.required),
      'ingredients': sourceIngredients
    });
  }

}
