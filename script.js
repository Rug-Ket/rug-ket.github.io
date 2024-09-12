var Selection;
var Selection2;
function Rock(){
    Selection = 0;
    aleatorio = Math.floor(Math.random()*3);
    if (aleatorio == 0) {
        Selection2 = "Piedra";
        alert("Empate");
    }
    else if (aleatorio == 1) {
        Selection2 = "Papel";
        alert("Derrota");
    }
    else if (aleatorio == 2) {
        Selection2 = "Tijeras";
        alert("Victoria");
    }
    alert("Tu oponente tiene " + Selection2);
};
function Paper(){
    Selection = 1;
    aleatorio = Math.floor(Math.random()*3);
    if (aleatorio == 0) {
        Selection2 = "Piedra";
        alert("Victoria");
    }
    else if (aleatorio == 1) {
        Selection2 = "Papel";
        alert("Empate");
    }
    else if (aleatorio == 2) {
        Selection2 = "Tijeras";
        alert("Derrota");
    }
    alert("Tu oponente tiene " + Selection2);
};
function Scissors(){
    Selection = 2;
    aleatorio = Math.floor(Math.random()*3);
    if (aleatorio == 0) {
        Selection2 = "Piedra";
        alert("Derrota");
    }
    else if (aleatorio == 1) {
        Selection2 = "Papel";
        alert("Victoria");
    }
    else if (aleatorio == 2) {
        Selection2 = "Tijeras";
        alert("Empate");
    }
    alert("Tu oponente tiene " + Selection2);
};