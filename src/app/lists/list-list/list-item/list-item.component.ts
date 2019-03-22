import { Component, OnInit, Input } from '@angular/core';

import { List } from '../../list.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() list: List;
  @Input() index: number;

  ngOnInit() {
  }
}
