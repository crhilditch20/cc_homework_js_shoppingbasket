var basket = {
  items: [],
  total: 0,
  countItems: function(){
    return this.items.length;
  },
  addItem: function(item){
    this.items.push(item);
    this.total += item.value;
  },
  removeItem: function(item){
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.total = (this.total - item.value);
  },
  getDiscount: function(discountType, percentage){
    var discountAmount = this.total*(discountType.calculate(percentage));
    this.total -= discountAmount;
    return this.total;
  }
};



module.exports = basket;