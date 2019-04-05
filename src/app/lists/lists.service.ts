import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { List } from '../lists/list.model';
import { Recipe } from '../lists/recipes/recipe.model';
import { Ingredient } from './recipes/ingredients/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class ListsService implements OnInit {
  listsChanged = new Subject<List[]>();
  recipesChanged = new Subject<Recipe[]>();
  // selectedList = new List(
  //   'Mock',
  //   'Mock',
  //   'imagepath',
  //   [
  //     new Recipe(
  //       '*******',
  //       '******',
  //       'https://comps.canstockphoto.com/cartoon-baby-chef-clip-art-vector_csp43994162.jpg',
  //       [
  //         new Ingredient('*****', 3)
  //       ]
  //     )
  //   ]
  // );
  listSelected;
  recipeSelected;
  indexOfList;
  indexOfRecipe;

  private lists: List[] = [
    new List(
      'Peter',
      'Uptown Kitchen',
      'https://comps.canstockphoto.com/cartoon-baby-chef-clip-art-vector_csp43994162.jpg',
      [
        new Recipe(
          'Peters Pack o Peters',
          'From list service',
          '',
          [
            new Ingredient('Stuff', 4),
            new Ingredient('Crap', 9)
          ]
        ),
        new Recipe(
          'Peters Pizza Pie',
          'From list service',
          '',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
          ]
        )
      ]
    ),
    new List(
      'Jorge',
      'Downtown Deli',
      'https://previews.123rf.com/images/tachyglossus/tachyglossus1705/tachyglossus170500046/78440175-happy-cartoon-chef-vector-illustration.jpg',
      [
        new Recipe(
          'Jorges Jamalaya',
          'From list service',
          '',
          [
            new Ingredient('Bark', 23),
            new Ingredient('Dirt', 11)
          ]
        ),
        new Recipe(
          'Jorges Jerk Chicken',
          'From list service',
          '',
          [
            new Ingredient('Sky', 23),
            new Ingredient('Watr', 11)
          ]
        )
      ]
    )
  ];

  listsJSON = {
    "lists": [
      {
        "name": "Recipes",
        "description": "List of recipes",
        "image": "some image",
        "recipes": [
          {
            "name": "Banana Bread",
            "description": "A banana cake disguised as bread.",
            "image": "some other image",
            "ingredients": [
              {
                "name": "Banana",
                "amount": 4
              },
              {
                "name": "Bread",
                "amount": 8
              }
            ]
          },
          {
            "name": "Steak",
            "description": "Diced cow.",
            "image": "some other image",
            "ingredients": [
              {
                "name": "Cow",
                "amount": 1
              },
              {
                "name": "Plate",
                "amount": 1
              }
            ]
          }
        ]
      },
      {
        "name": "Biographies",
        "description": "Description dave",
        "image": "some image dave",
        "recipes": [
          {
            "name": "Frank Herbert",
            "description": "Science fiction author",
            "image": "some other image",
            "ingredients": [
              {
                "name": "Beef",
                "amount": 6
              },
              {
                "name": "Salt",
                "amount": 9
              }
            ]
          },
          {
            "name": "George Orwell",
            "description": "Political fiction(?) author",
            "image": "some other image",
            "ingredients": [
              {
                "name": "1984",
                "amount": 1
              },
              {
                "name": "Animal Farm",
                "amount": 3
              }
            ]
          }
        ]
      }
    ]
  }

  constructor(
    private slService: ShoppingListService,
    ) { }

  ngOnInit() {

  }

  getLists() {
    return this.listsJSON.lists.slice();
  }

  getList(index: number) {
    this.listSelected = this.listsJSON.lists[index];
    this.indexOfList = index;
    console.log('getList() -> lists.service');
    console.log('this.listSelected', this.listSelected);
    console.log('this.indexOfList', this.indexOfList);
    return this.listSelected;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addList(list) {
    this.listsJSON.lists.push(list);
    this.listsChanged.next(this.lists.slice());
  }

  updateList(index: number, newList) {
    this.listsJSON.lists[index] = newList;
    this.listsChanged.next(this.lists.slice());
  }

  deleteList(index: number) {
    this.lists.splice(index, 1);
    this.listsChanged.next(this.lists.slice());
  }

  getRecipes(index) {
    return this.listsJSON.lists[index].recipes.slice();
  }

  getRecipe(index: number) {
    this.recipeSelected = this.listsJSON.lists[this.indexOfList].recipes[index];
    // TODO this is a bug, do not use index in two different places at the same time
    // return this.listsJSON.lists[index].recipes[index];
    return this.recipeSelected;
  }

  addRecipe(recipe: Recipe) {
    // this.selectedList.recipes.push(recipe);
    // this.recipesChanged.next(this.selectedList.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    // this.selectedList.recipes[index] = newRecipe;
    // this.recipesChanged.next(this.selectedList.recipes.slice());
  }

  deleteRecipe(index: number) {
    // this.selectedList.recipes.splice(index, 1);
    // this.recipesChanged.next(this.selectedList.recipes.slice());
  }
}
