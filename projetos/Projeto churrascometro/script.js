
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    /* CALCULO DA CARNE */
    let qtdTotalCarne = carnePP(duracao) * adultos + ( carnePP(duracao)/2  * criancas);
    console.log(qtdTotalCarne);

    /* CALCULO DA CERVEJAA */
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    console.log(qtdTotalCerveja);

    /* CALCULA DAS BEBIDAS */
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);
    console.log(qtdTotalBebidas);

    resultado.innerHTML  = `<p> ${qtdTotalCarne/1000} KG de Carne</p>`;
    resultado.innerHTML += `<p>${qtdTotalCerveja/1000} L de Cerveja </p>`;
    resultado.innerHTML += `<p> ${Math.ceil(qtdTotalBebidas/1000)} L de Bebidas </p>`;
}

/* CALCULO DA CARNE */
function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    }
    else{
        return 400;
    }
}

/* CALCULO DA CERVEJAA */
function cervejaPP(duracao) {
    if (duracao >= 2) {
        return 2000;
    }
    else{
        return 1200;
    }
}

/* CALCULA DAS BEBIDAS */
function bebidasPP(duracao) {
    if (duracao >= 2) {
        return 1600;
    }
    else{
        return 1000;
    }
}