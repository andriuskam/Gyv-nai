"use strict";

import { main } from "./main.js";

export default function createContent(objectType, objectName, objectAge, objectLegs, objectFeature){
    
    const animalCard = document.createElement("section");
    animalCard.setAttribute("id", "animalCard");
    animalCard.setAttribute("class", "animalCard");
    main.append(animalCard);

    const animalType = document.createElement("p");
    animalType.setAttribute("class", "animalType output");
    animalType.innerText = objectType;
    animalCard.append(animalType);

    const animalName = document.createElement("p");
    animalName.setAttribute("class", "animalName  output");
    animalName.innerText = "Named:  " + objectName;
    animalCard.append(animalName);

    const animalAge = document.createElement("p");
    animalAge.setAttribute("class", "animalAge  output");
    animalAge.innerText = objectAge + "   years old.";
    animalCard.append(animalAge);

    const animalLegs = document.createElement("p");
    animalLegs.setAttribute("class", "animalLegs  output");
    animalLegs.innerText = objectLegs + "   legs.";
    animalCard.append(animalLegs);

    const animalFeature = document.createElement("p");
    animalFeature.setAttribute("class", "animalFeature  output");
    animalFeature.innerText = objectFeature;
    animalCard.append(animalFeature);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("class", "deleteButton");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener('click', () => {
        deleteButton.parentElement.remove();
    });
    animalCard.append(deleteButton);
}