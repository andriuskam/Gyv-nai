"use strict";

import Bird from "../Model/Bird.js";
import Cat from "../Model/Cat.js";
import Fish from "../Model/Fish.js";

import { catName, catAge, catLegs, catFur } from "../View/header/forms/catForm.js";
import { birdName, birdAge, birdLegs, birdBeak } from "../View/header/forms/birdForm.js";
import { fishName, fishAge, fishLegs, fishFins } from "../View/header/forms/fishForm.js";

import createContent from "../View/main/content.js";

const animals = [];

function generateData(){

        const setType = animals[animals.length - 1].type;
        const setName = animals[animals.length - 1].name;
        const setAge = animals[animals.length - 1].age;
        const setLegs = animals[animals.length - 1].legs;
        const setFeature = animals[animals.length - 1].fur || animals[animals.length - 1].beak || animals[animals.length - 1].fins;
    
        createContent(setType, setName, setAge, setLegs, setFeature);
}

export function createCat() {

    const catNameValue = catName.value;
    const catAgeValue = catAge.value;
    const catLegsValue = catLegs.value;
    const catFurValue = catFur.value;

    if(catNameValue && catAgeValue && catLegsValue != "Legs" && catFurValue != "Fur"){
        
        const cat = new Cat("Cat", catNameValue, catAgeValue, catLegsValue, catFurValue);
        animals.push(cat);
        generateData();

    } else {
        alert("Enter all fields!");
    }

    (() => {
        catName.value = "";
        catAge.value = "";
        catLegs.value = "Legs";
        catFur.value = "Fur";
    })();
}

export function createBird() {

    const birdNameValue = birdName.value;
    const birdAgeValue = birdAge.value;
    const birdLegsValue = birdLegs.value;
    const birdBeakValue = birdBeak.value;

    if(birdNameValue && birdAgeValue && birdLegsValue != "Legs" && birdBeakValue != "Beak"){
        
        const bird = new Bird("Bird", birdNameValue, birdAgeValue, birdLegsValue, birdBeakValue);
        animals.push(bird);
        generateData();

    } else {
        alert("Enter valid data!");
    }

    (() => {
        birdName.value = "";
        birdAge.value = "";
        birdLegs.value = "Legs";
        birdBeak.value = "Beak";
    })();
}

export function createFish() {

    const fishNameValue = fishName.value;
    const fishAgeValue = fishAge.value;
    const fishLegsValue = fishLegs.value;
    const fishFinsValue = fishFins.value;

    if(fishNameValue && fishAgeValue && fishLegsValue != "Legs" && fishFinsValue != "Fins"){
        
        const fish = new Fish("Fish", fishNameValue, fishAgeValue, fishLegsValue, fishFinsValue);
        animals.push(fish);
        generateData();

    } else {
        alert("Enter valid data!");
    }

    (() => {
        fishName.value = "";
        fishAge.value = "";
        fishLegs.value = "Legs";
        fishFins.value = "Fins";
    })();
}