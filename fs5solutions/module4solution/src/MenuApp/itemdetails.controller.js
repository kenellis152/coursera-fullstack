(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryItemsController', CategoryItemsController);

CategoryItemsController.$inject = ['MenuDataService', 'categoryItems'];
function CategoryItemsController(MenuDataService, categoryItems) {
  var catItemCtrl = this;
  catItemCtrl.catItems = categoryItems.data.menu_items;
  // console.log(catItemCtrl.catItems);
}

})();
