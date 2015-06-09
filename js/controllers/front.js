(function () {
    var app = angular.module('logApp');
    
    function frontCtrl ($scope, $location) {
        $scope.go = function (path) {
            $location.path(path);  
        };
    }
    frontCtrl.$injector = ['$scope', '$location'];
    app.controller('frontCtrl', frontCtrl);
})();