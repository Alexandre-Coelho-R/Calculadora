// Botões

const btSete = document.getElementById("sete");
const btOito = document.getElementById("oito");
const btNove = document.getElementById("nove");
const btDivisao = document.getElementById("divisao");

const btQuatro = document.getElementById("quatro");
const btCinco = document.getElementById("cinco");
const btSeis = document.getElementById("seis");
const btMultiplicacao = document.getElementById("multiplicacao");

const btUm = document.getElementById("um");
const btDois = document.getElementById("dois");
const btTres = document.getElementById("tres");
const btSubtracao = document.getElementById("subtracao");

const btZero = document.getElementById("zero");
const btPonto = document.getElementById("ponto");
const btIgual = document.getElementById("igual");
const btSoma = document.getElementById("soma");

// Tela

const tela = document.getElementById("numeros");

// Código
// Funções

function ClicouNumero(numero) {
    let atual = tela.textContent;

    if (atual == "0") {
        tela.textContent = numero;
    } else {
        tela.textContent += numero;
    }
}

function clicarPonto() {
    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(tela.textContent.slice(-1))) {
        tela.textContent += ".";
    }
}

function clicarSoma() {
    tela.textContent += "+";
}

function clicarSubtracao() {
    tela.textContent += "-";
}

function clicarMultiplicacao() {
    tela.textContent += "*";
}

function clicarDivisao() {
    tela.textContent += "/";
}

function clicarIgual() {
    tela.textContent = eval(tela.textContent);
}

// Chamar as funções

btZero.onclick = () => ClicouNumero(0);

btUm.onclick = () => ClicouNumero(1);

btDois.onclick = () => ClicouNumero(2);

btTres.onclick = () => ClicouNumero(3);

btQuatro.onclick = () => ClicouNumero(4);

btCinco.onclick = () => ClicouNumero(5);

btSeis.onclick = () => ClicouNumero(6);

btSete.onclick = () => ClicouNumero(7);

btOito.onclick = () => ClicouNumero(8);

btNove.onclick = () => ClicouNumero(9);

btPonto.onclick = () => clicarPonto();

btSoma.onclick = () => clicarSoma();

btSubtracao.onclick = () => clicarSubtracao();

btMultiplicacao.onclick = () => clicarMultiplicacao();

btDivisao.onclick = () => clicarDivisao();

btIgual.onclick = () => clicarIgual();

document.addEventListener("keydown", function(event){
    if (event.key == "0") ClicouNumero(0);
    if (event.key == "1") ClicouNumero(1);
    if (event.key == "2") ClicouNumero(2);
    if (event.key == "3") ClicouNumero(3);
    if (event.key == "4") ClicouNumero(4);
    if (event.key == "5") ClicouNumero(5);
    if (event.key == "6") ClicouNumero(6);
    if (event.key == "7") ClicouNumero(7);
    if (event.key == "8") ClicouNumero(8);
    if (event.key == "9") ClicouNumero(9);
    if (event.key == "/" || event.key == "÷") clicarDivisao();
    if (event.key == "x" || event.key == "*" || event.key == "·") clicarMultiplicacao();
    if (event.key == "-") clicarSubtracao();
    if (event.key == "+") clicarSoma();
    if (event.key == ".") clicarPonto();
    if (event.key == "=" || event.key == "Enter") clicarIgual();
    if (event.key == "Backspace"){
        tela.textContent = tela.textContent.slice(0,-1);
        if (tela.textContent.length == 0) tela.textContent = "0";
    }
        
});