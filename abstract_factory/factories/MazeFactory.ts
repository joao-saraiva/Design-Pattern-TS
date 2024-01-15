import Door from "../MapSites/Door";
import Room from "../MapSites/Room";
import Wall from "../MapSites/Wall";
import Maze from "../Maze";

export default abstract class MazeFactory {
  abstract makeMaze(): Maze;
  abstract makeWall(): Wall;
  abstract makeRoom(roomNumber: number): Room;
  abstract makeDoor(room1: Room, room2: Room): Door;
}
