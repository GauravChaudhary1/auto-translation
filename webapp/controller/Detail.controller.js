sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel',
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/core/routing/History"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, MessageToast, MessageBox, History) {
		"use strict";
        
		return Controller.extend("com.gaurav.ui5.rfid.controller.Detail", {
			onInit : function () {
				this._wizard = this.byId("idProblem");
				var oRouters = sap.ui.core.UIComponent.getRouterFor(this);
                this.getView().bindElement("/Problem(Serialno='13246546',Orderno='1321321321',Material='727657600-00')");                
				this.getOwnerComponent().getRouter().getRoute("toDetail").attachPatternMatched(this._onObjectMatched, this);
			},
				    
            discardProgress: function () {                                    
            },

            onNextStep: function(){
                this._wizard.nextStep();
            },
            
			onPrevStep: function(){
                this._wizard.previousStep();
            },

			_onObjectMatched: function (oEvent) {
				
			},            

			handleWizardCancel: function(){
				var oHistory = History.getInstance();
				var sPreviousHash = oHistory.getPreviousHash();
				if (sPreviousHash !== undefined) {
					window.history.go(-1);
				} else {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("main", {}, true);
				}
				
			},
			/**
			 * 
			 * @param {typeof Object} oEvent 
			 */
			handleDraft: function(oEvent){
				debugger;				
				console.log("set");
				var oDraftIndi = this.byId("draftIndi");
				oDraftIndi.showDraftSaving();
				oDraftIndi.showDraftSaved();
				oDraftIndi.clearDraftState();				
			}
		});
	});
