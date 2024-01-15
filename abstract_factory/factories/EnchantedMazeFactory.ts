import Door from "../MapSites/Door";
import EnchantedDoor from "../MapSites/EnchantedDoor";
import EnchantedRoom from "../MapSites/EnchantedRoom";
import Room from "../MapSites/Room";
import Wall from "../MapSites/Wall";
import Maze from "../Maze";
import MazeFactory from "./MazeFactory";

export default class EnchantedMazeFactory extends MazeFactory{
  makeMaze(): Maze {
    return new Maze();
  }

  makeWall(): Wall {
    return new Wall();
  }

  makeRoom(roomNumber: number): Room {
    return new EnchantedRoom(roomNumber);
  }

  makeDoor(room1: Room, room2: Room): Door {
    return new EnchantedDoor(room1, room2);
  }
}
