// Alec Shallenberger
// March 13, 2013
// Term 1303
// VFW Project3

window.addEventListener("DOMContentLoaded", function(){
		
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	function getSelectedRadio(){
		var radios = document.forms[0].sex;
		for (var i=0; i<radios.length; i++){
			if(radios[i].checked){
				sexValue = radios[i].value;
			}
		}
	}

	function storeData(){
		var id					= Math.floor(Math.random()*10000000001);
		getSelectedRadio();
		var item				= {};
			item.fname 			= ["First Name", $('fname').value];
			item.lname			= ["Last Name", $('lname').value];
			item.date			= ["Date", $('date').value];
			item.email			= ["Email", $('email').value];
			item.age			= ["Age", $('age').value];
			item.addr			= ["Home Address", $('addr').value];
			/*item.Favorites		= ["Check Favorites:", favoriteValue ];*/
			item.sex			= ["Sex:", sexValue];
			item.Artist			= ["Preferred Artist", $('Artist').value];
			item.notes			= ["Additional Notes", $('notes').value];
		
		localStorage.setItem(id, JSON.stringify(item));
		alert("Birthday Saved!");
	}
	
	function getData(){
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.appendChild(makeDiv);
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeli = document.createElement('li');
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
			}
		} 
	}
	 var sexValue;
	
	
	
	var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	/*var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);*/
	var save = $('submit');
	save.addEventListener("click", storeData);

});







