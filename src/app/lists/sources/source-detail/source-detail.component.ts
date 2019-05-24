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
  id: string;

  constructor(private listsService: ListsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private mongoItemService: MongoItemService ) {

  }

  async ngOnInit() {
    await this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
        }
      );
    this.response = await this.mongoItemService.getSource(this.id);
    await this.response.subscribe(
      (data) => {
        this.source = data;
        console.log('data', data);
        this.source.name = data.name;
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
