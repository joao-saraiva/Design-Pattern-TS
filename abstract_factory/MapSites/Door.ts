import { MapSite } from "../interfaces/MapSite";
import Room from "./Room";

export default class Door implements MapSite{
  private _isOpen: boolean = false;

  constructor(private room1: Room, private room2: Room){
    
  }


  enter(): void {
    throw new Error("Method not implemented.");
  }

  isOpen(): boolean{
    return this._isOpen;
  }
}