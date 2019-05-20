import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { ListsService } from '../../lists.service';
import { MongoItemService } from '../../../../mongo.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe;
  id: number;
  responseProducts;
  responseSources;
  dataResponse;

  constructor(private listsService: ListsService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private mongoItemService: MongoItemService ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.listsService.getRecipe(this.id);
        }
      );
  }

  onClickProducts() {
    // !!!! If you receive a CORS error, install a CORS browser extention to handle the error locally !!!
    this.responseProducts = this.mongoItemService.getAllProducts();
    this.responseProducts.subscribe(
      (data) => {
        console.log('data', data);
      }
    )
  }  
  
  onClickSources() {
    // !!!! If you receive a CORS error, install a CORS browser extention to handle the error locally !!!
    this.responseSources = this.mongoItemService.getAllSource();
    this.responseSources.subscribe(
      (data) => {
        console.log('data', data);
      }
    )
  }

  onClickSource() {
    // !!!! If you receive a CORS error, install a CORS browser extention to handle the error locally !!!
    console.log('recipe-detail.component -> this.id', this.id);
    this.responseSources = this.mongoItemService.getSource('5ccb824909b41a3660d0e0a1');
    this.responseSources.subscribe(
      (data) => {
        console.log('data', data);
      }
    )
  }

  // onAddToShoppingList() {
  //   this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  // }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.listsService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
