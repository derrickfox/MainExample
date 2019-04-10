import { Component, OnInit, Input } from '@angular/core';

import { Biography } from '../../biography.model';

@Component({
  selector: 'app-biography-item',
  templateUrl: './biography-item.component.html',
  styleUrls: ['./biography-item.component.css']
})
export class BiographyItemComponent implements OnInit {
  @Input() biography: Biography;
  @Input() index: number;

  ngOnInit() {
  }
}
