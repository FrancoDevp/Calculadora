const operador1 = document.getElementById("op1")
const operador = document.getElementById("operacion")
const operador2 = document.getElementById("op2")
const pMostrar = document.getElementById("mostrar")
const btnCalculadora = document.getElementById("btnCalcular")

btnCalculadora.addEventListener('click', btnCalcular)

function btnCalcular() {
    const operacion = operador.value
    const op1 = parseFloat(operador1.value)
    const op2 = parseFloat(operador2.value)

    if ((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)){
        let resultado;
        switch (operacion) {
            case "+": resultado = op1 + op2;
                break;
            case "-": resultado = op1 - op2;
                break;
            case "*": resultado = op1*op2;
                break;
            case "/": resultado = op1/op2;
                break;
        }
        pMostrar.innerText = "= " + resultado;
    } else {
        pMostrar.innerText = "Imposible de calcular";
    }
}