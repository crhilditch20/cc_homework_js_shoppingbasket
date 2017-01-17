var discountPercentage = {
  amountToDiscount: 0,
  apply: function(basket, percentage){
    this.amountToDiscount = (basket.total*(percentage/100));
    return this.amountToDiscount;
  }
};

module.exports = discountPercentage;

