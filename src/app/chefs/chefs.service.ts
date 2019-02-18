import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Chef } from '../chefs/chef.model';
import { Recipe } from '../chefs/recipes/recipe.model';
import { Ingredient } from './recipes/ingredients/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class ChefsService {
  chefsChanged = new Subject<Chef[]>();

  private chefs: Chef[] = [
    new Chef(
      'Test Chef One',
      'First Bio Test',
      'https://comps.canstockphoto.com/cartoon-baby-chef-clip-art-vector_csp43994162.jpg',
      [
        new Recipe('First Recipe',
          '#1 Test Description',
          '',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
          ])
      ]),
    new Chef(
      'Second Chef',
      'Second Bio Test',
      'https://previews.123rf.com/images/tachyglossus/tachyglossus1705/tachyglossus170500046/78440175-happy-cartoon-chef-vector-illustration.jpg',
      [
        new Recipe('Second Recipe',
          '#2 Test Description',
          '',
          [
            new Ingredient('Stuff', 23),
            new Ingredient('Crap', 11)
          ])
      ])
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
}
