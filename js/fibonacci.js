function calcular() {
    var idnumero = parseInt(document.getElementById('numero').value); //--- OBTENER NUMERO SELECCIONADO
    var radio = document.getElementsByName('algoritmo');
    if(idnumero > 0 && idnumero < 51 && radio[0].checked || idnumero > 0 && idnumero < 51 && radio[1].checked){ //--- VALIDAR SI ESCOGIO UN NUMERO
        if(radio[0].checked){
            fibonacci();
        } else if (radio[1].checked){
            fibonacci();
        }
    } else { //--- SI NO ESCOGIO NUMERO
        alert('Escoge un numero o selecciona un algoritmo');
        document.getElementById('resultado').value = '';
    }
}

function fibonacci(){

    var idnumero = parseInt(document.getElementById('numero').value); //--- OBTENER NUMERO SELECCIONADO
    var fibo1 = 1;
    var fibo2 = 2;
    var pos = 0;

    while(idnumero > fibo1 && idnumero > fibo2){
        if(fibo1 < fibo2){
            fibo1 += fibo2;
        } else {
            fibo2 += fibo1;
        }
        pos++;
    }

    if(idnumero == fibo1 || idnumero == fibo2){
        document.getElementById('resultado').value = "El numero " + idnumero + " pertenece a la sucesion y se encuentra en la " 
        + ' posicion ' + (pos + 1);
    } else {
        document.getElementById('resultado').value = "El numero " + idnumero + " NO pertenece a la sucesion Fibonacci ";
    }
}