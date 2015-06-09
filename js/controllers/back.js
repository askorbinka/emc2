(function () {
    var app = angular.module('logApp');
    
    function backCtrl ($scope, $location) {
        $scope.go = function (path) {
            $location.path(path);  
        };
    }
    backCtrl.$injector = ['$scope', '$location'];
    app.controller('backCtrl', backCtrl);
})();