'use strict';

angular.module('ringnetworkApp.controllers').controller('versionController', function () {
	var conf = require('rng-core/config/conf.js');

	this.version = window.version;
	this.commitHash = window.commitHash;

	// wallet type
	this.type = (conf.bLight ? 'light-' : '') + "pow-beta2";
});
