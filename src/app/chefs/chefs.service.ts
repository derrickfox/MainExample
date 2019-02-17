import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Chef } from '../chefs/chef.model';
import { Recipe } from '../chefs/recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class ChefsService {
  chefsChanged = new Subject<Chef[]>();

  private chefs: Chef[] = [
    new Chef(
      'Test Chef',
      'A jerk',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Recipe('Test Recipe', 
                    'Test Description', 
                    'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg', 
                    [
                      new Ingredient('Buns', 2),
                      new Ingredient('Meat', 1)
                    ])
      ]),
      new Chef(
        'Second Chef',
        'A nice dude',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
          new Recipe('Test Recipe', 
                      'Test Description', 
                      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg', 
                      [
                        new Ingredient('Stuff', 23),
                        new Ingredient('Crap', 11)
                      ])
        ])
  ];

  constructor(private slService: ShoppingListService) {}

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
