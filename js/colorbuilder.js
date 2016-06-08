var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  
    $scope.siding      = "basic";
    $scope.wainscoting = "basic";
    $scope.roof        = "basic";
    $scope.trim        = "basic";
    $scope.soffits     = "basic";
    $scope.overhead    = "basic";
    $scope.door        = "basic";
    
    $scope.color   = "";
    
  
    $scope.changeDefault = function(index) {
      if (index == 'siding') {
        $scope.sidingalt   = "";
      } else if (index == 'wainscoting') {
        $scope.wainscotingalt   = "";
      } else if (index == 'roof') {
        $scope.roofalt   = "";
      } else if (index == 'trim') {
        $scope.trimalt   = "";
      } else if (index == 'soffits') {
        $scope.soffitsalt   = "";
      } else if (index == 'overhead') {
        $scope.overheadalt   = "";
      } else if (index == 'door') {
        $scope.dooralt   = "";
      }
    };
  
    $scope.changeColor = function(index) {
      if (index == 'siding') {
        $scope.sidingalt   = "alt";
      } else if (index == 'wainscoting') {
        $scope.wainscotingalt   = "alt";
      } else if (index == 'roof') {
        $scope.roofalt   = "alt";
      } else if (index == 'trim') {
        $scope.trimalt   = "alt";
      } else if (index == 'soffits') {
        $scope.soffitsalt   = "alt";
      } else if (index == 'overhead') {
        $scope.overheadalt   = "alt";
      } else if (index == 'door') {
        $scope.dooralt   = "alt";
      }
    };
  
});

