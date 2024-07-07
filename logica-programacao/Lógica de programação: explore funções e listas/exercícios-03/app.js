function exibirTexto (tag, texto){
    let campoHtml = document.querySelector(tag);
    campoHtml.innerHTML = texto;
}

exibirTexto('h1', 'JavaScript');
exibirTexto('h2', 'Exercicios');
exibirTexto('p','Arrays')

/**
 * Crie uma lista vazia, com o nome listaGenerica.
 */

let listaGenerica = [];

/**
 * Crie uma lista de linguagens de programação chamada linguagensDeProgramacao 
 * com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
 */

let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

/**
 * Adicione à lista linguagensDeProgramacao os seguintes
 * elementos: 'Java', 'Ruby' e 'GoLang'.
 */

linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');

/**
 * Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
 */

let nomes = ['Bernardo', 'Frederico', 'Jessica'];

console.log(nomes[0]);

/**
 * Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
 */

console.log(nomes[1]);

/**
 * Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
 */

console.log(nomes[2]);