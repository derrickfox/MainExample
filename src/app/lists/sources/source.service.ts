import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Source } from './source.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Injectable()
export class SourceService {
  sourcesChanged = new Subject<Source[]>();

  private sources: Source[];
//   private sources: Source[] = [
//     new Source(
//       '******',
//       '******',
//       'https://www.chinalawblog.com/wp-content/uploads/sites/110/2016/11/list-147904_960_720-550x675.png',
//       [
//         new Ingredient('Meat', 1),
//         new Ingredient('French Fries', 20)
//       ]),
//     new Source(
//       '*******',
//       '********',
//       'https://previews.123rf.com/images/tachyglossus/tachyglossus1705/tachyglossus170500046/78440175-happy-cartoon-chef-vector-illustration.jpg',
//       [
//         new Ingredient('Buns', 2),
//         new Ingredient('Meat', 1)
//       ])
//   ];

  constructor(private slService: ShoppingListService) { }

  getSources() {
    return this.sources.slice();
  }

  getSource(index: number) {
    return this.sources[index];
  }

//   addIngredientsToShoppingList(ingredients: Ingredient[]) {
//     this.slService.addIngredients(ingredients);
//   }

  addSource(source: Source) {
    this.sources.push(source);
    this.sourcesChanged.next(this.sources.slice());
  }

  updateSource(index: number, newSource: Source) {
    this.sources[index] = newSource;
    this.sourcesChanged.next(this.sources.slice());
  }

  deleteSource(index: number) {
    this.sources.splice(index, 1);
    this.sourcesChanged.next(this.sources.slice());
  }
}
