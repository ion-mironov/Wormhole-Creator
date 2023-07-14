/* Variables to keep track of game elements */
let wormholes = 0;
let wormholeAutoClicker = 0;
let wormholeAutoClickerCost = 20;
let wormholeMultiplier = 0;
let wormholeMultiplierCost = 10;


/* Get button elements from index.html */
const wormholeButton = document.getElementById("wormhole-btn");
const wormholeDisplay = document.getElementById("wormhole-count");
const wormholeAutoClickerButton = document.getElementById("wormhole-auto-clicker-btn");
const wormholeAutoClickerDisplay = document.getElementById("wormhole-auto-clicker-count");
const wormholeMultiplierButton = document.getElementById("wormhole-multiplier-btn");
const wormholeMultiplierDisplay = document.getElementById("wormhole-multiplier-count");
const wormholeMultiplierPowerDisplay = document.getElementById("wormhole-multiplier-power");



//////// Wormhole parameters ////////

/* Function to create wormhole */
function createWormhole() {
    wormholes += Math.ceil(Math.pow(1.2, wormholeMultiplier));
    updateWormholeDisplay();
	updateMultiplierPowerDisplay();
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
    console.log("Auto clicker button was clicked.");    // Log to the console when the button is clicked
    if (wormholes >= wormholeAutoClickerCost) {
        wormholes -= wormholeAutoClickerCost;
        wormholeAutoClicker++;
		wormholeAutoClickerCost = Math.ceil(wormholeAutoClickerCost * 1.1);
        updateWormholeDisplay();
		updateWormholeAutoClickerButton();
		wormholeAutoClickerDisplay.innerHTML = wormholeAutoClicker;
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
	console.log("Multiplier button was clicked.");    // Log to the console when the button is clicked
    if (wormholes >= wormholeMultiplierCost) {
        wormholes -= wormholeMultiplierCost;
        wormholeMultiplier++;
        wormholeMultiplierCost = Math.ceil(wormholeMultiplierCost * 1.1);
        updateWormholeDisplay();
        updateWormholeMultiplierButton();
        wormholeMultiplierDisplay.innerHTML = wormholeMultiplier;
		updateMultiplierPowerDisplay();
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



//////// Display and auto clicker interval parameters ////////

/* Update the initial display of the game elements (wormholes, auto clickers, multipliers, and their costs) */
updateWormholeDisplay();
updateWormholeAutoClickerButton();
wormholeAutoClickerDisplay.innerHTML = wormholeAutoClicker;
updateWormholeMultiplierButton();
wormholeMultiplierDisplay.innerHTML = wormholeMultiplier;
updateMultiplierPowerDisplay();


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
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
});

