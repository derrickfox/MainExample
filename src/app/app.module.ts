import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';

import { ListsComponent } from './grand-list/lists.component';
import { ListsService } from './grand-list/lists.service';
import { ListDetailComponent } from './grand-list/list-details/list-detail.component';
import { ListEditComponent } from './grand-list/list-edit/list-edit.component';
import { GrandListComponent } from './grand-list/grand-list.component';
import { ListStartComponent } from './grand-list/list-start/list-start.component';
import { ListItemComponent } from './grand-list/list-item/list-item.component';

import { MongoItemService } from '../mongo.service';
import { HttpClientModule } from '@angular/common/http';
import { SourcesComponent } from './grand-list/sources/sources.component';
import { SourceDetailComponent } from './grand-list/sources/source-detail/source-detail.component';
import { SourceEditComponent } from './grand-list/sources/source-edit/source-edit.component';
import { SourceListComponent } from './grand-list/sources/source-list/source-list.component';
import { SourceStartComponent } from './grand-list/sources/source-start/source-start.component';
import { SourceItemComponent } from './grand-list/sources/source-list/source-item/source-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    ListsComponent,
    ListDetailComponent,
    ListEditComponent,
    GrandListComponent,
    ListStartComponent,
    ListItemComponent,

    DropdownDirective,

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
  providers: [ListsService, MongoItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
