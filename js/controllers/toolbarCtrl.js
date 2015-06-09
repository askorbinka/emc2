(function () {
    var app = angular.module('logApp');
    
    function toolbarCtrl ($scope, $location) {
        $scope.go = function (path) {
            $location.path(path);  
        };
    }
    toolbarCtrl.$injector = ['$scope', '$location'];
    app.controller('toolbarCtrl', toolbarCtrl);
})();