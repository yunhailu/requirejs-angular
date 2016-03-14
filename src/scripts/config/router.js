define(["config/app"], function(app) {
    return app.config(['$routeProvider', function($routeProvider){
            console.log('router is init!');
            $routeProvider
                .when('/', {
                    templateUrl: './views/test.html',
                    controller: 'testCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
});