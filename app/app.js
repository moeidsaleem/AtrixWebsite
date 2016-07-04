/*
Licenced:Atrix Digital Solutions©
Version: 1.0.0
dated: 05/03/2016
Author Url- www.atrixdigital.com 

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

    var app = angular.module( 'myApp', [ 'ngMaterial','ngRoute'] );
    app.config(['$routeProvider', function ($routeProvider) {
       $routeProvider.when('/home', {
         templateUrl: 'view/home/home.html',
  
       })
       .when('/aboutus', {
         templateUrl: 'view/about/about.html',
        
       })
        .when('/services', {
         templateUrl: 'view/services/services.html',
        
       })
         .when('/products', {
         templateUrl: 'view/products/products.html',
        
       })
          .when('/career', {
         templateUrl: 'view/career/career.html',
        
       })    .when('/faq', {
         templateUrl: 'view/faq/faq.html',
        
       })    .when('/help', {
         templateUrl: 'view/help.html',
        
       })   .when('/register', {
         templateUrl: 'view/register/register.html',
           controller: 'registerCtrl'
         
        
       })  
         .when('/contact', {
         templateUrl: 'view//contact.html',
        
       })  
          
          .when('/build', {
         templateUrl: 'view/build/build.html',
        
       })
       .otherwise({ redirectTo: 'view/home' });
    }]);


  