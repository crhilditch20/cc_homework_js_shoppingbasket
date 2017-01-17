var items = require('../item');
var assert = require('assert');

describe('item', function(){
  it('item has name', function(){
    assert.equal("chocolate", items[0].name);
  });
  it('item has value', function(){
    assert.equal(0.80, items[0].value);
  })
});