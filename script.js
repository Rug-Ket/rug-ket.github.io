var Selection;
var Selection2;

function Rock(){
    Selection = 0;
    aleatorio = Math.floor(Math.random()*3);
    if (aleatorio == 0) {
        Selection2 = "Piedra";
        let result = document.getElementById("resultado");
        let frase = document.getElementById("frase");
        frase.innerHTML = "Empate tu oponete tiene " + Selection2;
        result.showModal();
    }
    else if (aleatorio == 1) {
        Selection2 = "Papel";
        let result = document.getElementById("resultado");
        let frase = document.getElementById("frase");
        frase.innerHTML = "Derrota tu oponete tiene " + Selection2;
        result.showModal();
    }
    else if (aleatorio == 2) {
        Selection2 = "Tijeras";
        let result = document.getElementById("resultado");
        let frase = document.getElementById("frase");
        frase.innerHTML = "Victoria tu oponete tiene " + Selection2;
        result.showModal();
    }
};

function Paper(){
    Selection = 1;
    aleatorio = Math.floor(Math.random()*3);
    if (aleatorio == 0) {
        Selection2 = "Piedra";
        let result = document.getElementById("resultado");
        let frase = document.getElementById("frase");
        frase.innerHTML = "Victoria tu oponete tiene " + Selection2;
        result.showModal();
    }
    else if (aleatorio == 1) {
        Selection2 = "Papel";
        let result = document.getElementById("resultado");
        let frase = document.getElementById("frase");
        frase.innerHTML = "Empate tu oponete tiene " + Selection2;
        result.showModal();
    }
    else if (aleatorio == 2) {
        Selection2 = "Tijeras";
        let result = document.getElementById("resultado");
        let frase = document.getElementById("frase");
        frase.innerHTML = "Derrota tu oponete tiene " + Selection2;
        result.showModal();
    }
};

function Scissors(){
    Selection = 2;
    aleatorio = Math.floor(Math.random()*3);
    if (aleatorio == 0) {
        Selection2 = "Piedra";
        let result = document.getElementById("resultado");
        let frase = document.getElementById("frase");
        frase.innerHTML = "Derrota tu oponete tiene " + Selection2;
        result.showModal();
    }
    else if (aleatorio == 1) {
        Selection2 = "Papel";
        let result = document.getElementById("resultado");
        let frase = document.getElementById("frase");
        frase.innerHTML = "Victoria tu oponete tiene " + Selection2;
        result.showModal();
    }
    else if (aleatorio == 2) {
        Selection2 = "Tijeras";
        let result = document.getElementById("resultado");
        let frase = document.getElementById("frase");
        frase.innerHTML = "Empate tu oponete tiene " + Selection2;
        result.showModal();
    }
};