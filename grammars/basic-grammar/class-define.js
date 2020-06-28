"use strict";
class Car {
    // define data member with different visibility.
    // _ and # also used for method
    publicField = "public"
    _protectedField = "protected"
    #privateField = "private"

    constructor(name) {
        this.name = name;
    }

    static getClassName() {
        return "Car";
    }

    // define method in class without keyword function
    getName() {
        return this.name;
    }
}

let car = new Car("Audi");
// call method via object
console.log(car.getName());

// call static method
console.log(Car.getClassName());

class Audi extends Car {
    constructor(name, model) {
        super(name);
        this.model = model;
    }


}

