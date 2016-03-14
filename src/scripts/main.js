require.config({
    paths : {
        jquery : 'vendor/jquery/jquery-1.11.3.min',
        BlockUI : 'vendor/jquery/jquery.blockUI',
        text : 'vendor/require/text',
        boot : "config/boot",
        domReady : "vendor/require/domReady",
        css : "vendor/require/css",
        angular : 'vendor/angular-1.3.9/angular.min',
        angularRoute : 'vendor/angular-1.3.9/angular-route.min',
        angularResource : 'vendor/angular-1.3.9/angular-resource.min',
        angularSanitize : 'vendor/angular-1.3.9/angular-sanitize.min',
        bootstrap : 'vendor/bootstrap.min'
    },
    shim : {
        angular : {
            exports : 'angular'
        },
        angularRoute : {
            deps : ['angular'],
            exports : 'angularRoute'
        },
        BlockUI : {
            deps : ['jquery'],
            exports : 'BlockUI'
        }
    },
    map: {
        '*': {
            'styles': '../../styles'
        }
    },
    deps : ['boot']
})

require(['angular','angularRoute','text','jquery'], function(angular, ngRoute){

})