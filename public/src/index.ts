let data = {
    "data": [
        {
            "id": 1,
            "first": "Jaroslav",
            "last": "Prochazka",
            "email": "xxx@xxx.com",
            "phone": "000 111 222",
            "location": "vrsovice, praha",
            "project": "CRUDapp",


        },
        {
            "id": 2,
            "first": "Kkkt",
            "last": "Prochazka",
            "email": "xxx@xxx.com",
            "phone": "000 111 222",
            "location": "vrsovice, praha",
            "project": "CRUDapp",



        },
        {
            "id": 3,
            "first": "Kkkt",
            "last": "Prochazka",
            "email": "xxx@xxx.com",
            "phone": "000 111 222",
            "location": "vrsovice, praha",
            "project": "CRUDapp",


        }
    ]
}

const table: any = document.querySelector(".tbody");
let a = table.getElementsByClassName("tr1")[0];



function loopJson() {
    let el: any = data.data
    for (let i: any = 0; i < Object.keys(el).length; i++) {
        let tableHeading: any = document.createElement("tr")
        tableHeading.className = "tr-" + (i + 1);
        table.appendChild(tableHeading)
        Object.keys(data.data[i]).forEach(key => {
            let identor = "tr-" + (i + 1);
            let tr: any = document.querySelector(".tr-" + (i + 1));
            let td: any = document.createElement("td");
            td.innerHTML = data.data[i][key]
            tr.appendChild(td)
        })
        let tr: any = document.querySelector(".tr-" + (i + 1));
        let editButton: any = document.createElement("BUTTON");
        let deleteButton: any = document.createElement("BUTTON");
        editButton.innerHTML = "Edit"
        editButton.classList = "btn btn-primary btn-edit" + (i + 1);
        editButton.id = [i + 1]
        deleteButton.innerHTML = "Delete"
        deleteButton.classList = "btn btn-primary btn-delete"
        deleteButton.id = [i + 1]
        deleteButton.addEventListener("click", deleteItem);
        editButton.addEventListener("click", editItem);
        tr.appendChild(editButton)
        tr.appendChild(deleteButton)
    }
}

function deleteItem(this: any) {
    let tr: any = document.querySelector(".tr-" + this.id)
    tr.outerHTML = "";
    for (let key in data.data) {
        if (data.data[key].id === Number(this.id)) {
            delete data.data[key];
        }
    }
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
    document.querySelector(".btn-edit" + this.id).addEventListener("click", saveItem)
}

function saveItem(this: any) {
    let handler = "";
    let tr: any = document.querySelector(".tr-" + this.id)
    for (let i = 1; i < 7; i++) {
        handler = (tr.childNodes[i].childNodes[0].value);
        tr.childNodes[i].childNodes[0].remove()
        tr.childNodes[i].innerHTML = handler
        document.querySelector(".btn-edit" + this.id).innerHTML = "Edit"
        document.querySelector(".btn-edit" + this.id).removeEventListener("click", saveItem)
        document.querySelector(".btn-edit" + this.id).addEventListener("click", editItem)
    }
    let handler2 = 1;
    Object.keys(data.data[0]).forEach(key => {
        data.data[0][key] = tr.childNodes[handler2].innerHTML;
        handler2++
    })
    console.log(data.data[0])
}


loopJson();