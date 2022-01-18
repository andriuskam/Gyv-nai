"use strict";

import Animal from "./Animal.js";

export default class Fish extends Animal{
    constructor(type, name, age, legs, fins){
        super(type, name, age, legs);
        this.fins = fins;
    }
}