/* Contenido de lo visto en clase*/
// Prueba para aprender a ejecutar desde CMD
// console.log("Hola mundo");
// console.log("desde terminal CMD");

//repaso de una función
function saludar(nombre) {
console.log('Hola', nombre, 'estas en clase de DEVF');
    
}

saludar('Zaira');

//repaso de arrow function
const saludo = (nombre) => {
    console.log('bienvenido', nombre);
    
}

saludo('Zaira');

setTimeout(()=>{
    console.log('Se termino el tiempo');
},2000) 


//creación de un objeto
let flor = {
    nombre: 'rosa',
    color: 'rojo',
    precio: '$60'
}

//forma de acceder a un atributo
let {nombre} = flor;
console.log(nombre);