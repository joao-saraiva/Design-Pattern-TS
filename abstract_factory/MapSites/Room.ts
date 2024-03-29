import Direction from "../enums/direction";
import { MapSite } from "../interfaces/MapSite";

export default class Room implements MapSite{
  private _sides: MapSite[] = [];

  constructor(private roomNumber: Number){

  }

  enter(): void {
    throw new Error("Method not implemented.");
  }

  getSide(direction: Direction): MapSite{
    return this._sides[direction];
  }

  setSide(direction: Direction, mapSite: MapSite): void{
    this._sides[direction] = mapSite;
  }
}