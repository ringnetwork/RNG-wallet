'use strict';

angular.module('ringnetworkApp.services').factory('sjcl', function bitcoreFactory(bwcService) {
    var sjcl = bwcService.getSJCL();
    return sjcl;
});