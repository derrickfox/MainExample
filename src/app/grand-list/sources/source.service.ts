import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Source } from './source.model';

@Injectable()
export class SourceService {
  sourcesChanged = new Subject<Source[]>();

  private sources: Source[];

  constructor() { }

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
