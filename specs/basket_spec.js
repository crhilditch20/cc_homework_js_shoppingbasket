var basket = require('../basket');
var assert = require('assert');

describe('basket', function(){
  it('basket starts with no items', function(){
    assert.equal(0, basket.items.length);
  });
  it('basket starts with 0 value', function(){
    assert.equal(0, basket.total);
  });
});

