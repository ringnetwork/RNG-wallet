'use strict';

angular.module('ringnetworkApp.controllers').controller('howtouse', function (uxLanguage) {
	var self = this;
	self.isEn = function () {
		return uxLanguage.getCurrentLanguage() == 'en'
	};
});