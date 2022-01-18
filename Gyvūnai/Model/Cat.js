"use strict";

import Animal from "./Animal.js";

export default class Cat extends Animal{
    constructor(type, name, age, legs, fur){
        super(type, name, age, legs);
        this.fur = fur;
    }
}