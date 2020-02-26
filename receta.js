import Ingrediente from "./ingrediente.js";
export default class Receta{

    constructor(nombre, autor, ingredientes = new Ingrediente){
        this.nombre = nombre
        this.autor = autor
        this.ingredentes = ingredientes
    }

    imprimirEnConsola(){
        return `${this.nombre} Autor: ${this.autor} y sus ingredienets son ${this.ingredientes}`
    }

    getNumeroIngredientes(){
        this.ingredientes.forEach(ingredientes => {
            console.log(`${i + a}${ingredientes.getNumeroIngredientes()}`)
        })
    }

    getCosto(){
        return `${this.ingredientes.getCosto() + this.ingredientes.getCosto()}`
    }
}