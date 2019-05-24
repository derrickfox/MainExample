import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { List } from '../../list.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() list: List;
  @Input() index: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  }

  testClick() {
  }

  toItem(input) {
    this.router.navigate([input], { relativeTo: this.route });
  }
}
