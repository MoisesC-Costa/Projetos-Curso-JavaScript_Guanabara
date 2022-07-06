var res = document.querySelector("div#res");

function contar() {
    var start = Number(document.querySelector("input#start").value);
    var end = Number(document.querySelector("input#end").value);
    var step = Number(document.querySelector("input#step").value);
    
    if (start > end) {
        res.innerHTML = "<p>O começo não pode ser maior que o final</p>";
    } else if (end > 100000) {
        res.innerHTML = "<p>Cuidado Brother numero muito alto!</p>"
    } else {

        if (step <= 0) {
            alert("Passos invalidos passando o passa para 1");
            step = 1;
        }
    
        var msg = "Contando: ";

        for (var c = start ; c <= end ; c+=step) {
            msg +="👉 " + c;
        }

        res.innerHTML = `<p>${msg}</p>`;
    }
}