 // Setting up Routes.
    app.config(['$routeProvider', function ($routeProvider) {
      
       $routeProvider.when('/home', {
         templateUrl: 'view/home.html',
  
       })
       .when('/aboutus', {
         templateUrl: 'view/about/about.html',
        
       })
        .when('/services', {
         templateUrl: 'view/services/services.html',
        
       })
         .when('/products', {
         templateUrl: 'view/products/products.html',
         controller:'productCtrl'
        
       })
          .when('/career', {
         templateUrl: 'view/career/career.html',
        
       })  .when('/careerjob', {
         templateUrl: 'view/career/career-job.html',
        
       })    .when('/faq', {
         templateUrl: 'view/faq/faq.html',
        
       })    .when('/help', {
         templateUrl: 'view/help.html',
        
       })   .when('/register', {
         templateUrl: 'view/register/register.html',
           // controller: 'registerCtrl'
         
        
       })  
         .when('/contactus', {
         templateUrl: 'view//contact.html',
        
       })     .when('/portfolio', {
         templateUrl: 'view/portfolio.html',
        
       })  
         .when('/jobs', {
         templateUrl: 'view/career/jobs.html',
         controller:'jobsCtrl'
        
       })  
          
          .when('/future', {
         templateUrl: 'view/about/future.html',
        
       })  .when('/partner', {
         templateUrl: 'view/about/parnter.html',
        
       })  .when('/build', {
         templateUrl: 'view/build/build.html',
         controller:'buildCtrl'
        
       }).when('/admin', {
         templateUrl: 'view/admin.html',
         controller:'productCtrl'
       })
       .when('/coreproducts', {
         templateUrl: 'view/products/coreproducts.html'
        })

       // Partial declaration
       .when('/mainsearch', {
         templateUrl: 'view/partials/mainsearch.htm',
       })
       .otherwise({ redirectTo: '/home' });
       // $locationProvider.
    }]);
