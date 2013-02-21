//Jeremy Goldman
//SDI_Project3
//02/21/13
//
//   This is a continuation of the last story about a customer who goes to purchase a mobile phone*
//   I will be using the code from project 2 as a starting point.

//Variables
var custInLine = 8;
var monthsSinceUpgrade = 28;
var phoneSelection = ["Galaxy S III", "RAZR HD", "iPhone 5", "Droid Incredible LTE"];
var chooseNumDevices = 2;
var custCurrentCarrier = "Verizon Wireless";
var supportedCarriers = ["Verizon Wireless", "Sprint", "AT&T"];
var custFirstName = "Jenna";
var custLastName = " Mike-Mayer";

//Procedure function - No return value
var recentlyUpgraded = function(monthsSinceUpgrade){
	
	if(monthsSinceUpgrade >= 18){
		console.log("You havent upgraded to a new phone in a while! You picked a great time to come in!");
	}else{
		
		console.log("It looks like you recently got this phone, but lets see what we can do!");
	}	
};

//BOOL Function - return BOOL
var hasCustCarrier = function (supportedCarriers, custCurrentCarrier){
	
	if(supportedCarriers.indexOf(custCurrentCarrier > -1)){
		console.log("Great! It looks like " + custCurrentCarrier + " is one of our supported carriers!");
		return true;
		
	}else{
		
		console.log("I'm Sorry.  It looks like we don't support your carrier in store. :(");
		return false;
	}
	
};

// Number Function - return number
var customerLine = function(custInLine){
	var empToHelp = 2;
	
	while(custInLine > 0){
		console.log("There is " + custInLine +" customer(s) in line ahead of you.  We have "+ empToHelp +" employees to work through the line.");
		custInLine--;
	}
	return custInLine;
};

//String Function - return String
var goodBye = function(custFirstName, custLastName){
	
	var empName = "Jeremy";
	
	var thankCustomer = "Thanks for coming in today " + custFirstName + custLastName +"! My name is " + empName +" if you have any questions! What can I get for you?";
	
	return thankCustomer;
	
};

//Array Function - return Array
var completePhoneSelection = function(phoneSelection, chooseNumDevices){

var chosenPhones = [];
	
	for(i = 0; i < chooseNumDevices; i++){
		var currentSelection = phoneSelection[i];
		chosenPhones.unshift(currentSelection);
		console.log("You have picked the " + currentSelection);
	}
	
	return chosenPhones;
};

recentlyUpgraded(monthsSinceUpgrade);

console.log("It is " + hasCustCarrier(supportedCarriers, custCurrentCarrier) + " that we carry " + custCurrentCarrier);

console.log("There are currently " + customerLine(custInLine) + " people ahead of you in line!");

console.log(goodBye(custFirstName, custLastName));

console.log ("You have picked " + completePhoneSelection(phoneSelection, chooseNumDevices) + " I hope you enjoy those phones!");




