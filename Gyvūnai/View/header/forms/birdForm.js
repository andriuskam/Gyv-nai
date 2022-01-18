"use strict";

import { createBird } from "../../../Controller/controller.js";

export const birdForm = document.createElement("fieldset");
birdForm.setAttribute("class", "birdForm fieldset");
birdForm.setAttribute("id", "catForm");
birdForm.style.display = "none";

const birdLegend = document.createElement("legend");
birdLegend.setAttribute("class", "legend");
birdLegend.innerText = "Bird";
birdForm.append(birdLegend);

export const birdName = document.createElement("input");
birdName.setAttribute("type", "text");
birdName.setAttribute("class", "input");
birdName.setAttribute("placeholder", "Name");
birdForm.append(birdName);

export const birdAge = document.createElement("input");
birdAge.setAttribute("type", "number");
birdAge.setAttribute("class", "input");
birdAge.setAttribute("placeholder", "Age");
birdAge.setAttribute("max", "70");
birdAge.setAttribute("min", "1");
birdForm.append(birdAge);

export const birdLegs = document.createElement("select");
birdLegs.setAttribute("name", "birdLegs");
birdLegs.setAttribute("id", "birdLegs");
birdLegs.setAttribute("class", "input");
birdForm.append(birdLegs);

const legsOptionSelected = document.createElement("option");
legsOptionSelected.setAttribute("value", "Legs");
legsOptionSelected.setAttribute("selected", "");
legsOptionSelected.innerText = "Legs";
birdLegs.append(legsOptionSelected);

const legsOptionOne = document.createElement("option");
legsOptionOne.setAttribute("value", "0");
legsOptionOne.innerText = "0";
birdLegs.append(legsOptionOne);

const legsOptionTwo = document.createElement("option");
legsOptionTwo.setAttribute("value", "1");
legsOptionTwo.innerText = "1";
birdLegs.append(legsOptionTwo);

const legsOptionThree = document.createElement("option");
legsOptionThree.setAttribute("value", "2");
legsOptionThree.innerText = "2";
birdLegs.append(legsOptionThree);

export const birdBeak = document.createElement("select");
birdBeak.setAttribute("name", "birdBeak");
birdBeak.setAttribute("id", "birdBeak");
birdBeak.setAttribute("class", "input");
birdForm.append(birdBeak);

const beakOptionSelected = document.createElement("option");
beakOptionSelected.setAttribute("value", "Beak");
beakOptionSelected.setAttribute("selected", "");
beakOptionSelected.innerText = "Beak";
birdBeak.append(beakOptionSelected);

const beakOptionOne = document.createElement("option");
beakOptionOne.setAttribute("value", "Meat Eater");
beakOptionOne.innerText = "Meat eater";
birdBeak.append(beakOptionOne);

const beakOptionTwo = document.createElement("option");
beakOptionTwo.setAttribute("value", "Seed eater");
beakOptionTwo.innerText = "Seed eater";
birdBeak.append(beakOptionTwo);

const beakOptionThree = document.createElement("option");
beakOptionThree.setAttribute("value", "Fruit and Nut eater");
beakOptionThree.innerText = "Fruit and Nut eater";
birdBeak.append(beakOptionThree);

const beakOptionFour = document.createElement("option");
beakOptionFour.setAttribute("value", "Nectar feeder");
beakOptionFour.innerText = "Nectar feeder";
birdBeak.append(beakOptionFour);

const beakOptionFive = document.createElement("option");
beakOptionFive.setAttribute("value", "Fish eater");
beakOptionFive.innerText = "Fish eater";
birdBeak.append(beakOptionFive);

const birdFormSubmit = document.createElement("button");
birdFormSubmit.setAttribute("type","button");
birdFormSubmit.setAttribute("class","birdFormSubmit button");
birdFormSubmit.innerText = "Submit";
birdFormSubmit.addEventListener('click', createBird);
birdForm.append(birdFormSubmit);