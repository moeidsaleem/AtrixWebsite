


app.controller('jobsCtrl', function ($scope, $firebaseArray, $firebaseAuth) {
var j1 = new Firebase("https://ng-atrix.firebaseio.com/Jobs/jobs");
  // download the data into a local object

//    var auth = $firebaseAuth(j1);
//    $scope.bang =function(){
//     auth.$authWithOAuthPopup("github").then(function(authData) {
//     console.log("Logged in as:", authData.uid);
//   }).catch(function(error) {
//     console.log("Authentication failed:", error);
//   });
// }




  $scope.job = $firebaseArray(j1);

  $scope.addJob = function() {
    $scope.job.$add(
    {  jobTitle: $scope.newJobName},
    {  jobType: $scope.newJobType},
    {  city: $scope.newCityName},
    {  category: $scope.newCategoryName},
    {  applyBefore:$scope.newApplybefore},
    { salary:$scope.newJobSalary},
    { country:$scope.newCountryName},
    { jobimgLink:$scope.newjobImgLink},
    { location:$scope.newLocationName},
    { company:$scope.newCompanyName},
    { skill:$scope.newSkillName},
    {careerLevel:$scope.newCareerLevel 
    });
  

  }
});
