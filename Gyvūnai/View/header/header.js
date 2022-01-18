"use strict";

import { catForm } from "./forms/catForm.js";
import { birdForm } from "./forms/birdForm.js";
import { fishForm } from "./forms/fishForm.js";

export const header = document.createElement("header");
header.setAttribute("class", "header");

const selectionSection = document.createElement("section");
selectionSection.setAttribute("class", "selectionSection");
header.append(selectionSection);

const catSelection = document.createElement("button");
catSelection.innerText = "Cat";
catSelection.setAttribute("class", "catSelection button");
catSelection.addEventListener('click', () => {
    if(catForm.style.display === "none") {
        catForm.style.display = "flex";
        birdForm.style.display = "none";
        fishForm.style.display = "none";
    }
});
selectionSection.append(catSelection);

const birdSelection = document.createElement("button");
birdSelection.innerText = "Bird";
birdSelection.setAttribute("class", "birdSelection button");
birdSelection.addEventListener('click', () => { 
    if(birdForm.style.display === "none") {
        birdForm.style.display = "flex";
        catForm.style.display = "none";
        fishForm.style.display = "none";
    }
});
selectionSection.append(birdSelection);

const fishSelection = document.createElement("button");
fishSelection.innerText = "Fish";
fishSelection.setAttribute("class", "fishSelection button");
fishSelection.addEventListener('click', () => { 
    if(fishForm.style.display === "none") {
        fishForm.style.display = "flex";
        catForm.style.display = "none";
        birdForm.style.display = "none";
    }
});
selectionSection.append(fishSelection);

header.append(catForm);
header.append(birdForm);
header.append(fishForm);