var discountPercentage = {
  calculate: function(){
    var amount = 0.10;
    return amount;
  }
};

var discountCustomer = {
  calculate: function(customer){
    var amount = 0.00;
    if(customerLoyalty === true){
      amount = 0.20;
    } else {
      amount = 0.00;
    } return amount;
  }
};

discounts = [discountPercentage, discountCustomer];

module.exports = discounts;


