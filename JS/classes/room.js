class Room {
  constructor(roomId, level, amount) {
    this.roomId = roomId;
    this.level - level;
    this.amount = amount;
    this.isFree = false;
  }
  populate(amount) {
    this.isFree = this.amount <= amount ? false : this.isFree;
  }
  print() {
    console.log(
      `Room number: ${this.roomId}\nLevel: ${this.level}\namount: ${this.amount}\nis the room free? ${this.isFree}`
    );
  }
}

class Hotel {
  constructor() {
    this.roomList = new Map();
  }
  getAll() {
    return this.roomList;
  }
  addRoom(room) {
    if (this.getAll().has(roomId)) return false;

    this.getAll().set(room.roomId, room);
    return true;
  }
  addNewRoom(roomId, level, amount) {
    return this.addRoom(new Room(roomId, level, amount));
  }
  removeRoom(roomId) {
    return this.getAll().delete(roomId);
  }
  checkFreeRooms(amount) {
    return this.getAll().filter((room) => room.isFree && room.amount < amount);
  }
  checkIn(roomId, amount) {
    return this.getAll().get(roomId).populate(amount);
  }
  HighRoomFree() {
    return Array.from(this.getAll().values())
      .filter((room) => room.isFree)
      .sort((room1, room2) => room1.amount - room2.amount);
  }
  getAllRooms(isFree) {
    const copy = [...this.getAll()];
    return copy
      .filter((room) => room.isFree === isFree)
      .sort((room1, room2) => room2.id - room1.id);
  }
}
