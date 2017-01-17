var basket = require('../basket');
var items = require('../item');
var assert = require('assert');

describe('basket', function(){
  it('basket starts with no items', function(){
    assert.equal(0, basket.countItems());
  });
  it('basket starts with 0 value', function(){
    assert.equal(0, basket.total);
  });
  it('can add item to basket', function(){
    basket.addItem(items[0]);
    assert.equal(1, basket.countItems());
  });
});

