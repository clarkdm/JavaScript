
var cars = []

function Car(reg_, make_, name_, Broken_parts_) {
    this.reg = reg_;
    this.make = make_;
    this.name = name_;
    this.Broken_parts = Broken_parts_;
}

// var myFather = new Person("John", "Doe", 50, "blue");


function Check_in_car() {
    var listCars_table = document.getElementById("listCars");
    
    var reg = document.getElementById("reg");
    var make = document.getElementById("make");
    var name = document.getElementById("name");
    var Broken_parts = document.getElementById("Broken_parts");

    cars[reg.value] = Car(reg.value, make.value, name.value, Broken_parts.value)

listCars_table.innerHTML += "<tr id =\""+reg.value+"\"><td>" + reg.value + "</td><td>" + make.value + "</td><td>" + name.value + "</td><td>" + Broken_parts.value + "</td></tr>"
}

function Check_out_car() {
    var listCars_table = document.getElementById("listCars");
    
    var reg = document.getElementById("reg2");


    cars[reg.value]

}
    

