import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrandListComponent } from './grand-list/grand-list.component';
import { ListDetailComponent } from './grand-list/list-details/list-detail.component';
import { ListEditComponent } from './grand-list/list-edit/list-edit.component';
import { ListStartComponent } from './grand-list/list-start/list-start.component';

import { SourceDetailComponent } from './grand-list/sources/source-detail/source-detail.component';
import { SourceListComponent } from './grand-list/sources/source-list/source-list.component';
import { SourceEditComponent } from './grand-list/sources/source-edit/source-edit.component';
import { ListItemComponent } from './grand-list/list-item/list-item.component';
import { ParentListComponent } from './grand-list/parent-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  {
    path: 'lists', component: GrandListComponent, children: [
      { path: '', component: ListStartComponent },
      { path: 'new', component: ListEditComponent },
      { path: ':id/edit', component: ListEditComponent },
      { path: 'sources', component: ParentListComponent, children: [
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
