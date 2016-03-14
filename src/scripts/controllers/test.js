define(['controllers/module','jquery'], function(controllers, $){
    'use strict';
    controllers.controller('testCtrl', ['$scope', 'request', function($scope, request){
        //控制器的具体js代码
        console.log('this is a test controller!');
        request.get('../package.json', {id: 1}).then(function(data){
			$scope.name = data.name;
        });
    }]);
})