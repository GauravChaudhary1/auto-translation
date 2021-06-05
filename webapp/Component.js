sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/gaurav/ui5/rfid/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.gaurav.ui5.rfid.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			jQuery.sap.registerModulePath('com.seagate.utility', '/sap/bc/ui5_ui5/sap/ZCUST_LIB2');
			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});
