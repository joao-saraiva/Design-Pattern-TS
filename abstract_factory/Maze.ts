import Room from "./MapSites/Room";

export default class Maze {
  private rooms: Room[] = [];

  addRoom(room: Room): void {
    this.rooms.push(room);
  }
}