alert("boas vindas ao jogo número secreto");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let escolhendoNumero;
let tentativa = 1;

while(escolhendoNumero != numeroSecreto){

    escolhendoNumero = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);

    if(numeroSecreto == escolhendoNumero) {
        break;
    } else if (numeroSecreto > escolhendoNumero){
        alert(`O número secreto é maior que ${escolhendoNumero}`);
    } else {
        alert(`O número secreto é menor que ${escolhendoNumero}`);
    }

    tentativa++;
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Parabens !! você acertou o número secreto ${numeroSecreto}.\n Tentativas até acertar: ${tentativa} ${palavraTentativa}.`);


//if(tentativa > 1){
//    alert(`Parabens !! você acertou o número secreto ${numeroSecreto}.\n Tentativas até acertar: ${tentativa} tentativas.`);
//} else {
//    alert(`Parabens !! você acertou o número secreto ${numeroSecreto}.\n Tentativas até acertar: ${tentativa} tentativa.`);

//}




