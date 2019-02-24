import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Chef } from '../chefs/chef.model';
import { Recipe } from '../chefs/recipes/recipe.model';
import { Ingredient } from './recipes/ingredients/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class ChefsService {
  chefsChanged = new Subject<Chef[]>();
  recipesChanged = new Subject<Recipe[]>();
  selectedChef = new Chef(
    'Mock',
    'Mock',
    'imagepath',
    [
      new Recipe(
        'Recipe Object One',
        'Object Description',
        'https://comps.canstockphoto.com/cartoon-baby-chef-clip-art-vector_csp43994162.jpg',
        [
          new Ingredient('kdjal', 3)
        ]
      )
    ]
  );

  private chefs: Chef[] = [
    new Chef(
      'Peter',
      'Uptown Kitchen',
      'https://comps.canstockphoto.com/cartoon-baby-chef-clip-art-vector_csp43994162.jpg',
      [
        new Recipe(
          'Chef One, Recipe One',
          'Service One-One',
          '',
          [
            new Ingredient('Stuff', 4),
            new Ingredient('Crap', 9)
          ]
        ),
        new Recipe(
          'Chef One, Recipe Two',
          'Service One-Two',
          '',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
          ]
        )
      ]
    ),
    new Chef(
      'Jorge',
      'Downtown Deli',
      'https://previews.123rf.com/images/tachyglossus/tachyglossus1705/tachyglossus170500046/78440175-happy-cartoon-chef-vector-illustration.jpg',
      [
        new Recipe(
          'Chef Two, Recipe One',
          'Chef Service 1',
          '',
          [
            new Ingredient('Bark', 23),
            new Ingredient('Dirt', 11)
          ]
        ),
        new Recipe(
          'Chef Two, Recipe Two',
          'Chef Service 2',
          '',
          [
            new Ingredient('Sky', 23),
            new Ingredient('Watr', 11)
          ]
        )
      ]
    )
  ];

  constructor(private slService: ShoppingListService) { }

  getChefs() {
    return this.chefs.slice();
  }

  getChef(index: number) {
    return this.chefs[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addChef(chef: Chef) {
    this.chefs.push(chef);
    this.chefsChanged.next(this.chefs.slice());
  }

  updateChef(index: number, newChef: Chef) {
    this.chefs[index] = newChef;
    this.chefsChanged.next(this.chefs.slice());
  }

  deleteChef(index: number) {
    this.chefs.splice(index, 1);
    this.chefsChanged.next(this.chefs.slice());
  }

  getRecipes() {
    return this.selectedChef.recipes.slice();
  }

  getRecipe(index: number) {
    return this.chefs[index];
  }

  addRecipe(recipe: Recipe) {
    this.selectedChef.recipes.push(recipe);
    this.recipesChanged.next(this.selectedChef.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.selectedChef.recipes[index] = newRecipe;
    this.recipesChanged.next(this.selectedChef.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.selectedChef.recipes.splice(index, 1);
    this.recipesChanged.next(this.selectedChef.recipes.slice());
  }
}
