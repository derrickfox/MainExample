import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './lists/recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './lists/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './lists/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './lists/recipes/recipe-edit/recipe-edit.component';

import { ListsComponent } from './lists/lists.component';
import { ListDetailComponent } from './lists/list-details/list-detail.component';
import { ListEditComponent } from './lists/list-edit/list-edit.component';
import { ListStartComponent } from './lists/list-start/list-start.component';
import { RecipeListComponent } from './lists/recipes/recipe-list/recipe-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  {
    path: 'lists', component: ListsComponent, children: [
      { path: '', component: ListStartComponent },
      { path: 'new', component: ListEditComponent },
      { path: ':id/edit', component: ListEditComponent },
      { path: 'recipe/:id', component: RecipeDetailComponent },
      { path: 'recipes', component: ListDetailComponent },
      { path: ':id', component: ListDetailComponent, children: [
          { path: ':id', component: RecipeDetailComponent },
          { path: 'recipes', component: RecipeListComponent },
          { path: 'recipe/:id', component: RecipeDetailComponent },
          { path: ':id/edit', component: RecipeEditComponent }
        ]
      }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
