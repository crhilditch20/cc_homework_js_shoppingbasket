var basket = require('../basket');
var discounts = require('../discount');
var items = require('../item');
var customers = require('../customer');
var assert = require('assert');

describe('basket', function(){
  beforeEach(function(){
    basket.empty();
    basket.total = 0;
  });
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
    assert.equal(5.00, basket.total);
  });
  it('can remove item from basket', function(){
    basket.addItem(items[1]);
    basket.addItem(items[0]);
    basket.removeItem(items[1]);
    assert.equal(1, basket.countItems());
    assert.equal(0.80, basket.total.toFixed(2));
  });
  it('basket discounts applied correctly', function(){
    basket.addItem(items[1]);
    basket.addItem(items[1]);
    basket.addItem(items[1]);
    basket.addItem(items[1]);
    basket.addItem(items[1]);
    assert.equal(21.38, basket.applyDiscounts(discounts, customers[0]).toFixed(2));
  });
});

