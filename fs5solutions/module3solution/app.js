(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective(){
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      itemList: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'directive',
    bindToController: true,
    // link: FoundItemsDirectiveLink,
    // transclude: true
  };
  return ddo;

}

function FoundItemsDirectiveController(){
  var directive = this;

}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var ctrl = this;
  ctrl.found = [];

  ctrl.doSearch = function( searchTerm ){
    if(searchTerm === undefined || searchTerm === ""){
      ctrl.errorMessage = "Nothing found";
      ctrl.found = [];
    }
    else{
      ctrl.errorMessage = "";
      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise.then(function (response) {
        ctrl.found = response;
        if(ctrl.found.length === 0){
          ctrl.errorMessage = "Nothing found";
        }
      });
    }
  }

  ctrl.removeItem = function(index){
    ctrl.found.splice(index, 1);
  }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
  var service = this;
  service.getMatchedMenuItems = function(searchTerm){
    service.searchFor = searchTerm;
    var promise = $http({
      method: 'GET',
      url: (ApiBasePath + "/menu_items.json")
    });

    return promise.then(function (response) {
      var foundItems = [];
      for(var i = 0; i < response.data.menu_items.length; i++){
        var name = response.data.menu_items[i].description;
        if(name.toLowerCase().indexOf(service.searchFor.toLowerCase()) != -1){
          foundItems.push(response.data.menu_items[i]);
        }
      }
      return foundItems;
    });

  }//end getMatchedMenuItems

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
  };

}

})();
