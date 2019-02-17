import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './chefs/recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './chefs/recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './chefs/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './chefs/recipes/recipe-edit/recipe-edit.component';

import { ChefsComponent } from './chefs/chefs.component';
import { ChefDetailComponent } from './chefs/chef-detail/chef-detail.component';
import { ChefEditComponent } from './chefs/chef-edit/chef-edit.component';
import { ChefStartComponent } from './chefs/chef-start/chef-start.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ]
  },
  {
    path: 'chefs', component: ChefsComponent, children: [
      { path: '', component: ChefStartComponent },
      { path: 'new', component: ChefEditComponent },
      { path: ':id', component: ChefDetailComponent },
      { path: ':id/edit', component: ChefEditComponent },
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
