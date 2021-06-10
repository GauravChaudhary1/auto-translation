/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["com/gaurav/ui5/rfid/test/integration/AllJourneys",
	], function () {		
		QUnit.start();
	});
});