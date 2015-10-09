var myHeading = document.querySelector('h1');
// myHeading.innerHTML='Hello world!';

// This is a comment.

/* document.querySelector('html').onclick = function(){
	alert('Ouch! Stop poking me!');
}
 */
// var myImage = document.querySelector('img');

// myImage.onclick = function() {
	// var mySrc = myImage.getAttribute('src');
	// if(mySrc === 'images/puppy.jpg') {
		// myImage.setAttribute ('src','images/puppy2.jpg');
		// } else {
			// myImage.setAttribute ('src','images/puppy.jpg');
		// }
	// }

	
var mainImage = document.querySelector('img');

var puppyGifs = new Array('images/puppy1.gif','images/puppy2.gif','images/puppy3.gif','images/puppy4.gif');
var kittenGifs = new Array('images/kitten1.gif','images/kitten2.gif','images/kitten3.gif');
var rhinoGifs = new Array('images/rhino1.gif','images/rhino2.gif','images/rhino3.gif');

var puppyButton = document.querySelector('.puppy');
var kittenButton = document.querySelector('.kitten');
var rhinoButton = document.querySelector('.rhino');

function showPuppies() {
	randomNum = Math.floor((Math.random() * puppyGifs.length));
	mainImage.setAttribute ('src',puppyGifs[randomNum]);
}

function showKittens() {
	randomNum = Math.floor((Math.random() * kittenGifs.length));
	mainImage.setAttribute ('src',kittenGifs[randomNum]);
}

function showRhinos() {
	randomNum = Math.floor((Math.random() * rhinoGifs.length));
	mainImage.setAttribute ('src',rhinoGifs[randomNum]);
}


puppyButton.onclick = function() {
	showPuppies();
}

kittenButton.onclick = function() {
	showKittens();
}

rhinoButton.onclick = function() {
	showRhinos();
}


// var myHeading = document.querySelector('h1');

// function setUserName() {
	// var myName = prompt('Please enter your name.');
	// localStorage.setItem('name',myName);
	// myHeading.innerHTML = myName + ' says: "Show me puppeys!"';
// }

// if(!localStorage.getItem('name')) {
	// setUserName();
// } else {
	// var storedName = localStorage.getItem('name');
	// myHeading.innerHTML = storedName + ' says: "Show me puppeys!"';
// }

// myButton.onclick = function() {
	// setUserName();
// }
