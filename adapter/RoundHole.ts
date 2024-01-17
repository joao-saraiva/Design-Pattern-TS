import IRoundPeg from "./interfaces/IRoundPeg";

export default class RoundHole {
  constructor(private radius: number){
    
  }

  getRadius(): number{
    return this.radius;
  }

  fits(peg: IRoundPeg): boolean{
    return this.getRadius() >= peg.getRadius();
  }
}