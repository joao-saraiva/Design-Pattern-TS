import IGraphic from "../interfaces/IGraphic";

export default class CompoundGraphic implements IGraphic{
  constructor(private children: IGraphic[] = []) {

  }

  addChildren(child: IGraphic){
    this.children.push(child);
  }

  removeChildren(child: IGraphic){
  }

  move(x: Number, y: Number): void {
    this.children.forEach(child => {
      child.move(x, y);
    })
  }

  draw(): void {
    this.children.forEach(child => {
      child.draw();
    })
  }
}
