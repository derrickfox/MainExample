import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Biography } from './biography.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Injectable()
export class BiographyService {
  biographiesChanged = new Subject<Biography[]>();

  private biographies: Biography[];
//   private biographies: Biography[] = [
//     new Biography(
//       '******',
//       '******',
//       'https://www.chinalawblog.com/wp-content/uploads/sites/110/2016/11/list-147904_960_720-550x675.png',
//       [
//         new Ingredient('Meat', 1),
//         new Ingredient('French Fries', 20)
//       ]),
//     new Biography(
//       '*******',
//       '********',
//       'https://previews.123rf.com/images/tachyglossus/tachyglossus1705/tachyglossus170500046/78440175-happy-cartoon-chef-vector-illustration.jpg',
//       [
//         new Ingredient('Buns', 2),
//         new Ingredient('Meat', 1)
//       ])
//   ];

  constructor(private slService: ShoppingListService) { }

  getBiographies() {
    return this.biographies.slice();
  }

  getBiography(index: number) {
    return this.biographies[index];
  }

//   addIngredientsToShoppingList(ingredients: Ingredient[]) {
//     this.slService.addIngredients(ingredients);
//   }

  addBiography(biography: Biography) {
    this.biographies.push(biography);
    this.biographiesChanged.next(this.biographies.slice());
  }

  updateBiography(index: number, newBiography: Biography) {
    this.biographies[index] = newBiography;
    this.biographiesChanged.next(this.biographies.slice());
  }

  deleteBiography(index: number) {
    this.biographies.splice(index, 1);
    this.biographiesChanged.next(this.biographies.slice());
  }
}
