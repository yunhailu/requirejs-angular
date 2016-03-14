define(['filters/module'], function(filters){
    'use strict';
    filters.filter('trustUrl', ['$sce', function($sce){
        //过滤器的具体js代码
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }]);
});