module.exports = class Bloock {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  move(direction) {
    this.y += direction.x;
    this.y += direction.y
  }

  isColliding(obj) {
    var {x, y, width, height } = this;

    //if object is outside me, return false
    if(x + width < obj.x ||
      x > obj.x + obj.width ||
      y + height < obj.y ||
      y > obj.y + obj.height) {
      return false;
    } else {
      return true;
    }
  }
}
