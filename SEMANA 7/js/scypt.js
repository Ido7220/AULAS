function lerNumero1() {
    return parseFloat(document.getElementById('entrada1').value) || 0;
}

function lerNumero2() {
    return parseFloat(document.getElementById('entrada2').value) || 0;
}

function somar() {
    let resultado = lerNumero1() + lerNumero2();
    document.getElementById('resultado').textContent = resultado;
}

function dividir() {
    let num2 = lerNumero2();
    if (num2 === 0) {
        document.getElementById('resultado').innerText = "Divisão por zero";
    } else {
        let resultado = lerNumero1() / num2;
        document.getElementById('resultado').innerText = resultado;
    }
}