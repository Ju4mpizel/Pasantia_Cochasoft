//Se usa para importar, siempre poner ./ sino leera desde la raiz del archivo
import Saludar, {PI, usuario} from "./constantes.js"
//import{sumar, restar} from "./aritmetica.js"
import{aritmetica} from "./aritmetica.js"
console.log("Hola")

console.log(PI, usuario)
//console.log(sumar(3,4))
console.log(aritmetica.sumar(3,4))

//saludar()
let saludo = new Saludar()
saludo