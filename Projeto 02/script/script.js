var img = document.createElement("img");
var formSex = document.getElementsByName("radioSex");
var res = document.querySelector("div#res");


function verificarIdade() {
    var formAno = Number(document.querySelector("input#ano").value);
    var ano = new Date().getFullYear();

    if (formAno > 0 && formAno < ano) {
        var idade = ano - formAno;

        if (formSex[0].checked) {
            var sex = "Masculino";
        } else {
            var sex = "Feminino";
        }


        if (idade < 13) {
            res.innerHTML = `<p>Foi identificado uma criança do sexo ${sex} de ${idade} anos</p>`;
            img.src = `img/crianca-${sex}.jpg`
        } else if (idade < 21) {
            res.innerHTML = `<p>Foi identificado um jovem do sexo ${sex} de ${idade} anos</p>`;
            img.src = `img/jovem-${sex}.jpg`
        } else if (idade < 60) {
            res.innerHTML = `<p>Foi identificado um adulto do sexo ${sex} de ${idade} anos</p>`;
            img.src = `img/adulto-${sex}.jpg`
        } else {
            res.innerHTML = `<p>Foi identificado um idoso do sexo ${sex} de ${idade} anos</p>`;
            img.src = `img/idoso-${sex}.jpg`
        }

        res.appendChild(img);
    } else {
        alert("Dados Digitados Estão Invalidos");
    }
}