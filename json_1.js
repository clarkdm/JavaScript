let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
// let request = new XMLHttpRequest();



// function Get_json_() {
//     return new Promise(
//         function (resolve, reject) {
//             request.open("GET", requestURL);
//             request.responseType = "json"
//             request.send();
//             request.onload = resolve(request.response);
//         }
//     );
// };



// var run = function () {
//     Get_json_().then(function (data) {
//         let div = document.getElementById("json_");
//         div.innerHTML = data
//         console.log(requestData)
//     });
// };


// run();


function Get_File() {

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
            let tbody_members = document.getElementById("listMembers");
            let str = ""
            response['members'].forEach(function (element) {
                let str_2 = ""
                element['powers'].forEach(function (power) {
                    if (str_2) {
                        str_2 += "<br/>" + power;
                    } else {
                        str_2 += power;
                    };

                });

                str += `<tr id =\"${element['name']}\"><td> ${element['name']} </td><td> ${element['age']} </td><td> ${element['secretIdentity']} </td><td> ${str_2}</td></tr>`
                
               
            });
            console.log(response)
            tbody_members.innerHTML = str
        }

    }

};

Get_File()