import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrandListComponent } from './grand-list/grand-list.component';
import { ParentListDetailComponent } from './grand-list/parent-list-details/parent-list-detail.component';
import { ParentListEditComponent } from './grand-list/parent-list-edit/parent-list-edit.component';
import { ParentListStartComponent } from './grand-list/parent-list-start/parent-list-start.component';

import { SourceDetailComponent } from './grand-list/sources/source-detail/source-detail.component';
import { SourceListComponent } from './grand-list/sources/source-list/source-list.component';
import { SourceEditComponent } from './grand-list/sources/source-edit/source-edit.component';
import { ParentListItemComponent } from './grand-list/parent-list-item/parent-list-item.component';
import { ParentListComponent } from './grand-list/parent-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  {
    path: 'lists', component: GrandListComponent, children: [
      { path: '', component: ParentListStartComponent },
      { path: 'new', component: ParentListEditComponent },
      { path: ':id/edit', component: ParentListEditComponent },
      { path: 'sources', component: ParentListComponent, children: [
          { path: '', component: ParentListStartComponent },
          { path: 'new', component: ParentListStartComponent },
          { path: ':id', component: ParentListDetailComponent },
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
