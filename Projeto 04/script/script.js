var tabuada = document.getElementById("list-tabuada");
var msgDefault = document.getElementById("default");

function calcular() {
    var n1 = Number(document.querySelector("input#number").value);
    
if (n1 === 0) {
    alert("valor invalido!");
} else {

    tabuada.innerHTML = null;
    for (var c = 1 ; c < 101 ; c++) {
        var element = document.createElement("option");
        element.setAttribute("name", `op${c}`);
        element.text = `${n1} X ${c} = ${n1 * c}`;
        tabuada.appendChild(element);
    }
}
}