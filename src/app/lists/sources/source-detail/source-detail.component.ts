import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { ListsService } from '../../lists.service';
import { MongoItemService } from '../../../../mongo.service';


@Component({
  selector: 'app-source-detail',
  templateUrl: './source-detail.component.html',
  styleUrls: ['./source-detail.component.css']
})
export class SourceDetailComponent implements OnInit {
  source;
  response;
  id: number;

  constructor(private listsService: ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private mongoItemService: MongoItemService ) {

  }

  ngOnInit() {
    // this.route.params
    //   .subscribe(
    //     (params: Params) => {
    //       this.id = +params['id'];
    //       this.source = this.listsService.getSource(this.id);
    //     }
    //   );
    this.response = this.mongoItemService.getSource('5ccb824909b41a3660d0e0a1');
    this.response.subscribe(
      (data) => {
        console.log('data', data);
        console.log('list-detail.component -> this.id', this.id);
        this.source = data;
      }
    )
  }

  // onAddToShoppingList() {
  //   this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  // }

  onEditSource() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteSource() {
    this.listsService.deleteSource(this.id);
    this.router.navigate(['/sources']);
  }

}
