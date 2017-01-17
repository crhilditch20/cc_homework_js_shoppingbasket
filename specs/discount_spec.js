var customers = require('../customer');
var discounts = require('../discount');
var assert = require('assert');

describe('discount', function(){
  it('% discount should return multiplier', function(){
    assert.equal(0.10, discounts[0].calculate());
  });
  it('customer discount should return correct multiplier', function(){
    assert.equal(0.05, discounts[1].calculate(customers[0]));
    assert.equal(0.00, discounts[1].calculate(customers[1]));
  });
  it('bogof discount should return multiplier', function(){
    assert.equal(0.50, discounts[2].calculate());
  });
});

