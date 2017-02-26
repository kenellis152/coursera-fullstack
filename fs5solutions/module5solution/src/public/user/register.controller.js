(function () {
"use strict";

angular.module('public')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['UserService', 'menuItems'];
function RegisterController(UserService, menuItems) {

  var $ctrl = this;
  $ctrl.menuItems = menuItems.menu_items;
  $ctrl.shortnames = $ctrl.menuItems.map(function(a){return a.short_name});
  
  $ctrl.submit = function(){
      var menuItem;
      for(var i = 0; i < $ctrl.menuItems.length; i++){
        if($ctrl.menuItems[i].short_name === $ctrl.user.fav) {
          menuItem = $ctrl.menuItems[i];
        }
      }
      UserService.register($ctrl.user, menuItem);
      $ctrl.submitted = true;
  }


}



})();
