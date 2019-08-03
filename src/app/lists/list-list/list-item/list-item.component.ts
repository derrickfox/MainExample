import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { MongoItemService } from '../../../../mongo.service';

import { List } from "../../list.model";
import { Source } from "../../sources/source.model";
// import { EventEmitter } from "events";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"]
})
export class ListItemComponent implements OnInit {
  @Input() list;
  @Input() index: number;
  @Output() source: Source;
  @Output() listEmitted = new EventEmitter<List>();
  lists = [
    { id: 1, name: 'kdjfa', description: 'kdjfadl', imagePath: 'jfdka;d'}, 
    { id: 2, name: 'dafdad', description:'kjl;ad', imagePath: 'ddaaff'}]
  response;

  constructor(private route: ActivatedRoute, private router: Router, private mongoItemService: MongoItemService) {}

  ngOnInit() {
    // console.log("list-item -> ngOnInit() -> list", this.list);
  }

  testClick() {}

  async toItem(input) {
    console.log('input', input);
    // this.listEmitted.emit(input);

    this.router.navigate([input._id], { relativeTo: this.route });
    // this.router.navigate(['../', input, 'edit'], {relativeTo: this.route});

    // this.response = await this.mongoItemService.getSource(input);
    // await this.response.subscribe(data => {
    //   // this.source = data;
    //   console.log("list-item -> toItem(input)", data);
    //   // this.source.name = data.name;
    //   this.list = data;
    // });
  }
}
