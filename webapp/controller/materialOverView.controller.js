sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sampleCoreElements/sampleCoreElements/util/formatter"
], function (Controller, formatter) {
	"use strict";
	return Controller.extend("sampleCoreElements.sampleCoreElements.controller.materialOverView", {
		formatter: formatter,
		onChangeID: function (oEvt) {
			var aFilter = [];
			var query = oEvt.getSource().getValue("value");
			// getParameter("value");
			if (query && query.length > 0) {
				var oFilter = new sap.ui.model.Filter("Material Num", sap.ui.model.FilterOperator.EQ, query);
				aFilter.push(oFilter);
			}
			var oTable = this.getView().byId("table0");
			oTable.getBinding("items").filter(aFilter);
		},
		onSupplier: function (oEvt) {
			var aFilter = [];
			var query = oEvt.getSource().getValue("value");
			// getParameter("value");
			if (query && query.length > 0) {
				var oFilter = new sap.ui.model.Filter("Material Supplier", sap.ui.model.FilterOperator.Contains, query);
				aFilter.push(oFilter);
			}
			var oTable = this.getView().byId("table0");
			oTable.getBinding("items").filter(aFilter);
		},
		onProduct: function (oEvt) {
			var aFilter = [];
			var query = oEvt.getSource().getValue("value");
			// getParameter("value");
			if (query && query.length > 0) {
				var oFilter = new sap.ui.model.Filter("Material Name", sap.ui.model.FilterOperator.Contains, query);
				aFilter.push(oFilter);
			}
			var oTable = this.getView().byId("table0");
			oTable.getBinding("items").filter(aFilter);
		},
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sampleCoreElements.sampleCoreElements.view.materialOverView
		 */
		onInit: function () {
			
			
		},
		/**
		 *@memberOf sampleCoreElements.sampleCoreElements.controller.materialOverView
		 */

		onBack: function (oEvent) {
				
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			 oRouter.navTo("home");
		
		}
	});
});