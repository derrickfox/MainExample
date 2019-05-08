import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { ListsService } from '../../lists.service';

@Component({
  selector: 'app-biography-detail',
  templateUrl: './biography-detail.component.html',
  styleUrls: ['./biography-detail.component.css']
})
export class BiographyDetailComponent implements OnInit {
  biography;
  id: number;

  constructor(private listsService: ListsService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.biography = this.listsService.getBiography(this.id);
        }
      );
  }

  onClick() {
    alert('working!!');
  }

  // onAddToShoppingList() {
  //   this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  // }

  onEditBiography() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteBiography() {
    this.listsService.deleteBiography(this.id);
    this.router.navigate(['/biographies']);
  }

}
