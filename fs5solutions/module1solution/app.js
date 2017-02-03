(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){

    $scope.lunchinput = "list comma separated dishes you usually have for lunch";
    $scope.buttontext = "Check if too much";
    $scope.output = "waiting for input...";
    $scope.color = "red";
    $scope.optionalout ="";

    $scope.process = function(){
      var inputarray = $scope.lunchinput.split(',');
      var validcount = inputarray.length;
      $scope.optionalout = "";
      for(var i = 0; i < inputarray.length; i++){
        if(inputarray[i]=="" || inputarray[i] == " "){
          validcount = validcount - 1;
          $scope.optionalout = "invalid entry! ";
          $scope.color = "red";
        }
      }

      if(validcount == 0 || $scope.lunchinput == "" || $scope.lunchinput == "list comma separated dishes you usually have for lunch"){
        $scope.output = "Please enter data first";
        $scope.color = "red";
      }
      else if(inputarray != null){
          if(validcount <= 3){
            $scope.output = "Enjoy!";
            $scope.color = "green";
          }
          else if(validcount > 3){
            $scope.output = "Too much!";
            $scope.color = "green";
          }
      }
    };
  }

})();
