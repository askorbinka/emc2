(function () {
    var app = angular.module('logApp');
    
    function higCtrl ($scope, $location) {
        $scope.go = function (path) {
            $location.path(path);  
        };
    }
    higCtrl.$injector = ['$scope', '$location'];
    app.controller('higCtrl', higCtrl);
})();