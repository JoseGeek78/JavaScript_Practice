// Short-Circuit

// Devuelve Falso:
// false
// 0
// ''
// null
// undefined
// NaN

// Para web en la que no necesitas registrarte
let nombre = '';
let username = nombre || 'Anónimo';
console.log(username);