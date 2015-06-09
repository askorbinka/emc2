(function () {
    var app = angular.module('logApp');
    
    function homeCtrl ($scope, $location) {
        $scope.go = function (path) {
            $location.path(path);  
        };
    }
    homeCtrl.$injector = ['$scope', '$location'];
    app.controller('homeCtrl', homeCtrl);
})();