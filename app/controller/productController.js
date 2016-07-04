app.controller('productCtrl', function ($scope,$http, $firebaseArray, $firebaseAuth) {


           /*  $http.get('data/contact.php').then(function(response){
              $scope.myData=response.data.records;
             })*/
   
// Set the configuration for your app
  // TODO: Replace with your project's config object

  var ref = new Firebase("https://ng-atrix.firebaseio.com/records");
  // download the data into a local object
  
   var auth = $firebaseAuth(ref);
   $scope.bang =function(){
    auth.$authWithOAuthPopup("github").then(function(authData) {
    console.log("Logged in as:", authData.uid);
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });
}

  $scope.myData = $firebaseArray(ref);

  $scope.addData = function() {
    $scope.myData.$add({
      name: $scope.newMessageText},
     { description:$scope.newDescriptionText},
     {price:$scope.newPriceText},
     {imglink:$scope.newImgLink},
     {category:$scope.newCategoryText},
     {type:$scope.newTypeText},
     {tags:$scope.newTagsText}
      );
  

  }
});



