define(['directives/module', 'css!../../styles/header.css'], function(directives, css){
    'use strict';
    //console.log(css);
    directives.directive('header', function(){
        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: 'views/header.html',
            link: function (scope, element, attrs) {

            }
        }
    })
})