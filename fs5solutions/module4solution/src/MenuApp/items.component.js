(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/templates/categoryitemtable.template.html',
  bindings: {
    items: '<'
  }
});

})();
