import { Recipe } from '../lists/recipes/recipe.model';

export class List {
  public name: string;
  public description: string;
  public imagePath: string;
  public recipes: Recipe[];

  constructor(name: string, desc: string, imagePath: string, recipes: Recipe[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.recipes = recipes;
  }
}
