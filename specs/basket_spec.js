var basket = require('../basket');
var discount = require('../discount');
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
  it('item in basket increases value', function(){
    basket.addItem(items[1]);
    assert.equal(5.80, basket.total);
  });
  it('can remove item from basket', function(){
    basket.removeItem(items[1]);
    assert.equal(1, basket.countItems());
    assert.equal(0.80, basket.total.toFixed(2));
  });
  it('can apply discount', function(){
    basket.addItem(items[1]);
    assert.equal(5.22, basket.getDiscount(discount, 10));
  });
});

