import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router, Route } from '@angular/router';
import { Location } from '@angular/common';

import { List } from '../list.model';
import { ListsService } from '../lists.service';
import { MongoItemService } from '../../../mongo.service';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-parent-list-detail',
  templateUrl: './parent-list-detail.component.html',
  styleUrls: ['./parent-list-detail.component.css']
})
export class ParentListDetailComponent implements OnInit {
  @Input() list: List;
  id: string;
  recipe;
  responseSources;
  responseList;
  response;

  constructor(private listsService: ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private mongoItemService: MongoItemService
    ) {
      this.list = { _id: 'kadf', name: 'constructor name', description: 'lkfjdka', imagePath: ''};
}

  async ngOnInit() {
    await this.route.params
      .subscribe(
        (params: Params) => {
          // this.id = +params['id'];
          console.log('list-details -> ngOnInit() -> params.id', params.id);
          this.id = params.id;
          // this.list = this.listsService.getSource(this.id);
          // console.log('list-details -> ngOnInit() -> subscribe -> this.list', this.list);
          this.getDetail();
        }
      );

    // /* WHY DON"T YOU NEED TO USE 'THIS' IN FRONT OF LOCATION??!?!?! */
    // let afterBackSlash = location.pathname;
    // let afterRegex = afterBackSlash.match(/[^/]*$/);
    // console.log('list-detail -> ngOnInit() -> afterBackSlash', afterRegex[0]);
    // console.log('list-detail -> ngOnInit() -> this.list', this.list);
    // this.list = await this.listsService.getSource(''+afterRegex[0]+'');
    // console.log('list-detail -> ngOnInit() -> this.list', this.list);

  }

  testFunc2() {
    console.log('testFunc()');
    this.list.name = 'Test Func Name';
  }

  async getDetail() {
    this.response = await this.mongoItemService.getSource(this.id);
    await this.response.subscribe(data => {
      // this.source = data;
      console.log('list-details -> getDetail() -> data', data);
      // this.source.name = data.name;
      this.list = data;
    });
  }

  onEditList() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteList() {
    // this.listsService.deleteList(this.id);
    // this.router.navigate(['/lists']);
  }

  initializeSources() {
    // !!!! If you receive a CORS error, install a CORS browser extention to handle the error locally !!!
    this.responseSources = this.mongoItemService.getAllSources();
    this.responseSources.subscribe((data) => {
        this.responseList = data;
        console.log('this.responseList', this.responseList);
      }
    );
  }

}
