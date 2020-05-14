body.addEventListener('load', amigavel())

function exibe() {
    //pega o id
    var campo = document.getElementById("amostragem");

    //recebe do localStorage a operação
    var op = localStorage.getItem('operacao');

    //separa os dois valores
    v1 = parseInt(Math.random() * 100);
    v2 = parseInt(Math.random() * 100);

    //dependendo da operação, a var resultado possui valor diferente
    switch (op) {
        case 'soma':
            mostrar = v1 + ' + ' + v2;
            resultado = v1 + v2;
            break;

        case 'subtracao':
            if (v1 > v2) {
                mostrar = v1 + ' - ' + v2;
                resultado = v1 - v2;
            }else{
                mostrar = v2 + ' - ' + v1;
                resultado = v2 - v1;
            }
            break;

        case 'divisao':
            v1 = parseInt(Math.random() * 100);
            v2 = parseInt(Math.random() * 10);
            mostrar = v1 + ' / ' + v2;
            if(v2 != 0){
                resultado = parseFloat((v1 / v2).toFixed(2));
            }else{
                resultado = 0;
            }
            break;

        case 'multiplicacao':
            v1 = parseInt(Math.random() * 100);
            v2 = parseInt(Math.random() * 10);
            mostrar = v1 + ' X ' + v2;
            resultado = v1 * v2
            break;
        
        case 'porcentagem':
            v1 = parseInt(Math.random() * 10);
            v2 = parseInt(Math.random() * 100);
            mostrar = v1 + '% de ' + v2;
            resultado = parseFloat(((v2/100)*v1).toFixed(2))
            break;

        default:
            mostrar = "Algo esta errado";
            break;
    }


    //mostra a conta
    campo.innerHTML = mostrar
    //retorna o resultado
    localStorage.setItem('resultado', resultado)
}

function opera() {
    //guarda o que o usuario digitou
    var digitado = document.getElementById("resposta");
    //pega o id do campo onde aparece a resposta
    var final = document.getElementById("finalmente");
    //guarda o resultado calculado ao exibir a conta
    var resultado = localStorage.getItem('resultado')

    //verifica o resultado
    if (resultado == digitado.value) {
        final.innerHTML = "Voce acertou!!!";
    } else {
        final.innerHTML = "Voce errou... o resultado era: " + resultado;
    }
}

function proximo() {
    exibe();
    var final = document.getElementById("finalmente");
    var digitado = document.getElementById("resposta");
    digitado.value = '';
    final.innerHTML = "Digite a resposta...";

}
