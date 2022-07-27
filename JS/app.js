"use strict"

let cars = [];

let carModel = document.getElementById('model');
let carColor = document.getElementById('color');
let carYear = document.getElementById('year');

let getValue = ()=>{
let modelVal= carModel.value;
let colorlVal= carColor.value;
let yearVal= carYear.value;


let newCar = {
    model:modelVal,
    color:colorlVal,
    year:yearVal,
};

cars.push(newCar);

carModel.value = "";
carColor.value = "";
carYear.value = "";
}


let minYear = document.getElementById('min-year');
let userDisplay = document.getElementById('display');

let displayCars = ()=>{
let selectedCars = cars.filter((car)=> car.year>= minYear.value);

selectedCars.map((item)=>{

    userDisplay.innerHTML += `
    <div>Model: ${item.model}</div>
    <div>Color: ${item.color}</div>
    <div>Year: ${item.year}</div>
    `
});
};
