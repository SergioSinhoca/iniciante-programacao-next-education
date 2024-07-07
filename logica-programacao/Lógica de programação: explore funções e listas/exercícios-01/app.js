function exibirTexto (tag, texto){
    let campoHtml = document.querySelector(tag);
    campoHtml.innerHTML = texto;
}

exibirTexto('h1', 'JavaScript');
exibirTexto('h2', 'Exercicios');
exibirTexto('p','Funções')

/**
 * Criar uma função que exibe "Olá, mundo!" no console.
 */

function saudacao(){
    return "Olá, mundo!";
}

console.log(saudacao());

/**
 * Criar uma função que recebe um nome como parâmetro e exibe 
 * "Olá, [nome]!" no console.
 */

function receberNome(nome){
    console.log(`Olá, ${nome}!`);
}

receberNome('Sergio Luiz Sinhoca');

/**
 * Criar uma função que recebe um número como 
 * parâmetro e retorna o dobro desse número.
 */

function dobroDoNumero(numero){
    let dobro = numero * 2;
    console.log(`O dobro do número ${numero} é ${dobro}`);
}

dobroDoNumero(15);

/**
 * Criar uma função que recebe três números como parâmetros 
 * e retorna a média deles.
 */

function mediaDosNumeros(num1, num2, num3){
    let media = (num1 + num2 + num3) / 3;
    console.log(`A média dos números ${num1}, ${num2}, ${num3} é ${Math.trunc(media)}.`);
}

mediaDosNumeros(10, 20, 50);

/**
 * Criar uma função que recebe dois números como 
 * parâmetros e retorna o maior deles.
 */

function comparaMaiorNumero(num1, num2){
    if (num1 > num2){
        console.log(`O número ${num1} é maior que ${num2}.`)
    }else {
        console.log(`O número ${num2} é maior que ${num1}.`)
    } 
}

comparaMaiorNumero(1,2);

/**
 * Criar uma função que recebe um número como parâmetro e 
 * retorna o resultado da multiplicação desse número por ele mesmo
 */

function multiplicaNumeroPorSiMesmo(numero){
    return  numero * numero;
}

console.log(`Resultado: ${multiplicaNumeroPorSiMesmo(20)}`);