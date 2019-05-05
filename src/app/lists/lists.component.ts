import { Component, OnInit } from '@angular/core';
import { ListsService } from './lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  listOfLists = [];

  constructor(private listsService: ListsService) { }

  ngOnInit() {
    this.getListOfLists();
  }

  getListOfLists() {
    this.listOfLists = this.listsService.getLists();
    console.log('this.listOfLists', this.listOfLists);
  }

}
