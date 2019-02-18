import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './chefs/recipes/recipes.component';
import { RecipeListComponent } from './chefs/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './chefs/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './chefs/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './chefs/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './chefs/recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './chefs/recipes/recipe.service';
import { ChefsComponent } from './chefs/chefs.component';
import { ChefsService } from './chefs/chefs.service';
import { ChefDetailComponent } from './chefs/chef-detail/chef-detail.component';
import { ChefEditComponent } from './chefs/chef-edit/chef-edit.component';
import { ChefListComponent } from './chefs/chef-list/chef-list.component';
import { ChefStartComponent } from './chefs/chef-start/chef-start.component';
import { ChefItemComponent } from './chefs/chef-list/chef-item/chef-item.component';
import { IngredientsComponent } from './chefs/recipes/ingredients/ingredients.component';
import { IngredientDetailComponent } from './chefs/recipes/ingredients/ingredient-detail/ingredient-detail.component';
import { IngredientEditComponent } from './chefs/recipes/ingredients/ingredient-edit/ingredient-edit.component';
import { IngredientListComponent } from './chefs/recipes/ingredients/ingredient-list/ingredient-list.component';
import { IngredientStartComponent } from './chefs/recipes/ingredients/ingredient-start/ingredient-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    ChefsComponent,
    ChefDetailComponent,
    ChefEditComponent,
    ChefListComponent,
    ChefStartComponent,
    ChefItemComponent,
    IngredientsComponent,
    IngredientDetailComponent,
    IngredientEditComponent,
    IngredientListComponent,
    IngredientStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService, RecipeService, ChefsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
