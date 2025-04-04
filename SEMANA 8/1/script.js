function expressao(parametro){
    console.log(parametro);
    //cada botão vai ter um valor fixado

    //document.getElementById
    //('display-calculadora').value += parametro;
    //CONTATENAR: UNIR/JUNTAR

    let valor = document.getElementById
    ('display-calculadora').value;
    valor = valor + parametro;
    document.getElementById
    ('display-calculadora').value = valor
    
}

function calcular(){
    //eval()
    try{
        let resultado = eval(document.getElementById('display-calculadora').value);
        document.getElementById
        ('display-calculadora').value = resultado;
    }
    catch(error){
        document.getElementById
        ('display-calculadora').value = "Expressão incorreta";
    }
}

function limpar(){
    document.getElementById
    ('display-calculadora').value = "";
}