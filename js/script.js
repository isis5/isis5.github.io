/* ANIMAÇÃO DO MEU H1(ISIS BEATRIZ DE ALENCASTRO) */
let titulo = document.querySelector("h1");

function textWriter(elemento){
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML= "";
    console.log(textoArray);

    textoArray.forEach((letra, i) => {

        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 250 * i);

    });
};

textWriter(titulo);


