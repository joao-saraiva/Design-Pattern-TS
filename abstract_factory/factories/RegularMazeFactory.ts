import Door from "../MapSites/Door";
import Room from "../MapSites/Room";
import Wall from "../MapSites/Wall";
import Maze from "../Maze";
import MazeFactory from "./MazeFactory";

export default class RegularMazeFactory extends MazeFactory{
  makeMaze(): Maze {
    return new Maze();
  }

  makeWall(): Wall {
    return new Wall();
  }

  makeRoom(roomNumber: number): Room {
    return new Room(roomNumber);
  }

  makeDoor(room1: Room, room2: Room): Door {
    return new Door(room1, room2);
  }
}