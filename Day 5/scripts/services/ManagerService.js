hrApp.service('ManagerService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findManagerId: function (empList) {
                idList = [];
                managerList = [];
                managerIndex = [];
                for (managerIndex in empList) {
                    if (empList[managerIndex].managerId != null && idList[empList[managerIndex].managerId.employeeId] == undefined) {
                        managerList.push(empList[managerIndex].managerId);
                        idList[empList[managerIndex].managerId.employeeId] = true;
                    }
                }
                return managerList;
            }
        }
    }]
);