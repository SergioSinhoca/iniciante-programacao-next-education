// Selecionando os textareas do HTML
const textoEntrada = document.getElementById('texto_entrada');
const textoSaida = document.getElementById('texto_saida');
const btnCopiar = document.getElementById('button_copiar');
const mensagemNenhuma = document.getElementById('mensagem_nenhuma');
const mensagemInstrucoes = document.getElementById('mensagem_instrucoes');
const divisaoConteudo = document.getElementById('divisao_conteudo');

// Regras de criptografia
const chaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

// Verificando o conteúdo da textarea de saída
function verificaTexto() {
    if (textoSaida.value.trim() === "") {
        textoSaida.classList.add('empty'); // Mostrar a imagem
        btnCopiar.style.display = "none"; // Esconder o botão Copiar
        mensagemNenhuma.style.display = "block"; // Mostrar a mensagem de "Nenhuma mensagem encontrada"
        mensagemInstrucoes.style.display = "block"; // Mostrar a mensagem de instruções
    } else {
        textoSaida.classList.remove('empty'); // Esconder a imagem
        btnCopiar.style.display = "block"; // Mostrar o botão Copiar
        mensagemNenhuma.style.display = "none"; // Esconder a mensagem de "Nenhuma mensagem encontrada"
        mensagemInstrucoes.style.display = "none"; // Esconder a mensagem de instruções
    }
}

textoSaida.addEventListener('input', verificaTexto);
window.addEventListener('load', verificaTexto);

// Função para criptografar o texto
function buttonCriptografar() {
    const textoEncriptado = fazendoEncriptacao(textoEntrada.value);
    textoSaida.value = textoEncriptado;
    verificaTexto();
    
    const quadroMensagem = document.querySelector('.estilo__quadro__mensagem__encriptografada');
    if (textoEncriptado.trim() !== "") {
        quadroMensagem.classList.add('visible');
    }else {
        quadroMensagem.classList.remove('visible');
}
}




function fazendoEncriptacao(texto) {
    texto = texto.toLowerCase();
    for (let i = 0; i < chaves.length; i++) {
        texto = texto.replaceAll(chaves[i][0], chaves[i][1]);
    }
    return texto;
}

// Função para descriptografar o texto
function buttonDescriptografar() {
    const textoDescriptografado = fazendoDescriptacao(textoEntrada.value);
    textoSaida.value = textoDescriptografado;
    verificaTexto();
}

function fazendoDescriptacao(texto) {
    texto = texto.toLowerCase();
    for (let i = 0; i < chaves.length; i++) {
        texto = texto.replaceAll(chaves[i][1], chaves[i][0]);
    }
    return texto;
}

// Função para copiar o texto criptografado/descriptografado
function copiarTexto() {
    textoSaida.select();
    document.execCommand('copy');
}

// Adicionar eventos aos botões
document.querySelector('.button__criptografar').addEventListener('click', buttonCriptografar);
document.querySelector('.button__descriptografar').addEventListener('click', buttonDescriptografar);
btnCopiar.addEventListener('click', copiarTexto);

// Verificação inicial ao carregar a página
window.addEventListener('load', verificaTexto);
