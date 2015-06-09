(function () {
    var app = angular.module('logApp');
    
    function analysisCtrl ($scope, $location) {
        $scope.go = function (path) {
            $location.path(path);  
        };
    }
    analysisCtrl.$injector = ['$scope', '$location'];
    app.controller('analysisCtrl', analysisCtrl);
})();