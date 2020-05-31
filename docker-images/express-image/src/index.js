// Required libraries
var Chance = require('chance');
var chance = new Chance();

const express = require('express');
const app = express();

// Set a random state for the express service.
// Used to identify which express we communicate with 
// for the load balancing.
const srvState = chance.state({ full: true });

// When service is accessed, return an object containing :
// - animals: an array of animals 
// - srvState: a random state location of the service
app.get('/', function (req, res) {
    res.send({
        animals: generateAnimals(),
        srvState: srvState
    });
});

// Write a log with a random animal name when the port 80 is accessed
app.listen(80, function () {
    console.log("Dang an HTTP request ! You're such a " + chance.animal());
});

// Generate an Array of animals with their specie, weight and battle cry
function generateAnimals() {
	// Randomize the number of animals to generate
    var numberOfAnimals = chance.integer({
        min: 1,
        max: 10
    });

    console.log(numberOfAnimals);

	// Generate the animals
    var animals = [];
    for (var i = 0; i < numberOfAnimals; i++) {
		// Random animal
        var animal = chance.animal();
		// Random weight
        var weight = chance.floating({
            min: 0.01,
            max: 1000
        });

		// Random battle cry
        var syllables = chance.integer({
            min: 1,
            max: 3
        });
		
        var battleCry = "";
        
		for (var j = 0; j < syllables; j++) {
            battleCry += chance.syllable();
        }
        
		battleCry += battleCry;

		// Push the new animal to the array
        animals.push({
            specie: animal,
            weight: weight,
            battleCry: battleCry
        })
    }

    console.log(animals);

    return animals;
}
