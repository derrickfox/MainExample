import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ChefsService } from '../chefs.service';

@Component({
  selector: 'app-chef-edit',
  templateUrl: './chef-edit.component.html',
  styleUrls: ['./chef-edit.component.css']
})
export class ChefEditComponent implements OnInit {
  id: number;
  editMode = false;
  chefForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private chefService: ChefsService,
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
      this.chefService.updateChef(this.id, this.chefForm.value);
    } else {
      this.chefService.addChef(this.chefForm.value);
    }
    this.onCancel();
  }

  onAddChef() {
    alert('working on that!');
    // (<FormArray>this.chefForm.get('recipes')).push(
    //   new FormGroup({
    //     'name': new FormControl(null, Validators.required),
    //     'amount': new FormControl(null, [
    //       Validators.required,
    //       Validators.pattern(/^[1-9]+[0-9]*$/)
    //     ])
    //   })
    // );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.chefForm.get('recipes')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let chefName = '';
    let chefImagePath = '';
    let chefDescription = '';
    let chefRecipes = new FormArray([]);

    if (this.editMode) {
      const chef = this.chefService.getChef(this.id);
      chefName = chef.name;
      chefImagePath = chef.imagePath;
      chefDescription = chef.description;
      if (chef['ingredients']) {
        for (let recipe of chef.recipes) {
          chefRecipes.push(
            new FormGroup({
              'name': new FormControl(recipe.name, Validators.required)
              // ,
              // 'amount': new FormControl(recipe.amount, [
              //   Validators.required,
              //   Validators.pattern(/^[1-9]+[0-9]*$/)
              // ])
            })
          );
        }
      }
    }

    this.chefForm = new FormGroup({
      'name': new FormControl(chefName, Validators.required),
      'imagePath': new FormControl(chefImagePath, Validators.required),
      'description': new FormControl(chefDescription, Validators.required),
      'recipes': chefRecipes
    });
  }

}
