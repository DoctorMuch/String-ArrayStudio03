let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
food = food.split(",").sort();
equipment = equipment.split(",").sort();
pets = pets.split(",").sort();
sleepAids = sleepAids.split(",").sort();

//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [food, equipment, pets, sleepAids];
//console.log(cargoHold);//

//console.log(cargoHold.length);

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
console.log(`The cargo hold contains four cabinets, each with different items in them. The four cabinets are: 
1. Food
2. Equipment
3. Pets
4. Sleep Aids
\nPlease pick a number between 1 and 4 to see the contents of the cabinet.`)

const input = require('readline-sync');
let cabinet = input.question("\nWhich cabinet's contents would you like to see? ");
let cabinetChoice = cargoHold[(cabinet - 1)];

if (cabinet <= 4) {
  console.log(`That cabinet contains ${cabinetChoice}.`); 
} else {
  console.log(`That entry is invalid. Please enter a number between 1 and 4.`)
}
//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.



//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

const ask = require('readline-sync');
let item = ask.question("\nIs there a particular item I can get for you? \nEnter it here: ");


if (cabinetChoice.includes(item)) {
  console.log(`Cabinet ${cabinet} DOES contain ${item}. `);
} else {
  console.log(`I'm sorry, Dave. I'm afraid I can't do that.`);
}