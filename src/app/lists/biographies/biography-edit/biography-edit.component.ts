import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { BiographyService } from '../biography.service';

@Component({
  selector: 'app-biography-edit',
  templateUrl: './biography-edit.component.html',
  styleUrls: ['./biography-edit.component.css']
})
export class BiographyEditComponent implements OnInit {
  id: number;
  editMode = false;
  biographyForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private biographyService: BiographyService,
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
    // const newBiography = new Biography(
    //   this.biographyForm.value['name'],
    //   this.biographyForm.value['description'],
    //   this.biographyForm.value['imagePath'],
    //   this.biographyForm.value['ingredients']);
    if (this.editMode) {
      this.biographyService.updateBiography(this.id, this.biographyForm.value);
    } else {
      this.biographyService.addBiography(this.biographyForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.biographyForm.get('ingredients')).push(
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
    (<FormArray>this.biographyForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let biographyName = '';
    let biographyImagePath = '';
    let biographyDescription = '';
    let biographyIngredients = new FormArray([]);

    if (this.editMode) {
      const biography = this.biographyService.getBiography(this.id);
      biographyName = biography.name;
      biographyImagePath = biography.imagePath;
      biographyDescription = biography.description;
      if (biography['ingredients']) {
        for (let ingredient of biography.ingredients) {
          biographyIngredients.push(
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

    this.biographyForm = new FormGroup({
      'name': new FormControl(biographyName, Validators.required),
      'imagePath': new FormControl(biographyImagePath, Validators.required),
      'description': new FormControl(biographyDescription, Validators.required),
      'ingredients': biographyIngredients
    });
  }

}
