import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RecipesComponent } from './lists/recipes/recipes.component';
import { RecipeListComponent } from './lists/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './lists/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './lists/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent } from './lists/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './lists/recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './lists/recipes/recipe.service';

import { BiographiesComponent } from './lists/biographies/biographies.component';
import { BiographyListComponent } from './lists/biographies/biography-list/biography-list.component';
import { BiographyDetailComponent } from './lists/biographies/biography-detail/biography-detail.component';
import { BiographyItemComponent } from './lists/biographies/biography-list/biography-item/biography-item.component';
import { BiographyStartComponent } from './lists/biographies/biography-start/biography-start.component';
import { BiographyEditComponent } from './lists/biographies/biography-edit/biography-edit.component';
import { BiographyService } from './lists/biographies/biography.service';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';

import { ListsComponent } from './lists/lists.component';
import { ListsService } from './lists/lists.service';
import { ListDetailComponent } from './lists/list-details/list-detail.component';
import { ListEditComponent } from './lists/list-edit/list-edit.component';
import { ListListComponent } from './lists/list-list/list-list.component';
import { ListStartComponent } from './lists/list-start/list-start.component';
import { ListItemComponent } from './lists/list-list/list-item/list-item.component';
import { IngredientsComponent } from './lists/recipes/ingredients/ingredients.component';
import { IngredientDetailComponent } from './lists/recipes/ingredients/ingredient-detail/ingredient-detail.component';
import { IngredientEditComponent } from './lists/recipes/ingredients/ingredient-edit/ingredient-edit.component';
import { IngredientListComponent } from './lists/recipes/ingredients/ingredient-list/ingredient-list.component';
import { IngredientStartComponent } from './lists/recipes/ingredients/ingredient-start/ingredient-start.component';

import { MongoItemService } from '../mongo.service';
import { HttpClientModule } from '@angular/common/http';
import { SourcesComponent } from './lists/sources/sources.component';
import { SourceDetailComponent } from './lists/sources/source-detail/source-detail.component';
import { SourceEditComponent } from './lists/sources/source-edit/source-edit.component';
import { SourceListComponent } from './lists/sources/source-list/source-list.component';
import { SourceStartComponent } from './lists/sources/source-start/source-start.component';
import { SourceItemComponent } from './lists/sources/source-list/source-item/source-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    ListsComponent,
    ListDetailComponent,
    ListEditComponent,
    ListListComponent,
    ListStartComponent,
    ListItemComponent,

    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,    

    BiographiesComponent,
    BiographyListComponent,
    BiographyDetailComponent,
    BiographyItemComponent,
    BiographyStartComponent,
    BiographyEditComponent,


    ShoppingListComponent,
    ShoppingEditComponent,

    DropdownDirective,

    IngredientsComponent,
    IngredientDetailComponent,
    IngredientEditComponent,
    IngredientListComponent,
    IngredientStartComponent,
    SourcesComponent,
    SourceDetailComponent,
    SourceEditComponent,
    SourceListComponent,
    SourceStartComponent,
    SourceItemComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShoppingListService, RecipeService, BiographyService, ListsService, MongoItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
