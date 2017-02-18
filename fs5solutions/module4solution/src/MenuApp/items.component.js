(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/MenuApp/templates/categoryitemtable.template.html',
  bindings: {
    items: '<'
  }
});

})();
