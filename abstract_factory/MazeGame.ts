import Door from "./MapSites/Door";
import Room from "./MapSites/Room";
import Wall from "./MapSites/Wall";
import Maze from "./Maze";
import Direction from "./enums/direction";
import MazeFactory from "./factories/MazeFactory";

export default class MazeGame {
  static CreateMaze(mazeFactory: MazeFactory): Maze{
    const maze = mazeFactory.makeMaze();
    const r1 = mazeFactory.makeRoom(1);
    const r2 = mazeFactory.makeRoom(2);
    const theDoor = mazeFactory.makeDoor(r1, r2);

    maze.addRoom(r1);
    maze.addRoom(r2);

    r1.setSide(Direction.North, mazeFactory.makeWall());
    r1.setSide(Direction.East, theDoor);
    r1.setSide(Direction.South, mazeFactory.makeWall());
    r1.setSide(Direction.West, mazeFactory.makeWall());

    r2.setSide(Direction.North, mazeFactory.makeWall());
    r2.setSide(Direction.East, mazeFactory.makeWall());
    r2.setSide(Direction.South, mazeFactory.makeWall());
    r2.setSide(Direction.West, theDoor);

    return maze;
  }
}

