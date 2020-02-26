import Cantidad from "./cantidad.js"
export default class Ingrediente {

    constructor(cantidad = new Cantidad,nombre,costo){
        this.cantidad = cantidad
        this.nombre = nombre
        this.costo = costo
    }

    getDescripcion(){
        return `${this.cantidad} gramos de ${this.nombre} a $${this.costo} pesos`
    }
}