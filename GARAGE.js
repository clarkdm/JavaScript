
let cars = new Map();



// let myFather = new Person("John", "Doe", 50, "blue");


function Check_in_car() {
    let listCars_table = document.getElementById("listCars");
    let reg = document.getElementById("reg");
    let make = document.getElementById("make");
    let name = document.getElementById("name");
    let Broken_parts = document.getElementById("Broken_parts");

    cars.set(reg.value, { reg: reg.value, make: make.value, name: name.value, Broken_parts: Broken_parts.value, bill: 25 })
    listCars()
}

function Check_out_car() {
    let listCars_table = document.getElementById("listCars");
    let reg = document.getElementById("reg2").value;
    cars.delete(reg);
    listCars()
}

function listCars() {
    let listCars_table = document.getElementById("listCars");
    listCars_table.innerHTML = ""

    cars.forEach(function (value, key) {
        (car_tr(listCars_table, value))
    });
}

function car_tr(listCars_table, car) {
    listCars_table.innerHTML += `<tr id =\"${car.reg}\"><td> ${car.reg} </td><td> ${car.make} </td><td> ${car.name} </td><td> ${car.Broken_parts}</td><td>${car.bill} </td><td><a onclick='fix("${car.reg}")'>FIX</a></td></tr>`
}

function fix(reg) {
    console.log(reg + cars.get(reg).bill);
    let car = cars.get(reg);

    car.bill += (car.Broken_parts * 33)
    car.Broken_parts = 0
    cars.set(reg,car)
    listCars()
}

