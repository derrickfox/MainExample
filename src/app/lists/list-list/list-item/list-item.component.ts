import { Component, OnInit, Input, Output } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { MongoItemService } from '../../../../mongo.service';

import { List } from "../../list.model";
import { Source } from "../../sources/source.model";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"]
})
export class ListItemComponent implements OnInit {
  @Input() list: List;
  @Input() index: number;
  @Output() source: Source;
  response;

  constructor(private route: ActivatedRoute, private router: Router, private mongoItemService: MongoItemService) {}

  ngOnInit() {
    console.log("The list of list has loaded");
  }

  testClick() {}

  async toItem(input) {
    // this.router.navigate([input], { relativeTo: this.route });
    // console.log('toItem()', input);
    this.response = await this.mongoItemService.getSource(input);
    await this.response.subscribe(data => {
      this.source = data;
      console.log("list-item -> toItem(input)", data);
      this.source.name = data.name;
    });
    console.log("list-item -> toItem(input) -> source", this.source);
  }
}
