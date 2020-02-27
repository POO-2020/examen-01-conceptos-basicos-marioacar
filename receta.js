import Ingrediente from "./ingrediente.js";
export default class Receta{

    constructor(nombre, autor){
        this.nombre = nombre
        this.autor = autor
        this.ingredientes = new Array()
    }

    imprimirEnConsola(){
        return (`${this.nombre} Autor: ${this.autor} y sus ingredienets son ${this.ingredientes}`)
        this.listarIngredientes.forEach(ingredientes => {
            console.log(`${i+1}${ingredientes.getDescripcion()}`)
        })
    }

    agregarIngredientes(ingredientes){
        this.ingredientes.push(ingredientes);
    }
    
    getCosto(){
        return `${this.ingredientes.getCosto() + this.ingredientes.getCosto()}`
    }
}