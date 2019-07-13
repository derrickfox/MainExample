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

  // // listsJSON = jsonFile;

  // listsJSON = {
  //   "lists": [
  //     {
  //       "name": "Recipes",
  //       "description": "List of recipes",
  //       "image": "some image",
  //       "recipes": [
  //         {
  //           "name": "Banana Bread",
  //           "description": "A banana cake disguised as bread.",
  //           "image": "some other image",
  //           "ingredients": [
  //             {
  //               "name": "Banana",
  //               "amount": 4
  //             },
  //             {
  //               "name": "Bread",
  //               "amount": 8
  //             }
  //           ]
  //         },
  //         {
  //           "name": "Steak",
  //           "description": "Diced cow.",
  //           "image": "some other image",
  //           "ingredients": [
  //             {
  //               "name": "Cow",
  //               "amount": 1
  //             },
  //             {
  //               "name": "Plate",
  //               "amount": 1
  //             }
  //           ]
  //         }
  //       ],
  //       "sources": [
  //         {
  //           "name": "Banana Bread",
  //           "description": "A banana cake disguised as bread.",
  //           "image": "some other image",
  //           "ingredients": [
  //             {
  //               "name": "Banana",
  //               "amount": 4
  //             },
  //             {
  //               "name": "Bread",
  //               "amount": 8
  //             }
  //           ]
  //         },
  //         {
  //           "name": "Steak",
  //           "description": "Diced cow.",
  //           "image": "some other image",
  //           "ingredients": [
  //             {
  //               "name": "Cow",
  //               "amount": 1
  //             },
  //             {
  //               "name": "Plate",
  //               "amount": 1
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Biographies",
  //       "description": "Description dave",
  //       "image": "some image dave",
  //       "recipes": [
  //         {
  //           "name": "Frank Herbert",
  //           "description": "Science fiction author",
  //           "image": "some other image",
  //           "ingredients": [
  //             {
  //               "name": "Beef",
  //               "amount": 6
  //             },
  //             {
  //               "name": "Salt",
  //               "amount": 9
  //             }
  //           ]
  //         },
  //         {
  //           "name": "George Orwell",
  //           "description": "Political fiction(?) author",
  //           "image": "some other image",
  //           "ingredients": [
  //             {
  //               "name": "1984",
  //               "amount": 1
  //             },
  //             {
  //               "name": "Animal Farm",
  //               "amount": 3
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       "name": "Sources",
  //       "description": "Description dave",
  //       "image": "some image dave",
  //       "recipes": [
  //         {
  //           "name": "Unemployement Statistics",
  //           "description": "Statitics about US unemployement",
  //           "image": "some other image",
  //           "ingredients": [
  //             {
  //               "name": "US Statistics Stuff",
  //               "amount": 6
  //             }
  //           ]
  //         },
  //         {
  //           "name": "Housing Statistics",
  //           "description": "Data on US housing",
  //           "image": "some other image",
  //           "ingredients": [
  //             {
  //               "name": "HUD Website",
  //               "amount": 1
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }

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

  // getSources(index) {
  //   return this.listsJSON.lists[index].sources.slice();
  // }

  getSource(id: string) {
    // this.resourceSelected = this.listsJSON.lists[this.indexOfList].sources[index];
    // return this.resourceSelected;
    this.resourceSelected = this.mongoItemService.getSource(id);
    this.resourceSelected.subscribe(
      (data) => {
        
      }
    )
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
