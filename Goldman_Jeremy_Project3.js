//Jeremy Goldman
//SDI_Project3
//02/21/13
//
//   This is a continuation of the last story about a customer who goes to purchase a mobile phone*
//   I will be using the code from project 2 as a starting point.

//Defined Objects

var customer = {

	phoneSelection : ["Galaxy S III", "RAZR HD", "iPhone 5", "Droid Incredible LTE"],
	custFirstName : "Jenna",
	custLastName : "Mike-Mayer",
	custCurrentCarrier : "Verizon Wireless",
	
	//Procedure Method - No return value
	 recentlyUpgraded : function(monthsSinceUpgrade){
	
	if(monthsSinceUpgrade >= 18){
		console.log("You havent upgraded to a new phone in a while! You picked a great time to come in!");
	}else{
		
			console.log("It looks like you recently got this phone, but lets see what we can do!");
		}	
	},
	//Array Method - return Array
	completePhoneSelection : function(phoneSelection, chooseNumDevices){

		var chosenPhones = [];
	
	for(i = 0; i < chooseNumDevices; i++){
		var currentSelection = customer.phoneSelection[i];
		chosenPhones.unshift(currentSelection);
		
		if(i > 0){
			console.log("You have also picked the " + currentSelection);

			
		}else{
			
			console.log("You have picked the " + currentSelection);

		}
		
				
		
	}
	
	return chosenPhones;
},
	//Accessor Method - Get Customer's Name and return
	getCustomerName : function(){
	return customer.custFirstName + " " + customer.custLastName;
	
	}



	
};


var employee = {

	supportedCarriers : ["Verizon Wireless", "Sprint", "AT&T"],


	//BOOL Method - return BOOL
	 hasCustCarrier : function (supportedCarriers, custCurrentCarrier){
	
	if(supportedCarriers.indexOf(custCurrentCarrier > -1)){
		console.log("Great! It looks like " + custCurrentCarrier + " is one of our supported carriers!");
		return true;
		
	}else{
		
			console.log("I'm Sorry.  It looks like we don't support your carrier in store. :(");
			return false;
		}
	
	},

	// Number Method - return number
	 customerLine : function(custInLine){
		var empToHelp = 2;
	
		while(custInLine > 0){
			console.log("There is " + custInLine +" customer(s) in line ahead of you.  We have "+ empToHelp +" employees to work through the line.");
			custInLine--;
			
			for( x = 0; x < empToHelp ; x++ ){
				custInLine--;
				
			}
			
		}
		return custInLine;
	},

	//String Method - return String
	goodBye : function(custFirstName, custLastName){
	
		var empName = "Jeremy";
	
		var thankCustomer = "Thanks for coming in today " + customer.getCustomerName() +"! My name is " + empName +" if you have any questions! What can I get for you?";
	
		return thankCustomer;
	
	},
	
	
}
//Variables
var custInLine = 8;
var monthsSinceUpgrade = 28;
var chooseNumDevices = 2;
var custCurrentCarrier = customer.custCurrentCarrier;
var custFirstName = customer.custFirstName;
var custLastName = customer.custLastName;





customer.recentlyUpgraded(monthsSinceUpgrade);

console.log("It is " + employee.hasCustCarrier(employee.supportedCarriers, custCurrentCarrier) + " that we carry " + custCurrentCarrier);

if(employee.customerLine(custInLine) <= 0){

	console.log("You are next in line!");

	}else{console.log("There are currently " + employee.customerLine(custInLine) + " people ahead of you in line!");}

console.log(employee.goodBye(custFirstName, custLastName));

console.log ("You have chosen the " + customer.completePhoneSelection(employee.phoneSelection, chooseNumDevices) + " today. I hope you enjoy those phones!");


console.log(customer.getCustomerName());

