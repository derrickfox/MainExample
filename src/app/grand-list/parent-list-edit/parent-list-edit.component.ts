import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ListsService } from '../lists.service';

@Component({
  selector: 'app-parent-list-edit',
  templateUrl: './parent-list-edit.component.html',
  styleUrls: ['./parent-list-edit.component.css']
})
export class ParentListEditComponent implements OnInit {
  id: number;
  editMode = false;
  listForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private listService: ListsService,
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
    if (this.editMode) {
      this.listService.updateList(this.id, this.listForm.value);
    } else {
      this.listService.addList(this.listForm.value);
    }
    this.onCancel();
  }

  onAddList() {
    alert('working on that!');
    (<FormArray>this.listForm.get('recipes')).push(
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
    (<FormArray>this.listForm.get('recipes')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let listName = '';
    let listImagePath = '';
    let listDescription = '';
    let listRecipes = new FormArray([]);

    if (this.editMode) {
      const list = this.listService.getList(this.id);
      listName = list.name;
      // listImagePath = list.imagePath;
      listDescription = list.description;
      if (list['ingredients']) {
        for (let recipe of list.recipes) {
          listRecipes.push(
            new FormGroup({
              'name': new FormControl(recipe.name, Validators.required)
              ,
              'amount': new FormControl(recipe.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }

    this.listForm = new FormGroup({
      'name': new FormControl(listName, Validators.required),
      'imagePath': new FormControl(listImagePath, Validators.required),
      'description': new FormControl(listDescription, Validators.required),
      'recipes': listRecipes
    });
  }

}
