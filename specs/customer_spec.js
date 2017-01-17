var customers = require('../customer');
var assert = require('assert');

describe('customer', function(){
  it('can return loyalty card boolean', function(){
    assert.equal(true, customers[0].loyaltyCard);
    assert.equal(false, customers[1].loyaltyCard);
  });
});