// Personaje de TV
let nombre = 'Chihiro';
let anime = 'El Viaje de Chihiro';
let edad = 16;

let personaje = {
    nombre: 'Chihiro',
    anime:'El Viaje de Chihiro',
    edad: 16,
};
console.log(personaje);
console.log(personaje.anime);
console.log(personaje['nombre']);

personaje.edad = 10;
console.log(personaje.edad);

delete personaje.edad;

console.log(personaje);