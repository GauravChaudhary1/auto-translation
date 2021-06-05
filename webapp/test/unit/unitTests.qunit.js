/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comgaurav.ui5./rfid/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
