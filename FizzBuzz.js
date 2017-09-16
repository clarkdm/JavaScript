



function fizz(max, divis3, divis5) {
    let str = ""
    for (let index = 1; index <= max; index++) {
        let temp = ""
        if (index % 3 === 0) {
            temp = divis3
        }
        if (index % 5 === 0) {
            temp = temp + divis5
        }
        if (!temp) {
            temp = index
        }
        str = str + temp + "<br/>"
    }

    return str
}

function buzz() {

    let divFizz = document.getElementById("fizzbuzz");
    let max = document.getElementById("max");
    let divis3 = document.getElementById("divis3");
    let divis5 = document.getElementById("divis5");

    divFizz.innerHTML = fizz(max.value, divis3.value, divis5.value)
}


