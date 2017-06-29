var { expect, assert} = require ('chai');
var Block = require('../lib/Block.js');

describe('Block Functionality', function() {
  let block;

  beforeEach(function () {
    block = new Block(50, 50, 10, 10);
  })

  it('should be a function', function() {
    expect(block).to.be.an.instanceof(Block);
  })


  it('should have x, y, width and height', function() {
    expect(block).to.deep.equal({
      x: 50,
      y: 50,
      width: 10,
      height: 10
    });
  })

  it ('should have a move function', function() {
    assert.isFunction(block.move)
    expect(block).to.have.property('move');
  })

  it('block.move should take a direction and move block in that direction', function() {
    var direction = {x: 0, y: 1}
    expect(block.y).to.equal(50);
    block.move(direction);
    expect(block.y).to.equal(51);
  })

  it('should be able to de3tect collisions', function() {
    var secondBlock = new Block(55, 55, 10, 10);
    expect(block.isColliding(secondBlock)).to.equal(true);
    expect(secondBlock.isColliding(block)).to.equal(true);
  })
})
