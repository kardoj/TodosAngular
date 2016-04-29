var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'TodoController',
                templateUrl: 'views/allTodos.html'
            })
        .otherwise({ redirectTo: '/' });
});
