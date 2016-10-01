
// Se solicita el operador_a
var operador_a = prompt("Ingrese su primer número:");

// Se solicita el operador_b
var operador_b = prompt("Ingrese su segundo número:");

// Se solicita el operador
var operador = prompt("Ingrese el operador:");

var signo_operacion = null;

// Valida si es un número
function is_number(numero) {
  return !isNaN(numero);
}

// Valida si es un número
function is_operator(operator) {
  if (param.toLowerCase(operator) === "suma" || param.toLowerCase(operator) === "resta" || param.toLowerCase(operator) === "division" || param.toLowerCase(operator) === "multiplicacion") {
    // Es un operador válido
    switch (operator) {
      case "suma":
          signo_operacion = "+";
          break;
      case "resta":
          signo_operacion = "-";
          break;
      case "multiplicacion":
          signo_operacion = "*";
          break;
      case "division":
          signo_operacion = "/";
          break;
    }
    return true;
  }
  else {
    // No es un operador válido
    return false;
  }
}

// Función que realiza el cálculo de los valores a y b con respecto al operador
function calcular(a, b, operador) {
  if(is_number(a) && is_number(b) && is_operator(operador) && operador !== null){
    //Se puede operar
    switch (operador) {
      case expression: "+";
          
          break;
      case expression: "-";

        break;
      default:

    }
  } else {
    // No se puede operar se envía el mensaje de error
    if(!is_operator(operador)){
      //Error de operador
      console.log("Ingresó un operador no válido");
    }else {
      //Error de parámetro
      console.log(a+" "+signo_operacion+" "+b+" no es una operación válida");
    }
  }
}
