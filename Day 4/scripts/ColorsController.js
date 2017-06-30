/**
 * Created by Cosmin.Adamut on 6/30/2017.
 */
hrApp.controller('ColorsController', ['$scope', function ($scope) {
    $scope.test = "test";
    $scope.colors = [
        {
            "text": "muted",
            "class": "text-muted",
            "type": "strong"
        }, {
            "text": "primary",
            "class": "text-primary",
            "type": "strong"
        },
        {
            "text": "success",
            "class": "text-success",
            "type": "strong"
        },
        {
            "text": "info",
            "class": "text-info",
            "type": "boring"
        },
        {
            "text": "warning",
            "class": "text-warning",
            "type": "boring"
        },
        {
            "text": "danger",
            "class": "text-danger",
            "type": "boring"
        }
    ];
    $scope.col = undefined;
    $scope.changeColor = function () {
        $scope.col= $scope.myColor;
    }
}]);