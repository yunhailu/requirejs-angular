define(['filters/module'], function(filters){
    'use strict';
    filters.filter('trustHtml', ['$sce', function($sce){
        //过滤器的具体js代码
        //console.log(local);

        return function (input) {
            return $sce.trustAsHtml(input);
        };
    }]);
});