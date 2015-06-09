(function() {
    var app = angular.module('logApp', [
            'ngRoute'
        ]); 
        
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
        
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            
            .when('/hig', {
                templateUrl: 'views/hig.html',
                controller: 'styleguideCtrl'
            })
            
            .when('/front', {
                templateUrl: 'views/front.html',
                controller: 'frontendCtrl'
            })
            
            .when('/backend', {
                templateUrl: 'views/back.html',
                controller: 'backendCtrl'
            })
            
            .when('/analysis', {
                templateUrl: 'views/analysis.html',
                controller: 'analysisCtrl'
            });
            
        $locationProvider.html5Mode(false);
    });
    
})();