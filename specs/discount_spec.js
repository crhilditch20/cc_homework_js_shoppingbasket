var basket = require('../basket');
var discount = require('../discount');
var items = require('../item');
var assert = require('assert');

describe('discount', function(){
  it('% discount should return multiplier', function(){
    assert.equal(0.10, discounts[0].calculate());
  });
});