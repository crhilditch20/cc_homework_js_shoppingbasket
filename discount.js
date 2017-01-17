var discountPercentage = {
  apply: function(basket, percentage){
    var amountToDiscount = (basket.total*percentage);
    basket.total -= this.amountToDiscount;
  }
}

