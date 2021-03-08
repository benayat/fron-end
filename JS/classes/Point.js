class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  addToX(x) {
    this.x += x;
  }
  addToY(y) {
    this.y += y;
  }
  setX(x) {
    this.x = x;
  }
  setY(y) {
    this.y = y;
  }

  addPoint(point) {
    this.addToX(point.getX());
    this.addToY(point.getY());
  }
  isSame(point) {
    return point.getX() === this.getX() && point.getY() === this.getY();
  }
  print() {
    console.log(`x: ${this.x}\ny:${this.y}`);
  }
}
class PointWorld {
  constructor() {
    this.points = [];
  }
  getAll() {
    return this.points;
  }

  static returnSortedArrayDecending() {
    return [...this.getAll()].sort((a, b) => b.getY - a.getY);
  }
  isPointThere(point) {
    if (this.getAll().find((p) => p.isSame(point))) {
      return true;
    }
    return false;
  }
  addPointUnique(point) {
    if (!this.isPointThere(point)) {
      this.getAll().push(point);
    }
  }
  distinctArray() {
    const copy = new PointWorld();
    for (point of this.getAll()) {
      copy.addPointUnique(point);
    }
    return copy.getAll();
  }
  sumXValues() {
    return this.getAll().reduce(
      (accumulator, current) => (accumulator += current.getX()),
      0
    );
  }
  getPointConditional(point) {
    return this.isPointThere(point) || false;
  }
}
