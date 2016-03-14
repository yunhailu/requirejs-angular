define(["angular"
    ,'controllers/controllers'
    ,'directives/directives'
    ,'filters/filters'
    ,'services/services'
    ,'angularRoute'
],function(angular){
    return angular.module("webApp", ['ngRoute', 'controllers', 'directives', 'filters', 'services']);
})