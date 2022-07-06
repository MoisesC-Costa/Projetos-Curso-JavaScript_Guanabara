var inputField = document.getElementById("numero");
var historicoField = document.getElementById("historico");
var res = document.getElementById("res");
let historico = [];

function adicionar() {
    let number = Number(inputField.value);
    inputField.value = null;

    if (number == 0) {
        alert("Digite um valor valido");
    } else if (number < 1 || number > 100) {
        alert("Digite um valor entre 1 e 100");
    } else if (historico.indexOf(number) != -1){
        alert("Valor já cadastrado");
    } else {
        historico.push(number);
        let element = document.createElement("option");
        element.text = `Valor ${number} adicionado`
        historicoField.appendChild(element);
    }
}

function analisar() {
    let quantidadeCadastrada = historico.length
    let maior = historico.sort()[quantidadeCadastrada -1]
    let menor = historico[0]
    let soma = somarArray();

    res.innerHTML += `<p>Ao todo, temos ${quantidadeCadastrada} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${soma/quantidadeCadastrada}</p>`

}

function somarArray() {
    let total = 0

    for (let number in historico) {
        total += Number(number);
    }

    return total;
}