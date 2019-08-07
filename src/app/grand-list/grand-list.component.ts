import { Component, OnInit } from '@angular/core';
import { ListsService } from './lists.service';

@Component({
  selector: 'app-grand-list',
  templateUrl: './grand-list.component.html',
  styleUrls: ['./grand-list.component.css']
})
export class GrandListComponent implements OnInit {

  listOfLists = [];

  constructor(private listsService: ListsService) { }

  ngOnInit() {
    this.getListOfLists();
  }

  getListOfLists() {
    // this.listOfLists = this.listsService.getLists();
  }

}
