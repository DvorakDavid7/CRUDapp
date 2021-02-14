console.log("asdasd");
"use strict";
var data = {
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
};
var table = document.querySelector(".tbody");
var a = table.getElementsByClassName("tr1")[0];
function loopJson() {
    var el = data.data;
    var _loop_1 = function (i) {
        var tableHeading = document.createElement("tr");
        tableHeading.className = "tr-" + (i + 1);
        table.appendChild(tableHeading);
        Object.keys(data.data[i]).forEach(function (key) {
            var identor = "tr-" + (i + 1);
            var tr = document.querySelector(".tr-" + (i + 1));
            var td = document.createElement("td");
            td.innerHTML = data.data[i][key];
            tr.appendChild(td);
        });
        var tr = document.querySelector(".tr-" + (i + 1));
        var editButton = document.createElement("BUTTON");
        var deleteButton = document.createElement("BUTTON");
        editButton.innerHTML = "Edit";
        editButton.classList = "btn btn-primary btn-edit" + (i + 1);
        editButton.id = [i + 1];
        deleteButton.innerHTML = "Delete";
        deleteButton.classList = "btn btn-primary btn-delete";
        deleteButton.id = [i + 1];
        deleteButton.addEventListener("click", deleteItem);
        editButton.addEventListener("click", editItem);
        tr.appendChild(editButton);
        tr.appendChild(deleteButton);
    };
    for (var i = 0; i < Object.keys(el).length; i++) {
        _loop_1(i);
    }
}
function deleteItem() {
    var tr = document.querySelector(".tr-" + this.id);
    tr.outerHTML = "";
    for (var key in data.data) {
        if (data.data[key].id === Number(this.id)) {
            delete data.data[key];
        }
    }
}
function editItem() {
    var handler = "";
    var tr = document.querySelector(".tr-" + this.id);
    for (var i = 1; i < 7; i++) {
        var input = document.createElement("input");
        handler = (tr.childNodes[i].innerHTML);
        input.value = handler;
        tr.childNodes[i].innerHTML = "";
        tr.childNodes[i].appendChild(input);
    }
    document.querySelector(".btn-edit" + this.id).innerHTML = "Save";
    document.querySelector(".btn-edit" + this.id).removeEventListener("click", editItem);
    document.querySelector(".btn-edit" + this.id).addEventListener("click", saveItem);
}
function saveItem() {
    var handler = "";
    var tr = document.querySelector(".tr-" + this.id);
    for (var i = 1; i < 7; i++) {
        handler = (tr.childNodes[i].childNodes[0].value);
        tr.childNodes[i].childNodes[0].remove();
        tr.childNodes[i].innerHTML = handler;
        document.querySelector(".btn-edit" + this.id).innerHTML = "Edit";
        document.querySelector(".btn-edit" + this.id).removeEventListener("click", saveItem);
        document.querySelector(".btn-edit" + this.id).addEventListener("click", editItem);
    }
    var handler2 = 1;
    Object.keys(data.data[0]).forEach(function (key) {
        data.data[0][key] = tr.childNodes[handler2].innerHTML;
        handler2++;
    });
    console.log(data.data[0]);
}
loopJson();
