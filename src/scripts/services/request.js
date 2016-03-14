define(['services/module', 'jquery'], function(services, $){
    'use strict';
    services.factory('request', ['$http', '$q', function(http, q){
        var service = {
            request: function(url, data, method){
                var deferred = q.defer();
                http({url:url, params:data, method: method})
                    .success(function(resp){
                        deferred.resolve(resp);
                    }).error(function(resp){
                        deferred.reject(resp);
                    });
                return deferred.promise;
            },
            post: function(url, data){
                return this.request(url, data, 'post');
            },
            get: function(url, data){
                return this.request(url, data, 'get');
            }
        };
        return service;
    }])
});