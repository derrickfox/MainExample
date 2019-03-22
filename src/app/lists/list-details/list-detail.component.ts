import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

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

  constructor(private listsService: ListsService,
    private route: ActivatedRoute,
    private router: Router) {
}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.list = this.listsService.getList(this.id);
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
