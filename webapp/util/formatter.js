sap.ui.define  (function(){
	"use strict";
	
	return{
		
		formatBarColor: function(quantity){
			if(quantity>10){
				return "Good";
			}
			else if (quantity<10 && quantity>4){
				return "Neutral";
			}
			else {
				return "Error";
			}
			
		}
		
	};
	
	});