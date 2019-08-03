import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { List } from '../list.model';
import { ListsService } from '../lists.service';

import { MongoItemService } from '../../../mongo.service';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.css']
})
export class ListListComponent implements OnInit, OnDestroy {
  list: List;
  lists = [
    { _id: '3', name: 'kdjfa', description: 'kdjfadl', imagePath: 'jfdka;d'}, 
    { _id: '4', name: 'dafdad', description:'kjl;ad', imagePath: 'ddaaff'}]
  subscription: Subscription;

  constructor(private listsService: ListsService,
              private router: Router,
              private route: ActivatedRoute,
              private mongoItemService: MongoItemService) {
  }

  ngOnInit() {
    this.listsService.getAllSources().subscribe((lists: List[]) => {
      this.lists = lists;
    })
  }

  childEventClicked(list: List) {
    console.log('childEventClicked!!!!!!', list);
    this.list = list;
  }

  async getSources() {
    this.lists = await this.listsService.getAllSources();
    console.log('this.lists', this.lists);
  }

  onNewList() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
