import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { ChefsService } from '../../chefs.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe;
  id: number;

  constructor(private chefsService: ChefsService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.chefsService.getRecipe(this.id);
          console.log('selected recipe: ', this.recipe);
        }
      );
  }

  onClick() {
    alert('working!!');
  }

  // onAddToShoppingList() {
  //   this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  // }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.chefsService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
