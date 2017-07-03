hrApp.controller('JobListController', ['$scope', '$http', '$location', 'CommonResourcesFactory',
    function ($scope, $http, $location, CommonResourcesFactory) {

        $scope.jobs = [];
        $http({url: CommonResourcesFactory.findAllJobsUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.jobs = data;
            });


      /*  $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeView/' + employeeId);
        };

        $scope.editEmployee = function (employeeId) {
            $location.url('/employeeEdit/' + employeeId);
        };

       */
    }]);/**
 * Created by Cosmin.Adamut on 7/3/2017.
 */
