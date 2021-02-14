"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var table = document.querySelector(".tbody");
var addNewButton = document.querySelector("#submitBtn");
var a = table.getElementsByClassName("tr1")[0];
addNewButton.addEventListener("click", postData);
addNewButton.addEventListener("click", getData);
addNewButton.addEventListener("click", console.log("sdsd"));
function getData() {
    return __awaiter(this, void 0, void 0, function () {
        function loopJson() {
            var el = data.data;
            var _loop_1 = function (i) {
                var tableHeading = document.createElement("tr");
                tableHeading.className = "tr-" + (data.data[i]["id"]);
                table.appendChild(tableHeading);
                Object.keys(data.data[i]).forEach(function (key) {
                    var identor = "tr-" + data.data[i]["id"];
                    var tr = document.querySelector(".tr-" + data.data[i]["id"]);
                    var td = document.createElement("td");
                    td.innerHTML = data.data[i][key];
                    tr.appendChild(td);
                });
                var tr = document.querySelector(".tr-" + data.data[i]["id"]);
                var editButton = document.createElement("BUTTON");
                var deleteButton = document.createElement("BUTTON");
                editButton.innerHTML = "Edit";
                editButton.classList = "btn btn-primary btn-edit" + data.data[i]["id"];
                editButton.id = data.data[i]["id"];
                deleteButton.innerHTML = "Delete";
                deleteButton.classList = "btn btn-primary btn-delete";
                deleteButton.id = data.data[i]["id"];
                deleteButton.addEventListener("click", deleteData);
                editButton.addEventListener("click", editItem);
                tr.appendChild(editButton);
                tr.appendChild(deleteButton);
            };
            for (var i = 0; i < Object.keys(el).length; i++) {
                _loop_1(i);
            }
        }
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://13.80.117.237/api/getData")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    loopJson();
                    return [2 /*return*/];
            }
        });
    });
}
function deleteData() {
    return __awaiter(this, void 0, void 0, function () {
        var tr, body, options, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tr = document.querySelector(".tr-" + this.id);
                    tr.outerHTML = "";
                    body = {
                        id: this.id
                    };
                    options = {
                        method: 'DELETE',
                        body: JSON.stringify(body)
                    };
                    return [4 /*yield*/, fetch("http://13.80.117.237/api/deleteRecord", options)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function putData() {
    return __awaiter(this, void 0, void 0, function () {
        var handler, tr, i, body, options, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    handler = "";
                    tr = document.querySelector(".tr-" + this.id);
                    for (i = 1; i < 7; i++) {
                        handler = (tr.childNodes[i].childNodes[0].value);
                        tr.childNodes[i].childNodes[0].remove();
                        tr.childNodes[i].innerHTML = handler;
                        document.querySelector(".btn-edit" + this.id).innerHTML = "Edit";
                        document.querySelector(".btn-edit" + this.id).removeEventListener("click", putData);
                        document.querySelector(".btn-edit" + this.id).addEventListener("click", editItem);
                    }
                    console.log(tr.childNodes);
                    body = {
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
                    options = {
                        method: 'PUT',
                        body: JSON.stringify(body)
                    };
                    return [4 /*yield*/, fetch("http://13.80.117.237/api/updateRecord", options)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
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
    document.querySelector(".btn-edit" + this.id).addEventListener("click", putData);
}
function postData() {
    return __awaiter(this, void 0, void 0, function () {
        var first, last, email, phone, location, project, body, options, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    first = document.getElementById("input-first");
                    console.log(first);
                    last = document.getElementById("input-last");
                    email = document.getElementById("input-email");
                    phone = document.getElementById("input-phone");
                    location = document.getElementById("input-location");
                    project = document.getElementById("input-project");
                    body = {
                        record: {
                            firstName: first.value,
                            lastName: last.value,
                            email: email.value,
                            phone: phone.value,
                            location: location.value,
                            project: project.value
                        }
                    };
                    options = {
                        method: 'POST',
                        body: JSON.stringify(body)
                    };
                    table.innerHTML = "";
                    return [4 /*yield*/, fetch("http://13.80.117.237/api/addRecord", options)];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// loopJson();
getData();
