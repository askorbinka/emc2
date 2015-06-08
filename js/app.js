var dreamlog = angular.module('dreamlog', []);

dreamlog.controller('record', function($scope, $compile) {
    $scope.date = {
        today: new Date()
    }
    
    $scope.records = [];
    
    $scope.addRecord = function(record, attrs) {
        // $scope.record = {};
        $scope.records.push(record);
    }
});