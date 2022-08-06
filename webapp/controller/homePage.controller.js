sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sampleCoreElements.sampleCoreElements.controller.homePage", {
		
		onPress : function(){
	//	var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	//	oRouter.navTO("materialoverview");
		this.getOwnerComponent().getRouter().navTo("materialoverview");
		}
		
//		onInit: function () {

//		}
	});
});