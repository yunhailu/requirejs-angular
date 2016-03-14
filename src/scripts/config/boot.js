define(['require',
    'angular',
    'config/app',
    'config/router'
],function(require,angular){
    'use strict';
    require(['domReady!'], function(document){
        angular.bootstrap(document.documentElement, ['webApp']);
    });
});