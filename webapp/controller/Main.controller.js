sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/Button",
	"com/seagate/utility/xlsx/library"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, History, Button, Lib) {
		"use strict";

		return Controller.extend("com.gaurav.ui5.rfid.controller.Main", {
			onInit : function () {		
				this.byId("idSmartTable").getTable().attachUpdateFinished(this._afterUpdateFinished.bind(this));
				// let oToolbar = this.byId("idSmartTable").getToolbar();
				// oToolbar.insertContent( new Button({text:"Create", type:"Transparent", press: this.handleCreate}),2)		
			},
	
			_navigate : function (oEvent) {
				var det = JSON.stringify({detail:"a"});
				this.getOwnerComponent().getRouter().navTo("toDetail",{object:det}, true);
			},

			_afterUpdateFinished: function(oEvent){
				this.byId("idSmartTable").getTable().getItems().forEach( item => item.setType("Navigation") );
				this.byId("idSmartTable").getTable().attachItemPress(this._navigate.bind(this));
			},

			handle: function(){
				var oHistory = History.getInstance();
				var sPreviousHash = oHistory.getPreviousHash();
				if (sPreviousHash !== undefined) {
					window.history.go(-1);
				} else {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("main", {}, true);
				}
			},
			handleCreate: function(){
				console.log('create')
			}
			

		});
	});
