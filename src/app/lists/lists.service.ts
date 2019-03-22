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
  selectedList = new List(
    'Mock',
    'Mock',
    'imagepath',
    [
      new Recipe(
        '*******',
        '******',
        'https://comps.canstockphoto.com/cartoon-baby-chef-clip-art-vector_csp43994162.jpg',
        [
          new Ingredient('*****', 3)
        ]
      )
    ]
  );

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
        "name": "Chuck",
        "description": "Description chuck",
        "image": "some image",
        "recipes": [
          {
            "name": "Recipe Chuck One",
            "description": "recipe description one",
            "image": "some other image",
            "ingredients": [
              {
                "name": "Onion",
                "amount": 4
              },
              {
                "name": "Potato",
                "amount": 8
              }
            ]
          },
          {
            "name": "Recipe Chuck Two",
            "description": "recipe description two",
            "image": "some other image",
            "ingredients": [
              {
                "name": "Celery",
                "amount": 5
              },
              {
                "name": "Nuts",
                "amount": 3
              }
            ]
          }
        ]
      },
      {
        "name": "Dave",
        "description": "Description dave",
        "image": "some image dave",
        "recipes": [
          {
            "name": "Recipe Dave One",
            "description": "recipe description one",
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
            "name": "Recipe Dave Two",
            "description": "recipe description two",
            "image": "some other image",
            "ingredients": [
              {
                "name": "Jelly",
                "amount": 1
              },
              {
                "name": "Water",
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
    return this.listsJSON.lists[index];
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
    return this.listsJSON.lists[index].recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.selectedList.recipes.push(recipe);
    this.recipesChanged.next(this.selectedList.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.selectedList.recipes[index] = newRecipe;
    this.recipesChanged.next(this.selectedList.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.selectedList.recipes.splice(index, 1);
    this.recipesChanged.next(this.selectedList.recipes.slice());
  }
}
