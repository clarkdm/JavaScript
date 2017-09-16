let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
var kings = ""


function Get_kings() {

    var xmlhttp,
        xmlDoc,
        response;

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", requestURL);
    xmlhttp.responseType = 'json'
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            response = xmlhttp.response;
            kings = response
        }
    }
};
function search_() {
    let str = ""
    let search_for = document.getElementById("search").value;
    kings.forEach(function (King) {
        let x = JSON.stringify(King).includes(search_for)
        if (x) {
            str += `<tr id =\"${King['nm']}\"><td> ${King['nm']} </td><td> ${King['cty']} </td><td> ${King['hse']} </td><td> ${King['yrs']}</td></tr>`

        }
    });
    let tbody_members = document.getElementById("listMembers");
    tbody_members.innerHTML = str
    

}

Get_kings()