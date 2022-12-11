var ul = document.getElementById("ul")
var inp = document.getElementById("inp")

function display() {
    if (inp.value == "") {
        alert(" enter your value")
    } else {
        var li = document.createElement("li")
        var liTxt = document.createTextNode(inp.value)
        li.appendChild(liTxt)

        var edit = document.createElement("button")
        var edittxt = document.createTextNode("EDIT");
        edit.setAttribute("class", "edit")
        edit.setAttribute("onclick", "editBtn(this)")
        edit.appendChild(edittxt)
        li.appendChild(edit)
        var btn = document.createElement("button");
        var txt = document.createTextNode("DELETE");
        btn.setAttribute("class", "delete1")
        btn.setAttribute("onclick", "delBtn(this)")
        btn.appendChild(txt);
        li.appendChild(btn)
        ul.appendChild(li)
        inp.value = ""
    }
}

function editBtn(e) {
    var newInput = prompt("enter edit value")
    e.parentNode.firstChild.nodeValue = newInput
}

function delBtn(d) {
    d.parentNode.remove();
}

function del() {
    ul.innerHTML = ""
}

