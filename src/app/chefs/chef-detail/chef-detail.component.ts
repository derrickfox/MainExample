import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Chef } from '../chef.model';
import { ChefsService } from '../chefs.service';

@Component({
  selector: 'app-chef-detail',
  templateUrl: './chef-detail.component.html',
  styleUrls: ['./chef-detail.component.css']
})
export class ChefDetailComponent implements OnInit {
  chef;
  id: number;

  constructor(private chefsService: ChefsService,
    private route: ActivatedRoute,
    private router: Router) {
}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.chef = this.chefsService.getChef(this.id);
        }
      );
  }

  onEditChef() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteChef() {
    this.chefsService.deleteChef(this.id);
    this.router.navigate(['/chefs']);
  }

}
