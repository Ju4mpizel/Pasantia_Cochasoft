//Se utiliza export para otros archivos
export const PI = Math.PI;


export let usuario = "Juan"
//export default
let password = "contraseña"
//No se puede exportar por defecto una variable que recien se declara
//export default password

const hello = () => console.log("Hola")
//Solo se puede tener una sola exportacion de manera default
export function saludar(){
    console.log("Hola Modulos +ES6")
}

export default class Saludar{
    constructor(){
        console.log("Hola Modulos +ES6")
    }
}