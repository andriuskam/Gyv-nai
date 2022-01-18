"use strict";

import { createCat } from "../../../Controller/controller.js";

export const catForm = document.createElement("fieldset");
catForm.setAttribute("class", "catForm fieldset");
catForm.setAttribute("id", "catForm");


const catLegend = document.createElement("legend");
catLegend.setAttribute("class", "legend");
catLegend.innerText = "Cat";
catForm.append(catLegend);

export const catName = document.createElement("input");
catName.setAttribute("type", "text");
catName.setAttribute("class", "input");
catName.setAttribute("placeholder", "Name");
catForm.append(catName);

export const catAge = document.createElement("input");
catAge.setAttribute("type", "number");
catAge.setAttribute("class", "input");
catAge.setAttribute("placeholder", "Age");
catAge.setAttribute("max", "25");
catAge.setAttribute("min", "1");
catForm.append(catAge);

export const catLegs = document.createElement("select");
catLegs.setAttribute("name", "catLegs");
catLegs.setAttribute("id", "catLegs");
catLegs.setAttribute("class", "input");
catForm.append(catLegs);

const legsOptionSelected = document.createElement("option");
legsOptionSelected.setAttribute("value", "Legs");
legsOptionSelected.setAttribute("selected", "");
legsOptionSelected.innerText = "Legs";
catLegs.append(legsOptionSelected);

const legsOptionOne = document.createElement("option");
legsOptionOne.setAttribute("value", "0");
legsOptionOne.innerText = "0";
catLegs.append(legsOptionOne);

const legsOptionOTwo = document.createElement("option");
legsOptionOTwo.setAttribute("value", "1");
legsOptionOTwo.innerText = "1";
catLegs.append(legsOptionOTwo);

const legsOptionThree = document.createElement("option");
legsOptionThree.setAttribute("value", "2");
legsOptionThree.innerText = "2";
catLegs.append(legsOptionThree);

const legsOptionFour = document.createElement("option");
legsOptionFour.setAttribute("value", "3");
legsOptionFour.innerText = "3";
catLegs.append(legsOptionFour);

const legsOptionFive = document.createElement("option");
legsOptionFive.setAttribute("value", "4");
legsOptionFive.innerText = "4";
catLegs.append(legsOptionFive);

export const catFur = document.createElement("select");
catFur.setAttribute("name", "catFur");
catFur.setAttribute("id", "catFur");
catFur.setAttribute("class", "input");
catForm.append(catFur);

const furOptionSelected = document.createElement("option");
furOptionSelected.setAttribute("value", "Fur");
furOptionSelected.setAttribute("selected", "");
furOptionSelected.innerText = "Fur";
catFur.append(furOptionSelected);

const furOptionOne = document.createElement("option");
furOptionOne.setAttribute("value", "Long fur");
furOptionOne.innerText = "Long fur";
catFur.append(furOptionOne);

const furOptionOTwo = document.createElement("option");
furOptionOTwo.setAttribute("value", "Crimped fur");
furOptionOTwo.innerText = "Crimped fur";
catFur.append(furOptionOTwo);

const furOptionThree = document.createElement("option");
furOptionThree.setAttribute("value", "Short fur");
furOptionThree.innerText = "Short fur";
catFur.append(furOptionThree);

const furOptionFour = document.createElement("option");
furOptionFour.setAttribute("value", "Hairless");
furOptionFour.innerText = "Hairless";
catFur.append(furOptionFour);

const furOptionFive = document.createElement("option");
furOptionFive.setAttribute("value", "Solid coat");
furOptionFive.innerText = "Solid coat";
catFur.append(furOptionFive);

const furOptionSix = document.createElement("option");
furOptionSix.setAttribute("value", "Bi-color coat");
furOptionSix.innerText = "Bi-color coat";
catFur.append(furOptionSix);

const furOptionOSeven = document.createElement("option");
furOptionOSeven.setAttribute("value", "Tabby coat");
furOptionOSeven.innerText = "Tabby coat";
catFur.append(furOptionOSeven);

const furOptionEight = document.createElement("option");
furOptionEight.setAttribute("value", "Tri-color coat");
furOptionEight.innerText = "Tri-color coat";
catFur.append(furOptionEight);

const furOptionNine = document.createElement("option");
furOptionNine.setAttribute("value", "Tortoiseshell coat");
furOptionNine.innerText = "Tortoiseshell coat";
catFur.append(furOptionNine);

const furOptionTen = document.createElement("option");
furOptionTen.setAttribute("value", "Torbie coat");
furOptionTen.innerText = "Torbie coat";
catFur.append(furOptionTen);

const furOptionEleven = document.createElement("option");
furOptionEleven.setAttribute("value", "Color point coat");
furOptionEleven.innerText = "Color point coat";
catFur.append(furOptionEleven);

const catFormSubmit = document.createElement("button");
catFormSubmit.setAttribute("type","button");
catFormSubmit.setAttribute("class","catFormSubmit button");
catFormSubmit.innerText = "Submit";
catFormSubmit.addEventListener('click', createCat);
catForm.append(catFormSubmit)