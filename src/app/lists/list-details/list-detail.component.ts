import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { List } from '../list.model';
import { ListsService } from '../lists.service';
import { MongoItemService } from '../../../mongo.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  list;
  id: number;
  recipe;
  responseSources;
  responseList;

  constructor(private listsService: ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private mongoItemService: MongoItemService) {
}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // TODO pass entire list object as a parameter to getList, not an id number
          this.list = this.listsService.getList(this.id);
        }
      );
      this.onClickSources();
  }

  onEditList() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteList() {
    this.listsService.deleteList(this.id);
    this.router.navigate(['/lists']);
  }

  async onClickSources() {
    // !!!! If you receive a CORS error, install a CORS browser extention to handle the error locally !!!
    this.responseSources = this.mongoItemService.getAllSource();
    this.responseSources.subscribe((data) => {
        this.responseList = data;
        console.log('this.responseList', this.responseList);
      }
    )
  }

  onClickSource() {
    // !!!! If you receive a CORS error, install a CORS browser extention to handle the error locally !!!
    this.responseSources = this.mongoItemService.getSource('5ccb824909b41a3660d0e0a1');
    this.responseSources.subscribe(
      (data) => {
        console.log('data', data);
      }
    )
  }

}
