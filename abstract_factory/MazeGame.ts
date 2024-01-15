import Door from "./MapSites/Door";
import Room from "./MapSites/Room";
import Wall from "./MapSites/Wall";
import Maze from "./Maze";
import Direction from "./enums/direction";

export default class MazeGame {
  static CreateMaze(): Maze{
    const maze = new Maze;
    const r1 = new Room(1);
    const r2 = new Room(2);
    const theDoor = new Door(r1, r2);

    maze.addRoom(r1);
    maze.addRoom(r2);

    r1.setSide(Direction.North, new Wall());
    r1.setSide(Direction.East, theDoor);
    r1.setSide(Direction.South, new Wall);
    r1.setSide(Direction.West, new Wall);

    r2.setSide(Direction.North, new Wall());
    r2.setSide(Direction.East, new Wall());
    r2.setSide(Direction.South, new Wall);
    r2.setSide(Direction.West, theDoor);

    return maze;
  }
}

