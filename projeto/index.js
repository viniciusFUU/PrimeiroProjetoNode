const prompt = require('prompt-sync')();

console.log("Está é a história do herói Giovanni. Ele tem 21 anos, namora e acabou de arrumar um emprego.");
console.log("Sua namorada mora no estado do Pará e ele mora em Jacareí, que fica no estado de São Paulo.");
console.log("O sonho do nosso herói era arrumar um emprego para que pudesse se mudar para próximo de sua donzela, pois a amava muito e estava morrendo de saudade por toda esta distância.");
console.log("Ao realizar seu sonho, nosso guerreiro se mudou para perto de seu amor e comprou um terreno no meio da mata para morar. Mas ele não estava esperando as surpresas que viriam.");
console.log("Giovanni começa a construir sua casa e ao cavar em uma parte do seu lote ele acha ruínas de uma civilização antiga que por ali viveu há muitos anos atrás. ");
console.log("Após investigar por toda ruína ele encontrou um tesouro e viveu feliz para sempre com o amor de sua vida.");

console.log("");

console.log("Leia toda a história e depois faça o que for solicitado.");

const pergunta1 = ("Ele conseguiu um emprego? ");
const pergunta2 = ("Nosso herói realizou seu sonho? ");
const pergunta3 = ("ele encontrou ruinas? ")
const pergunta4 = ("Giovanni encontrou o tesouro?")
const pergunta5 = ("Nossos personagens viveram felizes para sempre?")

console.log("Anote quantas respostas são verdadeiras e depois selecione a alternativa correspondente: ");

console.log(`1 - ${pergunta1}
2 - ${pergunta2}
3 - ${pergunta3}
4 - ${pergunta4}
5 - ${pergunta5}
         `)

const respostas = +prompt("Quantas respostas são sim (em números)? ")

if (respostas === 1) {
    console.log("Ele foi 20% feliz.");
} else if (respostas === 2) {
    console.log("Ele foi 40% feliz.");
} else if (respostas === 3) {
    console.log("Ele foi 60% feliz.");
} else if (respostas === 4) {
    console.log("Ele foi 80% feliz.");
} else {
    console.log("Ele foi 100% feliz.");
}