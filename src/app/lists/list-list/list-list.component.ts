import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { List } from '../list.model';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-list-list',
  templateUrl: './list-list.component.html',
  styleUrls: ['./list-list.component.css']
})
export class ListListComponent implements OnInit, OnDestroy {
  lists;
  subscription: Subscription;

  constructor(private listsService: ListsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.listsService.listsChanged
      .subscribe(
        (lists: List[]) => {
          this.lists = lists;
        }
      );
    // this.lists = this.listsService.getLists();
  }

  onNewList() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
