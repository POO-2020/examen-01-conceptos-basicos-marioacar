import Ingrediente from "./ingrediente.js";
export default class Receta{

    constructor(nombre, autor, ingrediente = new Ingrediente){
        this.nombre = nombre
        this.autor = autor
        this.ingrediente =ingrediente
    }

    imprimirEnConsola(){
        return `${this.nombre} Autor: ${this.autor} y sus ingredienets son ${this.ingredientes}`
    }

    agregarIngredientes(){
        this.ListarIngredientes.forEach(ingrediente => {
            console.log(`${i + 1}${this.ingrediente.getDescripcion()}`)
        })
    }

    getCosto(){
        return `${this.ingredientes.getCosto() + this.ingredientes.getCosto()}`
    }
}