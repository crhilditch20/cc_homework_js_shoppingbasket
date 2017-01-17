var basket = require('../basket');
var discount = require('../discount');
var items = require('../item');
var assert = require('assert');

describe('discount', function(){
  it('discount should return % of basket total', function(){
    basket.addItem(items[1]);
    basket.addItem(items[2]);
    assert.equal(0.68, discount.apply(basket, 10).toFixed(2));
  });
});