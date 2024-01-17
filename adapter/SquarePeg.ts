import ISquarePeg from "./interfaces/ISquarePeg";

export default class SquarePeg implements ISquarePeg{
  width: number;

  constructor(width: number){
    this.width = width;
  }

  getWidth(): number {
    return this.width
  }
}