(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


// UserService.$inject = ['$http', 'ApiPath'];
function UserService() {
  var service = this;
  service.user = "empty";

  service.register = function (newUser, menuItem) {
    service.user = newUser;
    service.user.menuItem = menuItem;
  };


  service.getUser = function (category) {
    return service.user;
  };

}



})();
