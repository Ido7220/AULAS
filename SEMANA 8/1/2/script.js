const botao = document.
getElementById('meuBotao');

const resposta = document.
getElementById('resposta');

const evento = document.getElementById('evento');
//colocar um método para ouvir uma ação
 botao.addEventListener('click',
    imprimir
 );

 botao.addEventListener('mouseover',
    function(){
        evento.innerHTML = 
        `<h1>Você foi invadido</h1>`
    }
 )

 botao.addEventListener('mouseout',
    function() {
        resposta.innerText = "Sai daqui, não volta."
    }
 )

 //o que eu passo como parametro
//function de função
 function imprimir(){
    resposta.innerText = "Você clicou em mim.";
 }