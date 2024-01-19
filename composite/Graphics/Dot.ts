import IGraphic from "../interfaces/IGraphic";

export default class Dot implements IGraphic{
  constructor(private x: number, private y: number) {

    this.x = 10;
  }

  move(x: number, y: number): void {
    this.x += x;
    this.y += y;
  }

  draw(): void {
    console.log(`Desenhand ponto em X: ${this.x}, em Y: ${this.y}`);
  }
}