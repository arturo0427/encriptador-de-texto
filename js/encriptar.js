

const btnEncriptar = document.getElementById("#encriptar");
btnEncriptar.onclick = encriptar;
const btnDesencriptar = document.getElementById("#desencriptar");
btnDesencriptar.onclick = desencriptar;


function encriptar() {

    const { value } = document.getElementById("textarea");
    const minusculas = value.toLowerCase();
    const acentos = minusculas.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const encriptado = acentos.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    ocultarElementosCard();
    mostrar(encriptado);
}

function desencriptar() {

    const { value } = document.getElementById("textarea");
    const minusculas = value.toLowerCase();
    const acentos = minusculas.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const desencriptado = acentos.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    ocultarElementosCard();
    mostrar(desencriptado);
}

function ocultarElementosCard() {
    document.querySelector(".main__card__img").style.display = "none";
    document.querySelector(".main__card__title").style.display = "none";
    document.querySelector(".main__card__button__copiar").style.display = "block";
}

function mostrar(mensaje) {
    const contenedor = document.querySelector(".main__card");
    contenedor.style.textAlign = "left";
    contenedor.style.justifyContent = "flex-start";
    contenedor.style.alignItems = "flex-start";
    const cardContentP = document.getElementById('main__card__content__p');
    cardContentP.innerText = mensaje;
    const cardContent = document.querySelector(".main__card__content");
    cardContent.style.textAlign = "left";
    cardContent.style.fontSize = "1.8rem";
}


function limpiarTextarea() {
    document.getElementById("textarea").value = "";

}

document.getElementById("copiar").onclick = function () {
    var text= document.getElementById("main__card__content__p");
    
    navigator.clipboard.writeText(text.innerHTML)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Error in copying text: ', err);
        });
}