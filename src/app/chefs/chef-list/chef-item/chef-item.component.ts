import { Component, OnInit, Input } from '@angular/core';

import { Chef } from '../../chef.model';

@Component({
  selector: 'app-chef-item',
  templateUrl: './chef-item.component.html',
  styleUrls: ['./chef-item.component.css']
})
export class ChefItemComponent implements OnInit {
  @Input() chef: Chef;
  @Input() index: number;

  ngOnInit() {
  }
}
