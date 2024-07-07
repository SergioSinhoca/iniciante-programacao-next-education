function exibirTexto (tag, texto){
    let campoHtml = document.querySelector(tag);
    campoHtml.innerHTML = texto;
}

exibirTexto('h1', 'JavaScript');
exibirTexto('h2', 'Exercicios');
exibirTexto('p','Funções segunda parte')

/**
 * Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
 * a partir de sua altura, em metros, e peso, em quilogramas, 
 * que serão recebidos como parâmetro.
 */

function massaImc(altura, peso){
    let imc = peso / (altura * altura);

    console.log(`Sua altura é de ${altura}(m), seu peso é ${peso}(kg), logo seu IMC equivale ${imc.toFixed(2)}`);

}

massaImc(1.76, 50)

/**
 * Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
 */

function fatorialDoNumero(numero){
    let resultadoNeutro = 1
    let contador = 1;

    while(contador <= numero){
        resultadoNeutro *= contador;
        contador++
    }
    
    let mensagem = `O fatorial do número ${numero} é ${resultadoNeutro}`;
    return mensagem;
}


console.log(fatorialDoNumero(5));

/**
 * Crie uma função que converte um valor em dólar, passado como parâmetro, 
 * e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$5,43.
 */

function conversorMoeda(dolar){
    let cotacao = 5.43;
    let conversao = dolar * cotacao;

    return `A conversão de $${dolar.toFixed(2)} será R$${conversao.toFixed(2)}`;
}



console.log(conversorMoeda(100));

/**
 * Crie uma função que mostre na tela a área e o 
 * perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
 */

function mostrarAreaPerimetro(altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    return `A área da sala é ${area} metros quadrados e o perímetro é ${perimetro} metros.`;
}

console.log(mostrarAreaPerimetro(5, 10));

/**
 * Crie uma função que mostre na tela a área e o perímetro de 
 * uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
 */

function mostrarAreaPerimetroSalaCircular(raio){
    const pi = 3.14;
    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;

    return `A área da sala circular é ${area} metros quadrados e o perímetro é ${perimetro.toFixed(2)} metros.`;

}

console.log(mostrarAreaPerimetroSalaCircular(5));

/**
 * Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
 */

function tabuada(numero){
    let contador = 1;

    while(contador <= 10){
        let resultado = numero * contador; 

        console.log(`${numero} X ${contador} = ${resultado}`);

        contador++;
    }
}

tabuada(4);