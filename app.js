/* Variables to keep track of game elements */
let wormholes = 0;
let wormholeAutoClicker = 0;
let wormholeAutoClickerCost = 20;
let wormholeMultiplier = 0;
let wormholeMultiplierCost = 10;

// Get the audio and title elements
let sound = document.getElementById("sound");
let title = document.getElementById("title");


// Add an event listener to the title
title.addEventListener("click", function() {
	// Play the sound when the title is clicked
	sound.play();
  });


/* Get the modal */
let modal = document.getElementById("aboutMeModal");

/* Get the link that opens the modal */
let link = document.getElementById("about-me-link");

/* Get the <span> element that closes the modal */
let closeBtn = document.getElementsByClassName("close-btn")[0];


/* Get button elements from index.html */
const wormholeButton = document.getElementById("wormhole-btn");
const wormholeDisplay = document.getElementById("wormhole-count");
const wormholeAutoClickerButton = document.getElementById("wormhole-auto-clicker-btn");
const wormholeAutoClickerDisplay = document.getElementById("wormhole-auto-clicker-count");
const wormholeMultiplierButton = document.getElementById("wormhole-multiplier-btn");
const wormholeMultiplierDisplay = document.getElementById("wormhole-multiplier-count");
const wormholeMultiplierPowerDisplay = document.getElementById("wormhole-multiplier-power");
const resetButton = document.getElementById("reset-btn");


//////// Wormhole creation parameters ////////

/* Function to create wormhole */
function createWormhole() {
	wormholes += Math.ceil(Math.pow(1.2, wormholeMultiplier));
	updateWormholeDisplay();
	updateMultiplierPowerDisplay();
	updateButtons();
}

/* Event listener for creating wormhole */
wormholeButton.addEventListener("click", createWormhole);

/* Function to update wormhole display */
function updateWormholeDisplay() {
	wormholeDisplay.innerHTML = wormholes;
}



//////// Wormhole Auto Clicker parameters ////////

/* Function to buy Wormhole Auto Clicker and increase its cost with each purchase */
function buyWormholeAutoClicker() {
	if (wormholes >= wormholeAutoClickerCost) {
		wormholes -= wormholeAutoClickerCost;
		wormholeAutoClicker++;
		wormholeAutoClickerCost = Math.ceil(wormholeAutoClickerCost * 1.1);
		updateWormholeDisplay();
		updateWormholeAutoClickerButton();
		wormholeAutoClickerDisplay.innerHTML = wormholeAutoClicker;
		updateButtons();
	}
}

/* Event listener for buying Wormhole Auto Clicker */
wormholeAutoClickerButton.addEventListener("click", buyWormholeAutoClicker);

/* Function to show updated Wormhole Auto Clicker cost on button */
function updateWormholeAutoClickerButton() {
	wormholeAutoClickerButton.innerHTML = `Buy Wormhole Auto Clicker (${Math.ceil(wormholeAutoClickerCost)} wormholes)`;
}



//////// Wormhole Multiplier parameters ////////

/* Function to buy Wormhole Multiplier and increase its cost with each purchase */
function buyWormholeMultiplier() {
	if (wormholes >= wormholeMultiplierCost) {
		wormholes -= wormholeMultiplierCost;
		wormholeMultiplier++;
		wormholeMultiplierCost = Math.ceil(wormholeMultiplierCost * 1.1);
		updateWormholeDisplay();
		updateWormholeMultiplierButton();
		wormholeMultiplierDisplay.innerHTML = wormholeMultiplier;
		updateMultiplierPowerDisplay();
		updateButtons();
	}
}

/* Function to show updated Wormhole Multiplier cost on button */
function updateWormholeMultiplierButton() {
	wormholeMultiplierButton.innerHTML = `Buy Wormhole Multiplier (${Math.ceil(wormholeMultiplierCost)} wormholes)`;
}

/* Event listener for buying Wormhole Multiplier */
wormholeMultiplierButton.addEventListener("click", buyWormholeMultiplier);


/* Function to display the Wormhole Multiplier power */
function updateMultiplierPowerDisplay() {
	wormholeMultiplierPowerDisplay.innerHTML = Math.pow(1.2, wormholeMultiplier).toFixed(2);
}


function updateButtons() {
    if (wormholes < wormholeAutoClickerCost) {
        document.getElementById("wormhole-auto-clicker-btn").classList.remove('active-btn');
        document.getElementById("wormhole-auto-clicker-btn").classList.add('inactive-btn');
    } else {
        document.getElementById("wormhole-auto-clicker-btn").classList.remove('inactive-btn');
        document.getElementById("wormhole-auto-clicker-btn").classList.add('active-btn');
    }

    if (wormholes < wormholeMultiplierCost) {
        document.getElementById("wormhole-multiplier-btn").classList.remove('active-btn');
        document.getElementById("wormhole-multiplier-btn").classList.add('inactive-btn');
    } else {
        document.getElementById("wormhole-multiplier-btn").classList.remove('inactive-btn');
        document.getElementById("wormhole-multiplier-btn").classList.add('active-btn');
    }
}



//////// Display and auto clicker interval parameters ////////

/* Update the initial display of the game elements (wormholes, auto clickers, multipliers, and their costs) */
updateWormholeDisplay();
updateWormholeAutoClickerButton();
wormholeAutoClickerDisplay.innerHTML = wormholeAutoClicker;
updateWormholeMultiplierButton();
wormholeMultiplierDisplay.innerHTML = wormholeMultiplier;
updateMultiplierPowerDisplay();
updateButtons();


/* Interval for auto clicker (Used to increment the wormhole count every 1 second.) */
setInterval(function() {
	for(let i = 0; i < wormholeAutoClicker; i++) {
		createWormhole();
	}
}, 1000);



//////// Dropdown menu ////////

/* Get the dropdown button element */
const dropdownButton = document.querySelector(".dropdown-btn");

/* Toggle the display of the dropdown content when the button is clicked */
dropdownButton.addEventListener("click", function() {
	const dropdownContent = this.nextElementSibling;
	dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

/* Close the dropdown if the user clicks outside of it */
window.addEventListener('click', function(e) {
	if (!dropdownButton.contains(e.target)) {
		const dropdown = document.getElementsByClassName("dropdown-content");
		for (let i = 0; i < dropdown.length; i++) {
			dropdown[i].style.display = "none";
		}
	}
});


//////// Modal parameters ////////

/* When the user clicks on the link, open the modal */ 
link.onclick = function() {
    modal.style.display = "block";
}

/* When the user clicks on <span> (x), close the modal */
closeBtn.onclick = function() {
    modal.style.display = "none";
}

/* When the user clicks anywhere outside of the modal, close it */
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//////// Reset button ////////

/* Function to reset the game */
function resetGame() {
    wormholes = 0;
    wormholeAutoClicker = 0;
    wormholeAutoClickerCost = 20;
    wormholeMultiplier = 0;
    wormholeMultiplierCost = 10;

    updateWormholeDisplay();
    updateWormholeAutoClickerButton();
    wormholeAutoClickerDisplay.innerHTML = wormholeAutoClicker;
    updateWormholeMultiplierButton();
    wormholeMultiplierDisplay.innerHTML = wormholeMultiplier;
    updateMultiplierPowerDisplay();
	updateButtons();
}

// Event listener for reset button
resetButton.addEventListener("click", resetGame);
