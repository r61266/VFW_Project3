// Alec Shallenberger
// March 13, 2013
// Term 1303
// VFW Project2


var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var date = document.getElementById("date");
var email = document.getElementById("email");
var age = document.getElementById("age");
var addr = document.getElementById("addr");

var captureData = function(){
	localStorage.setItem("First Name", fname.value);
	localStorage.setItem("Last Name", lname.value);
	localStorage.setItem("Date of Birth", date.value);
	localStorage.setItem("Email", email.value);
	localStorage.setItem("Age", age.value);
	localStorage.setItem("Home Address", addr.value);
};
//EventListeners 
fname.addEventListener("blur", captureData);
lname.addEventListener("blur", captureData);
date.addEventListener("blur", captureData);
email.addEventListener("blur", captureData);
age.addEventListener("blur", captureData);
addr.addEventListener("blur", captureData);

for(i=0, j=localStorage.length; i<j; i++){
	var get = localStorage.key(i);
	var retrieve = localStorage.getItem(get);
	console.log(retrieve+" : " +get);
};


