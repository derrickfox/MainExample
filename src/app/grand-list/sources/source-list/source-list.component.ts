import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Source } from '../source.model';
import { ListsService } from '../../lists.service';

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.css']
})
export class SourceListComponent implements OnInit, OnDestroy {
  sources;
  subscription: Subscription;

  constructor(private listsService: ListsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.listsService.sourcesChanged
      .subscribe(
        (sources: Source[]) => {
          this.sources = sources;
        }
      );
      console.log('source-list -> ngOnInit()')
    // this.sources = this.listsService.getSources(0);
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
