import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';

import { ListsComponent } from './lists/lists.component';
import { ListsService } from './lists/lists.service';
import { ListDetailComponent } from './lists/list-details/list-detail.component';
import { ListEditComponent } from './lists/list-edit/list-edit.component';
import { ListListComponent } from './lists/list-list/list-list.component';
import { ListStartComponent } from './lists/list-start/list-start.component';
import { ListItemComponent } from './lists/list-list/list-item/list-item.component';

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
