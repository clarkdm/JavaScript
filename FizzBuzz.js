



function fizz(max, divis3, divis5) {
    var str = ""
    for (var index = 1; index <= max; index++) {
        var temp = ""
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

    var divFizz = document.getElementById("fizzbuzz");
    var max = document.getElementById("max");
    var divis3 = document.getElementById("divis3");
    var divis5 = document.getElementById("divis5");

    divFizz.innerHTML = fizz(max.value, divis3.value, divis5.value)
}


