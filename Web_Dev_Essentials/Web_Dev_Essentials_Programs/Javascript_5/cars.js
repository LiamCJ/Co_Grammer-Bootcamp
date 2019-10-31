// function that creates new objects from the constructor the properties of make, model, image, colour, regNum, price, dlog, imgL & info 
function newCar(make, model, image, colour, regNum, price, dlog, imgL, info) {
    this.make = make;
    this.model = model;
    this.imgsrc = image;
    this.colour = colour;
    this.regNum = regNum;
    this.price = price;
    this.imgL = imgL;
    this.info = info;
    this.dlog = dlog;
    this.showMore = function() {
        document.getElementById(dlog).show();
    };
};
//[lines 16-21] are the objects that are created
var Concept = new newCar("Ford-Mustang", "Concept", "Mustangs/M1964.jpg", "White", "CA55QWE", "R5,000,000", "D1", "I1", "dts1");
var Hardtop = new newCar("Ford-Mustang", "Hardtop", "Mustangs/M1968.jpg", "Black w/ Silver Stripe", "CA51RTY", "R3,000,000", "D2", "I2", "dts2");
var Milano = new newCar("Ford-Mustang", "Milano", "Mustangs/M1969Milano.jpg", "Dark Chrome Purple", "CA50UIO", "R1,500,000", "D3", "I3", "dts3");
var Shelby = new newCar("Ford-Mustang", "Shelby GT-500", "Mustangs/M1969ShelbyGT500.jpg", "Blue w/ White Stripe", "CA50ASD", "R1,300,000", "D4", "I4", "dts4");
var Mach = new newCar("Ford-Mustang", "Mach 1", "Mustangs/M1969Mach1.jpg", "Chrome Black", "CA50FGH", "R1,200,000", "D5", "I5", "dts5");
var Boss = new newCar("Ford-Mustang", "Boss", "Mustangs/M1970Boss.jpg", "Chrome Black", "CA49LKJ", "R1,000,000", "D6", "I6", "dts6");

let mustang = [Concept, Hardtop, Milano, Shelby, Mach, Boss]; //the list of the objects so that the function [car()] can display the properties 
// the function that displays the objects properties to the HTML file 
function Car() {
    mustang.forEach(function(cars) {

        //[lines 28-30] are variables to store the elements where the object's properties are displayed
        let imgL = document.getElementById(cars.imgL);
        let info = document.getElementById(cars.info);
        let dlog = document.getElementById(cars.dlog);

        //[lines 32-34]create a new image, assign it a source from the objects properties and a alt 
        let carImg = document.createElement("img");
        carImg.src = cars.imgsrc;
        carImg.alt = cars.make + cars.model;

        //[lines 35-36] displays the image, make and model of the car in the html
        imgL.appendChild(carImg);
        info.innerHTML = "Make: " + cars.make + "<br> Model: " + cars.model;
        //adds text to the dialog
        dlog.innerHTML = "Colour: " + cars.colour + "<br> Registration Number: " + cars.regNum + "<br> Price: " + cars.price

        //puts the [onclick] event in the image tag so that when its clicked on the [showMore()] function is called 
        imgL.addEventListener("click", function() { cars.showMore(); });
    });
};