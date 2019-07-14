import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { MongoItemService } from '../../../../mongo.service';

import { List } from "../../list.model";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"]
})
export class ListItemComponent implements OnInit {
  @Input() list: List;
  @Input() index: number;
  response;
  source;

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
  }
}
