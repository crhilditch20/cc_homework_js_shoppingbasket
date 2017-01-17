var basket = {
  items: [],
  total: 0,
  countItems: function(){
    return this.items.length;
  },
  addItem: function(item){
    this.items.push(item);
    this.total += item.value;
  }
}



module.exports = basket;