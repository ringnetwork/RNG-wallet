'use strict';

var modules = [
    'ui.router',
    'angularMoment',
    'angular-carousel',
    'mm.foundation',
    'monospaced.qrcode',
    'monospaced.elastic',
    'gettext',
    'ngLodash',
    'uiSwitch',
    'bwcModule',
    'ringnetworkApp.filters',
    'ringnetworkApp.services',
    'ringnetworkApp.controllers',
    'ringnetworkApp.directives',
    'ringnetworkApp.addons',
    'ct.ui.router.extras'
];

var ringnetworkApp = window.ringnetworkApp = angular.module('ringnetworkApp', modules);

angular.module('ringnetworkApp.filters', []);
angular.module('ringnetworkApp.services', []);
angular.module('ringnetworkApp.controllers', []);
angular.module('ringnetworkApp.directives', []);
angular.module('ringnetworkApp.addons', []);

