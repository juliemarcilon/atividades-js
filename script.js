function lerValoresInteiros(){
    let n1, n2;
    let resultado = document.getElementById("resultado1");

    n1 = Number(window.prompt("Informe um número: "));
    n2 = Number(window.prompt("Informe outro: "));

    if(n1 > n2){
        resultado.innerHTML = (n2 + " é menor que " + n1);
    } else if (n2 > n1){
        resultado.innerHTML = (n1 + " é menor que " + n2);
    } else {
        resultado.innerHTML = ("Os números são iguais");
    }
}   


function pesoIdeal(){
    let sexo, altura, peso;
    let resultado = document.getElementById("resultado2");

    sexo = window.prompt("Informe seu sexo [M/F]: ");
    altura = parseFloat(window.prompt("Informe sua altura (ex: 1.70): "));

    if (sexo == 'M'){
        peso = (72.7 * altura) - 58;
        resultado.innerHTML = ("Seu peso ideal é " + peso.toFixed(2) + "kg.");
    } else if (sexo == 'F'){
        peso = (62.1 * altura) - 44.7;
        resultado.innerHTML = ("Seu peso ideal é " + peso.toFixed(2) + "kg.");
    } else {
        alert("Informações Inválidas");
    }
}

function menorDeTodos(){
    let n1, n2, n3;
    let resultado = document.getElementById("resultado3");

    n1 = Number(window.prompt("Informe o 1º número: "));
    n2 = Number(window.prompt("Informe o 2º número: "));
    n3 = Number(window.prompt("Informe o 3º número: "));

    let menor = Math.min(n1, n2, n3);
    resultado.innerHTML = `O menor número apresentado é o ${menor}.`;
}

function parOuImpar(){
    let num = parseInt(window.prompt("Informe um número: "));
    let resultado = document.getElementById("resultado4");
    
    if (num >= 0){
        if (num % 2 == 0){
            resultado.innerHTML = `O número ${num} é par.`;
        } else {
            resultado.innerHTML = `O número ${num} é ímpar.`;
        }
    } else {
        resultado.innerHTML = `O valor absoluto de ${num} é ${num * -1}`;
    }
}

function divisivelDoisTres(){
    let num = parseInt(window.prompt("Informe um número: "));
    let resultado = document.getElementById("resultado5");

    if ((num % 2 == 0) && (num % 3 == 0)){
        resultado.innerHTML = `O número ${num} é divisível por 2 e por 3.`;
    } else {
        resultado.innerHTML = `O número ${num} não é divisível por 2 e 3.`;
    }
}

function divisivelDoisSete(){
    let num = parseInt(window.prompt("Informe um número: "));
    let resultado = document.getElementById("resultado6");

    if ((num % 2 == 0) && (num % 7 == 0)){
        resultado.innerHTML = `O número ${num} é divisível por 2 e por 7.`;
    } else if (num % 2 == 0){
        resultado.innerHTML = `O número ${num} é divisível por 2, mas não por 7.`;
    } else if (num % 7 == 0){
        resultado.innerHTML = `O número ${num} é divisível por 7, mas não por 2.`;
    } else {
        resultado.innerHTML = `O número ${num} não é divisível por 2 nem por 7.`;
    }
}

function diaDaSemana(){
    let dia = Number(window.prompt("Informe um número entre 1 e 7: "));
    let resultado = document.getElementById("resultado7");

    switch (dia){
        case 1:
            resultado.innerHTML = `O dia ${dia} é Domingo`;
            break;

        case 2:
            resultado.innerHTML = `O dia ${dia} é Segunda-Feira`;
            break;

        case 3:
            resultado.innerHTML = `O dia ${dia} é Terça-Feira`;
            break;

        case 4:
            resultado.innerHTML = `O dia ${dia} é Quarta-Feira`;
            break;

        case 5:
            resultado.innerHTML = `O dia ${dia} é Quinta-Feira`;
            break;

        case 6:
            resultado.innerHTML = `O dia ${dia} é Sexta-Feira`;
            break;

        case 7:
            resultado.innerHTML = `O dia ${dia} é Sábado`;
            break;
    }
}

function somaPares(){
    let resultado = document.getElementById("resultado8");
    let pares = 0;

    for (let num = 0; num < 21; num++){
        if (num % 2 == 0){
            pares += num;
        }
    }

    resultado.innerHTML = `O somatório dos números pares de 1 a 20 é ${pares}`;
 
}

function tabuada(){
    let resultado = document.getElementById("resultado9");
    let num = parseInt(window.prompt("Informe um número: "));
    let tab = '';

    for (let i = 1; i < 11; i++){
        tab += num + " x " + i + " = " + num * i + "<br />";
        resultado.innerHTML = tab;
    }
}

function fatorial(){
    let apresentacao = document.getElementById("resultado10");
    let numeroRecebido = parseInt(window.prompt("Informe um número: "));
    let resultado = numeroRecebido;
    let primeiroMultiplicador = numeroRecebido - 1;

    for (let i = primeiroMultiplicador; i > 1; i--){
        resultado *= i;
    }
    
    apresentacao.innerHTML = resultado;

}

