import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { List } from '../list.model';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  list;
  id: number;
  recipe;

  constructor(private listsService: ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // TODO pass entire list object as a parameter to getList, not an id number
          this.list = this.listsService.getList(this.id);
          console.log('ngOnInit() -> list-detail');
          console.log('this.recipe', this.recipe);
        }
      );
  }

  onEditList() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteList() {
    this.listsService.deleteList(this.id);
    this.router.navigate(['/lists']);
  }

}
