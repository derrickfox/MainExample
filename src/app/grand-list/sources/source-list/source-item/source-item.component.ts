import { Component, OnInit, Input } from '@angular/core';

import { Source } from '../../source.model';

@Component({
  selector: 'app-source-item',
  templateUrl: './source-item.component.html',
  styleUrls: ['./source-item.component.css']
})
export class SourceItemComponent implements OnInit {
  @Input() source: Source;
  @Input() index: number;

  ngOnInit() {
  }
}
