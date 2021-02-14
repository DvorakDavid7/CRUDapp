// let data = {
//     "data": [
//         {
//             "id": 1,
//             "first": "Jaroslav",
//             "last": "Prochazka",
//             "email": "xxx@xxx.com",
//             "phone": "000 111 222",
//             "location": "vrsovice, praha",
//             "project": "CRUDapp",


//         },
//         {
//             "id": 2,
//             "first": "Kkkt",
//             "last": "Prochazka",
//             "email": "xxx@xxx.com",
//             "phone": "000 111 222",
//             "location": "vrsovice, praha",
//             "project": "CRUDapp",



//         },
//         {
//             "id": 3,
//             "first": "Kkkt",
//             "last": "Prochazka",
//             "email": "xxx@xxx.com",
//             "phone": "000 111 222",
//             "location": "vrsovice, praha",
//             "project": "CRUDapp",


//         }
//     ]
// }

const table: any = document.querySelector(".tbody");
let addNewButton: any = document.querySelector("#submitBtn")
let a = table.getElementsByClassName("tr1")[0];

addNewButton.addEventListener("click", postData)
addNewButton.addEventListener("click", getData)
addNewButton.addEventListener("click", console.log("sdsd"))

async function getData() {
    const response = await fetch("http://13.80.117.237/api/getData")
    let data: any = await response.json();
    function loopJson() {
        let el: any = data.data
        for (let i: any = 0; i < Object.keys(el).length; i++) {
            let tableHeading: any = document.createElement("tr")
            tableHeading.className = "tr-" + (data.data[i]["id"]);
            table.appendChild(tableHeading)
            Object.keys(data.data[i]).forEach(key => {
                let identor = "tr-" + data.data[i]["id"];
                let tr: any = document.querySelector(".tr-" + data.data[i]["id"]);
                let td: any = document.createElement("td");
                td.innerHTML = data.data[i][key]
                tr.appendChild(td)
            })
            let tr: any = document.querySelector(".tr-" + data.data[i]["id"]);
            let editButton: any = document.createElement("BUTTON");
            let deleteButton: any = document.createElement("BUTTON");
            editButton.innerHTML = "Edit"
            editButton.classList = "btn btn-primary btn-edit" + data.data[i]["id"];
            editButton.id = data.data[i]["id"]
            deleteButton.innerHTML = "Delete"
            deleteButton.classList = "btn btn-primary btn-delete"
            deleteButton.id = data.data[i]["id"]
            deleteButton.addEventListener("click", deleteData);
            editButton.addEventListener("click", editItem);
            tr.appendChild(editButton)
            tr.appendChild(deleteButton)
        }
    }
    loopJson()
}

async function deleteData(this: any) {
    let tr: any = document.querySelector(".tr-" + this.id)
    tr.outerHTML = "";

    const body = {
        id: this.id
    };
    const options = {
        method: 'DELETE',
        body: JSON.stringify(body)
    }
    const response = await fetch("http://13.80.117.237/api/deleteRecord", options);
}

async function putData(this: any) {
    let handler = "";
    let tr: any = document.querySelector(".tr-" + this.id)

    for (let i = 1; i < 7; i++) {
        handler = (tr.childNodes[i].childNodes[0].value);
        tr.childNodes[i].childNodes[0].remove()
        tr.childNodes[i].innerHTML = handler
        document.querySelector(".btn-edit" + this.id).innerHTML = "Edit"
        document.querySelector(".btn-edit" + this.id).removeEventListener("click", putData)
        document.querySelector(".btn-edit" + this.id).addEventListener("click", editItem)
    }
    console.log(tr.childNodes)
    const body = {
        id: this.id,
        updatedValue: {
            firstName: tr.childNodes[1].innerHTML,
            lastName: tr.childNodes[2].innerHTML,
            email: tr.childNodes[3].innerHTML,
            phone: tr.childNodes[4].innerHTML,
            location: tr.childNodes[5].innerHTML,
            project: tr.childNodes[6].innerHTML
        }
    };
    const options = {
        method: 'PUT',
        body: JSON.stringify(body)
    }
    const response = await fetch("http://13.80.117.237/api/updateRecord", options);
}


function editItem(this: any) {
    let handler = "";
    let tr: any = document.querySelector(".tr-" + this.id)
    for (let i = 1; i < 7; i++) {
        let input = document.createElement("input")
        handler = (tr.childNodes[i].innerHTML);
        input.value = handler
        tr.childNodes[i].innerHTML = "";
        tr.childNodes[i].appendChild(input)
    }
    document.querySelector(".btn-edit" + this.id).innerHTML = "Save"
    document.querySelector(".btn-edit" + this.id).removeEventListener("click", editItem)
    document.querySelector(".btn-edit" + this.id).addEventListener("click", putData)
}

async function postData() {
    let first: any = document.getElementById("input-first");
    console.log(first)
    let last: any = document.getElementById("input-last");
    let email: any = document.getElementById("input-email");
    let phone: any = document.getElementById("input-phone");
    let location: any = document.getElementById("input-location");
    let project: any = document.getElementById("input-project");
    const body = {
        record: {
            firstName: first.value,
            lastName: last.value,
            email: email.value,
            phone: phone.value,
            location: location.value,
            project: project.value
        }
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(body)
    }
    const response = await fetch("http://13.80.117.237/api/addRecord", options);
}


// loopJson();
getData();