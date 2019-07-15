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
  @Input() list: List;
  lists = [{ name: 'kdjfa', description: 'kdjfadl', imagePath: 'jfdka;d'}, {name: 'dafdad', description:'kjl;ad', imagePath: 'ddaaff'}]
  subscription: Subscription;

  constructor(private listsService: ListsService,
              private router: Router,
              private route: ActivatedRoute,
              private mongoItemService: MongoItemService) {
  }

  ngOnInit() {
    console.log('list-list -> ngOnInit()');
    this.listsService.getAllSources().subscribe((lists: List[]) => {
      this.lists = lists;
    })
    console.log('list-list -> ngOnInit() 1-> this.lists', this.lists);
    // this.getSources();
    console.log('list-list -> ngOnInit() 2-> this.lists', this.lists);
    // this.subscription = this.listsService.listsChanged
    //   .subscribe  (
    //     (lists: List[]) => {
    //       this.lists = this.listsService.getAllSources();
    //       console.log('list-list -> ngOnInit() -> subscribe() -> this.lists', this.lists);
    //     }
    //   );
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
