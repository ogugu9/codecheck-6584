//Abstract super class Polygon
export class Polygon {

  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
}

export class Rectangle extends Polygon {

  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
  }

  get area() { return this.height * this.width;}
}

export class Square {

  constructor(length) {
    this.name = "Square";
    this.width = length;
    this.height = length;
  }

  get area() { return this.width * this.height; }
}

export class Circle {

  constructor(radius) {
    this.name = "Circle";
    this.radius = radius;
    this.width = radius*2;
    this.height = radius*2;
  }

  get area() { return Math.pow(this.radius,2) * Math.PI; }
}
