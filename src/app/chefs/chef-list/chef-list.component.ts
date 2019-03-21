import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Chef } from '../chef.model';
import { ChefsService } from '../chefs.service';

@Component({
  selector: 'app-chef-list',
  templateUrl: './chef-list.component.html',
  styleUrls: ['./chef-list.component.css']
})
export class ChefListComponent implements OnInit, OnDestroy {
  chefs;
  subscription: Subscription;

  constructor(private chefsService: ChefsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.chefsService.chefsChanged
      .subscribe(
        (chefs: Chef[]) => {
          this.chefs = chefs;
        }
      );
    this.chefs = this.chefsService.getChefs();
  }

  onNewChef() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
