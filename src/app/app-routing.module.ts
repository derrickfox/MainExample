import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsComponent } from './lists/lists.component';
import { ListDetailComponent } from './lists/list-details/list-detail.component';
import { ListEditComponent } from './lists/list-edit/list-edit.component';
import { ListStartComponent } from './lists/list-start/list-start.component';

import { SourceDetailComponent } from './lists/sources/source-detail/source-detail.component';
import { SourceListComponent } from './lists/sources/source-list/source-list.component';
import { SourceEditComponent } from './lists/sources/source-edit/source-edit.component';
import { ListItemComponent } from './lists/list-list/list-item/list-item.component';
import { ListListComponent } from './lists/list-list/list-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  {
    path: 'lists', component: ListsComponent, children: [
      { path: '', component: ListStartComponent },
      { path: 'new', component: ListEditComponent },
      { path: ':id/edit', component: ListEditComponent },
      { path: 'sources', component: ListListComponent, children: [
          { path: '', component: ListStartComponent },
          { path: ':id', component: ListDetailComponent },
          { path: ':id/edit', component: SourceEditComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
