(function () {
    var app = angular.module('logApp');
    
    function sidenavCtrl ($scope, $location, sidenav) {
        $scope.sidenav = sidenav.data;
        $scope.go = function (path) {
            $location.path(path);  
        };
    }
    sidenavCtrl.$injector = ['$scope', '$location', 'sidenav'];
    app.controller('sidenavCtrl', sidenavCtrl);
})();