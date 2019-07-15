import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { List } from '../lists/list.model';
import { Source } from '../lists/sources/source.model';
// import data from '../mockData.json';
import { MongoItemService } from '../../mongo.service';

// const jsonFile = (<any>data);

@Injectable()
export class ListsService implements OnInit {
  listsChanged = new Subject<List[]>();
  sourcesChanged = new Subject<Source[]>();

  listSelected;
  recipeSelected;
  resourceSelected;
  indexOfList;
  indexOfRecipe;

  constructor(
    private mongoItemService: MongoItemService
  ) { }

  ngOnInit() {

  }

  // getLists() {
  //   return this.listsJSON.lists.slice();
  // }

  // getList(index: number) {
  //   this.listSelected = this.listsJSON.lists[index];
  //   this.indexOfList = index;
  //   return this.listSelected;
  // }

  addList(list) {
    // this.listsJSON.lists.push(list);
    // this.listsChanged.next(this.lists.slice());
  }

  updateList(index: number, newList) {
    // this.listsJSON.lists[index] = newList;
    // this.listsChanged.next(this.lists.slice());
  }

  deleteList(index: number) {
    // this.lists.splice(index, 1);
    // this.listsChanged.next(this.lists.slice());
  }

  // getRecipes(index) {
  //   return this.listsJSON.lists[index].recipes.slice();
  // }

  // getRecipe(index: number) {
  //   this.recipeSelected = this.listsJSON.lists[this.indexOfList].recipes[index];
  //   return this.recipeSelected;
  // }

  deleteRecipe(index: number) {
    // this.selectedList.recipes.splice(index, 1);
    // this.recipesChanged.next(this.selectedList.recipes.slice());
  }

  deleteBiography(index: number) {

  }

  getBiographies(index: number) {

  }

  getBiography(index: number) {
    
  }

  getSource(id: string) {
    // this.resourceSelected = this.listsJSON.lists[this.indexOfList].sources[index];
    // return this.resourceSelected;
    this.resourceSelected = this.mongoItemService.getSource(id);
    this.resourceSelected.subscribe(
      (data) => {
        console.log('getSource')
      }
    )
  }

  getAllSources() {
    // this.resourceSelected = this.listsJSON.lists[this.indexOfList].sources[index];
    // return this.resourceSelected;

    this.resourceSelected = this.mongoItemService.getAllSources();

    // this.resourceSelected.subscribe(
    //   (data) => {
    //     console.log('getAllSources')
    //     console.log('getAllSources -> data', data);
    //   }
    // )
    return this.resourceSelected;
  }

  addSource(source: Source) {
    // this.selectedList.recipes.push(recipe);
    // this.recipesChanged.next(this.selectedList.recipes.slice());
  }

  updateSource(index: number, newSource: Source) {
    // this.selectedList.recipes[index] = newRecipe;
    // this.recipesChanged.next(this.selectedList.recipes.slice());
  }

  deleteSource(index: string) {
    // this.selectedList.recipes.splice(index, 1);
    // this.recipesChanged.next(this.selectedList.recipes.slice());
  }

}
