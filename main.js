import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"

class Main {

    constructor(){

    }


    probarCantidad(){
        console.log("**Cantidad**")
        let cantidad = new Cantidad (600, "gramos")
        console.log(cantidad.getDescripcion())
    }

    probarIngrediente(){
        console.log("**Ingrediente**")
        let ingrediente = new Ingrediente (200, "harina", 300)
        console.log(ingrediente.getDescripcion())
    }

    
}

let app = new Main()
app.probarCantidad()
app.probarIngrediente()