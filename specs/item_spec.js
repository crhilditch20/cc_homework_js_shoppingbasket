var items = require('../item');
var assert = require('assert');

describe('item', function(){
  it('item has name', function(){
    assert.equal("chocolate", items[0].name);
  });
  it('item has value', function(){
    assert.equal(1.00, items[2].value);
  })
});