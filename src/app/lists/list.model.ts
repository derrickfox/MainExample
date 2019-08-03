
export class List {
  public _id: string;
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(_id: string, name: string, desc: string, imagePath: string) {
    this._id = _id;
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
