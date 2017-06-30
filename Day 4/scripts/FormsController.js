/**
 * Created by Cosmin.Adamut on 6/30/2017.
 */

hrApp.controller('FormsController', ['$scope', function ($scope) {
    $scope.form=[];
    $scope.submitlist=[];
    $scope.submit=function(){
       if($scope.myForm.$valid == true) {
           $scope.form = $scope.myForm;
           $scope.submitlist.push($scope.form);
           $scope.myForm.$submitted= true;
           alert("Submit");
       }
       else
           alert("Not valid");
    }
}]);