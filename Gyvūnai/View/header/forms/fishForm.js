"use strict";

import { createFish } from "../../../Controller/controller.js";

export const fishForm = document.createElement("fieldset");
fishForm.setAttribute("class", "fishForm fieldset");
fishForm.setAttribute("id", "catForm");
fishForm.style.display = "none";

const fishLegend = document.createElement("legend");
fishLegend.setAttribute("class", "legend");
fishLegend.innerText = "Fish";
fishForm.append(fishLegend);

export const fishName = document.createElement("input");
fishName.setAttribute("type", "text");
fishName.setAttribute("class", "input");
fishName.setAttribute("placeholder", "Name");
fishForm.append(fishName);

export const fishAge = document.createElement("input");
fishAge.setAttribute("type", "number");
fishAge.setAttribute("class", "input");
fishAge.setAttribute("placeholder", "Age");
fishAge.setAttribute("max", "15");
fishAge.setAttribute("min", "1");
fishForm.append(fishAge);

export const fishLegs = document.createElement("select");
fishLegs.setAttribute("name", "fishLegs");
fishLegs.setAttribute("id", "fishLegs");
fishLegs.setAttribute("class", "input");
fishForm.append(fishLegs);

const legsOptionSelected = document.createElement("option");
legsOptionSelected.setAttribute("value", "Legs");
legsOptionSelected.setAttribute("selected", "");
legsOptionSelected.innerText = "Legs";
fishLegs.append(legsOptionSelected);

const legsOptionOne = document.createElement("option");
legsOptionOne.setAttribute("value", "0");
legsOptionOne.innerText = "0";
fishLegs.append(legsOptionOne);

const legsOptionTwo = document.createElement("option");
legsOptionTwo.setAttribute("value", "2");
legsOptionTwo.innerText = "2";
fishLegs.append(legsOptionTwo);

export const fishFins = document.createElement("select");
fishFins.setAttribute("name", "fishFins");
fishFins.setAttribute("id", "fishFins");
fishFins.setAttribute("class", "input");
fishForm.append(fishFins);

const finsOptionSelected = document.createElement("option");
finsOptionSelected.setAttribute("value", "Fins");
finsOptionSelected.setAttribute("selected", "");
finsOptionSelected.innerText = "Fins";
fishFins.append(finsOptionSelected);

const finsOptionOne = document.createElement("option");
finsOptionOne.setAttribute("value", "7 fins");
finsOptionOne.innerText = "7 fins";
fishFins.append(finsOptionOne);

const fishFormSubmit = document.createElement("button");
fishFormSubmit.setAttribute("type","button");
fishFormSubmit.setAttribute("class","fishFormSubmit button");
fishFormSubmit.innerText = "Submit";
fishFormSubmit.addEventListener('click', createFish);
fishForm.append(fishFormSubmit)