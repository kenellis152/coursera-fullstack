(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var TBlist = this;
  TBlist.items = ShoppingListCheckOffService.getToBuyItems();

  this.buyItem = function(index){
    ShoppingListCheckOffService.addBoughtItem(this.items[index]);
    ShoppingListCheckOffService.removeToBuyItem(index);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var ABlist = this;
  this.items = ShoppingListCheckOffService.getBoughtList();

}

function ShoppingListCheckOffService(){
  var service = this;
  var toBuyList = [
    {
      name: "beer",
      quantity: 24
    },
    {
      name: "chicken",
      quantity: 4
    },
    {
      name: "milk",
      quantity: 1
    },
    {
      name: "noodles",
      quantity: 4
    },
    {
      name: "onion",
      quantity: 2
    }
  ];
  var boughtList = [];

  this.getToBuyItems = function(){
    return toBuyList;
  }
  this.addToBuyItem = function(itemName, itemQuantity){
    var newItem = {
      name: itemName,
      quantity: itemQuantity
    }
    toBuyList.push(newItem);
  }
  this.removeToBuyItem = function(index){
    toBuyList.splice(index, 1);
  }
  this.getBoughtList = function(){
    return boughtList;
  }
  this.addBoughtItem = function(newItem){
    boughtList.push(newItem);
    console.log(boughtList.length);
  }
  this.removeBoughtItem = function(index){
    boughtList.splice(index, 1);
  }

}


})();
