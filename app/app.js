/*
Licenced:Atrix Digital Solutions©
Version: 1.0.0
dated: 05/03/2016
author-url: www.atrixdigital.com 

App - data Structure
   Dependencies - ngMaterial ngRoute ngAnimate ngAria 
    -Ng-material
    -morris-chart
    -ng-modules
      -ng-message
      -ng-Aria
      -ng-Animate
      -ng-Routes UI
*/
// Setting up views
    var app = angular.module( 'myApp', [ 
      'ngMaterial',
      'ngRoute',
      'ngAria',
      'firebase',
      'ngMessages'
     
      ] );

   




//my dirctives
app.directive('myTag', function() {
  restrict
    return { 
      restrict: 'A',
      link: function(scope, element, attributes){
        element.addClass('MyClass');
      }
    }
});


app.directive('name', [function () {
  return {
    restrict: 'A',
    link: function (scope, iElement, iAttrs) {
      
    }
  };

}]);


// from ng material docs - Custom controller.
app.controller('SelectAsyncController', function($timeout, $scope) {
 
  $scope.users = null;
  $scope.loadUsers = function() {
    // Use timeout to simulate a 650ms request.
    return $timeout(function() {
      $scope.users =  $scope.users  || [
        { id: 1, name: ' Travel' },
        { id: 2, name: ' Restaurant' },
        { id: 3, name: 'Real estates ' },
        { id: 4, name: 'Industry ' },
        { id: 5, name: 'Electronics' },
        { id: 5, name: 'Automobiles' },
        { id: 5, name: '' },

      ];

    }, 650);
  };

 $scope.color = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255)
  };
  $scope.rating1 = 3;
  $scope.rating2 = 2;
  $scope.rating3 = 4;
  $scope.disabled1 = 0;
  $scope.disabled2 = 70;
});

app
  .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  })

  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });

