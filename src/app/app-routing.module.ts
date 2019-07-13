import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsComponent } from './lists/lists.component';
import { ListDetailComponent } from './lists/list-details/list-detail.component';
import { ListEditComponent } from './lists/list-edit/list-edit.component';
import { ListStartComponent } from './lists/list-start/list-start.component';

import { SourceDetailComponent } from './lists/sources/source-detail/source-detail.component';
import { SourceListComponent } from './lists/sources/source-list/source-list.component';
import { SourceEditComponent } from './lists/sources/source-edit/source-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  {
    path: 'lists', component: ListsComponent, children: [
      { path: '', component: ListStartComponent },
      { path: 'new', component: ListEditComponent },
      { path: ':id/edit', component: ListEditComponent },
      { path: 'recipes', component: ListDetailComponent },
      // { path: 'sources', component: ListDetailComponent },
      { path: 'sources', component: ListDetailComponent, children: [
          { path: ':id', component: SourceDetailComponent },
          { path: 'recipes', component: SourceListComponent },
          { path: 'recipe/:id', component: SourceDetailComponent },
          { path: ':id/edit', component: SourceEditComponent }
        ]
      },
      { path: ':id', component: ListDetailComponent, children: [
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
