import SquarePeg from "./SquarePeg";
import IRoundPeg from "./interfaces/IRoundPeg";

export default class SquarePegAdapter implements IRoundPeg{
  radius: number;

  constructor(peg: SquarePeg){
    this.radius = peg.getWidth() * Math.sqrt(2) / 2;
  }

  getRadius(): number {
    return this.radius;
  }
}