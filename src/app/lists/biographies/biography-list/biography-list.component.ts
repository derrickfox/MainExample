import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Biography } from '../biography.model';
import { ListsService } from '../../lists.service';

@Component({
  selector: 'app-biography-list',
  templateUrl: './biography-list.component.html',
  styleUrls: ['./biography-list.component.css']
})
export class BiographyListComponent implements OnInit, OnDestroy {
  biographies;
  subscription: Subscription;

  constructor(private listsService: ListsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.listsService.biographiesChanged
      .subscribe(
        (biographies: Biography[]) => {
          this.biographies = biographies;
        }
      );
    this.biographies = this.listsService.getBiographies(0);
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
