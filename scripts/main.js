var myHeading = document.querySelector('h1');
myHeading.innerHTML='Hello world!';

// This is a comment.

/* document.querySelector('html').onclick = function(){
	alert('Ouch! Stop poking me!');
}
 */
var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/puppy.jpg') {
		myImage.setAttribute ('src','images/puppy2.jpg');
		} else {
			myImage.setAttribute ('src','images/puppy.jpg');
		}
	}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML = myName + ' says: "Show me puppeys!"';
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = storedName + ' says: "Show me puppeys!"';
}

myButton.onclick = function() {
	setUserName();
}