//------------ SOMA ----------------//
function soma(num1, num2) {
    return num1 + num2
}
console.log(soma(5, 5))

// -------- SUBTRAÇÃO ------------- //

function subt(num1, num2) {
    return num1 - num2
}
console.log(subt(5, 3))

//--------- DIVISÃO ----------------//

function div(num1, num2) {
    return num1 / num2
}
console.log(div(10, 2))

//---------MULTIPLICAÇÃO -----------//

function multi(num1, num2) {
    return num1 * num2
}
console.log(multi(2, 5))

//--------- VALOR MAIOR ------------//

function bigger (num1, num2) {
    if (num1 > num2){
         return num1}
    else {
        return num2
    }
}
console.log (bigger (5,4))

//--------- CONCATENAÇÃO -----------//

function CONCATENAÇÃO (nome, sobrenome){
    return nome + ' ' + sobrenome
}
console.log (CONCATENAÇÃO ('Fabrício', 'Horst'))

//-------- CONTROLE DE FLUXO ----------//

function ComparadoA10 (valor) {
   if (valor > 10){
    return  valor + ' é maior que 10!'
   }
   if (valor == 10) {
    return valor + ' é igual a 10!'
   }
   else if (valor < 10){
    return valor + ' é menor que 10!'
   }
}
console.log (ComparadoA10 (11))

//----------- BOOLEAN -------------//

function boolean (numero){
    if (numero > 0){
        return 'True'
    }
    else if (numero <= 0){
        return 'False'
    }
}
console.log ( boolean (1))
