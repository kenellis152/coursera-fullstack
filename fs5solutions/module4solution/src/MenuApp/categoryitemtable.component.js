(function () {
'use strict';

angular.module('MenuApp')
.component('categoryItemTable', {
  templateUrl: 'src/menuapp/templates/categoryitemtable.template.html',
  bindings: {
    items: '<'
  }
});

})();
