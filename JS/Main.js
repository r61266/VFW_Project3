// Alec Shallenberger
// March 13, 2013
// Term 1303
// VFW Project3

window.addEventListener("DOMContentLoaded", function(){

	function $(x) {
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	function getSelectedRadio() {
		var radios = document.forms[0].sex;
		for (var i=0; i<radios.length; i++){
			if(radios[i].checked){
				sexValue = radios[i].value;
			}
		}
	}
	
	function toggleControls(n) {
		switch(n){
			case "on":
				$('contactForm').style.display = "none";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "none";
				break;
			case "off":
				$('contactForm').style.display = "block";
				$('clear').style.display = "inline";
				$('displayLink').style.display = "inline";
				$('items').style.display = "none";
				break;
			default:
				return false;
		}
	}
	
	function storeData() {
		var id					= Math.floor(Math.random()*100001);
		getSelectedRadio();
		var item				= {};
			item.fname 			= ["First Name:", $('fname').value];
			item.lname			= ["Last Name:", $('lname').value];
			item.date			= ["Date:", $('date').value];
			item.email			= ["Email:", $('email').value];
			item.age			= ["Age:", $('age').value];
			item.addr			= ["Home Address:", $('addr').value];
			/*item.Favorites		= ["Check Favorites:", favoriteValue ];*/
			item.sex			= ["Sex:", sexValue];
			item.Artist			= ["Preferred Artist:", $('Artist').value];
			item.notes			= ["Additional Notes:", $('notes').value];
		localStorage.setItem(id, JSON.stringify(item));
		alert("Birthday Saved!");
	}
	
	function getData() {
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There is no data in Local Storage.");
		}
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeli = document.createElement('li');
			var linksLi = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var object = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var t in object){
				varmakeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = object[t][0]+" "+object[t][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), LinksLi); 
		} 
	}
	
	function makeItemLinks(key, LinksLi){
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Birthday";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Birthday";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	}
	 
	function editItem(){
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		//Show Form
		toggleControls("off");
		
		$('fname').value = item.fname[1];
		$('lname').value = item.lname[1];
		$('date').value = item.date[1];
		$('email').value = item.emial[1];
		$('age').value = item.age[1];
		$('addr').value = item.addr[1];
		var radios = document.forms[0].sex;
		for(var i=0; i<radios.length; i++){
			if(radios[i].value == "Male" && item.sex[1] == "Male"){
				radios[i].setAttribute("checked", "checked");
			}else if(radios[i].value == "Female" && item.sex[1] == "Female"){
				radios[i].setAttribute("checked", "checked");
			}
		}
		$('Artist').value = item.Artist[1];
		$('notes').value = item.notes[1];
		
		save.removeEventListener("click", storeData);
		$('submit').value = "Edit Birthday";
		var editSubmit = $('submit');
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;
	}
	 
	function clearLocal() {
		if(localStorage.length === 0){
			alert("There is no data to clear.")
		}else{
			localStorage.clear();
			alert("All Birthday dates are deleted!");
			window.location.reload();
			return false;
		}
	}
	
	function validate(){
		
		}
	 
	 var sexValue
	 ;
	
	
	
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);
});
 /*function validateForm() {
	 var getEmail = document.forms[0]["email"].value;
	 var re = /^\w+(\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	 	if (!(re.exec(getEmail))) {
			error = "Please enter a valid email address.\n";
		}
		if (error) alert(error);
		
};*/






