function carregar() {
    var msg = document.querySelector("p#msg");
    var data = new Date();
    var img = document.querySelector("img");

    document.querySelector("span#horas").innerHTML = data.getHours();

    if (data.getHours() >= 6 && data.getHours() <= 12) {
        msg.innerHTML = "Bom Dia";
    } else if (data.getHours() <= 18) {
        msg.innerHTML = "Boa Tarde"
        img.src = "img/tarde.jpeg";
    } else if (data.getHours() <= 11) {
        msg.innerHTML = "Boa Noite"
        img.src = "img/noite.jpeg";
    } else {
        msg.innerHTML = "Boa Madrugada"
        img.src = "img/madrugada.jepg";
    }
}