import IRoundPeg from "./interfaces/IRoundPeg";

export default class RoundPeg implements IRoundPeg{
  radius: number;

  constructor(radius: number){
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }
}