// Short-Circuit

// Devuelve Falso:
// false
// 0
// ''
// null
// undefined
// NaN

// Para web en la que no necesitas registrarte
let nombre = 'Jose';
let username = nombre || 'Anónimo';
console.log(username);

function fn1() {
    console.log('Soy la función 1');
    return false;
}

function fn2() {
    console.log('Soy la función 2');
    return true;
}

let x = fn1() && fn2();