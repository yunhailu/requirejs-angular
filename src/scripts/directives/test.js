define(['directives/module','jquery'], function(directives, $){
    'use strict';
    directives.directive('testCtrl', function(){
        //指令的具体js代码
        console.log('this is a test directive!');
        return {};
    })
})