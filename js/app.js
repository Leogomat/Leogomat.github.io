var app = angular.module('projectApp', ['ngRoute']);
 app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'views/usa_path.html'
                })
        .otherwise({
            redirectTo: '/'
        });
}); 