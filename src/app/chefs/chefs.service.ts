import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Chef } from '../chefs/chef.model';
import { Recipe } from '../chefs/recipes/recipe.model';
import { Ingredient } from './recipes/ingredients/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class ChefsService implements OnInit {
  chefsChanged = new Subject<Chef[]>();
  recipesChanged = new Subject<Recipe[]>();
  selectedChef = new Chef(
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

  private chefs: Chef[] = [
    new Chef(
      'Peter',
      'Uptown Kitchen',
      'https://comps.canstockphoto.com/cartoon-baby-chef-clip-art-vector_csp43994162.jpg',
      [
        new Recipe(
          'Peters Pack o Peters',
          'From chef service',
          '',
          [
            new Ingredient('Stuff', 4),
            new Ingredient('Crap', 9)
          ]
        ),
        new Recipe(
          'Peters Pizza Pie',
          'From chef service',
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
          'Jorges Jamalaya',
          'From chef service',
          '',
          [
            new Ingredient('Bark', 23),
            new Ingredient('Dirt', 11)
          ]
        ),
        new Recipe(
          'Jorges Jerk Chicken',
          'From chef service',
          '',
          [
            new Ingredient('Sky', 23),
            new Ingredient('Watr', 11)
          ]
        )
      ]
    )
  ];

  chefsJSON = {
    "chefs": [
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

  getChefs() {
    return this.chefsJSON.chefs.slice();
  }

  getChef(index: number) {
    return this.chefsJSON.chefs[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addChef(chef) {
    this.chefsJSON.chefs.push(chef);
    this.chefsChanged.next(this.chefs.slice());
  }

  updateChef(index: number, newChef) {
    this.chefsJSON.chefs[index] = newChef;
    this.chefsChanged.next(this.chefs.slice());
  }

  deleteChef(index: number) {
    this.chefs.splice(index, 1);
    this.chefsChanged.next(this.chefs.slice());
  }

  getRecipes(index) {
    return this.chefsJSON.chefs[index].recipes.slice();
  }

  getRecipe(index: number) {
    return this.chefsJSON.chefs[index].recipes[index];
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
