(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://kenellis152-course5.herokuapp.com')
.config(config)
.directive('blacklist', blacklist);

function blacklist(){
   return {
     scope: {
       list: "="
      },
      require: 'ngModel',
      link: function(scope, elem, attr, ngModel) {
          var list = scope.list;
          // console.log("blacklist: ", list);

          //For DOM -> model validation
          ngModel.$parsers.unshift(function(value) {
             var valid = list.indexOf(value) !== -1;
             ngModel.$setValidity('blacklist', valid);
             return valid ? value : undefined;
          });

          //For model -> DOM validation
          ngModel.$formatters.unshift(function(value) {
             ngModel.$setValidity('blacklist', list.indexOf(value) !== -1);
             return value;
          });
      }
   };
};

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
