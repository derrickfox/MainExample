import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';

import { GrandListComponent } from './grand-list/grand-list.component';
import { ListsService } from './grand-list/lists.service';
import { ParentListDetailComponent } from './grand-list/parent-list-details/parent-list-detail.component';
import { ParentListEditComponent } from './grand-list/parent-list-edit/parent-list-edit.component';
import { ParentListComponent } from './grand-list/parent-list.component';
import { ParentListStartComponent } from './grand-list/parent-list-start/parent-list-start.component';
import { ParentListItemComponent } from './grand-list/parent-list-item/parent-list-item.component';

import { SearchStringPipe } from './grand-list/search-bar-pipe';

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

    SearchStringPipe,

    GrandListComponent,
    ParentListDetailComponent,
    ParentListEditComponent,
    ParentListComponent,
    ParentListStartComponent,
    ParentListItemComponent,

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
