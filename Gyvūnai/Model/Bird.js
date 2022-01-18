"use strict";

import Animal from "./Animal.js";

export default class Bird extends Animal{
    constructor(type, name, age, legs, beak){
        super(type, name, age, legs);
        this.beak = beak;
    }
}