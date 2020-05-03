var Chance = require('chance');
var chance = new Chance();

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send(generateAnimals());
});

app.listen(3000, function () {
    console.log("Dang an HTTP request ! You're such a " + chance.animal());
});

function generateAnimals() {
    var numberOfAnimals = chance.integer({
        min: 1,
        max: 10
    });

    console.log(numberOfAnimals);

    var animals = [];
    for (var i = 0; i < numberOfAnimals; i++){
        var animal = chance.animal();
        var weight = chance.floating({
            min: 0.01,
            max: 1000
        });

        var syllables = chance.integer({
            min: 1,
            max: 3
        });

        var battleCry = "";

        for (var j = 0; j < syllables; j++){
            battleCry += chance.syllable();
        }

        animals.push({
            specie: animal,
            weight: weight,
            battleCry: battleCry
        })
    }

    console.log(animals);

    return animals;
}

