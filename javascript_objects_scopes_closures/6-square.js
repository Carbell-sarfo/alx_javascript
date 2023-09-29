#!/usr/bin/node

// 6-square.js

const ParentSquare = require('./5-square');

class Square extends ParentSquare {
  constructor(size) {
    super(size);
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X';
    }

    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = Square;