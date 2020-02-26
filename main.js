import Cantidad from "./cantidad.js"
import Ingrediente from "./ingrediente.js"
import Receta from "./receta.js"
class Main {

    constructor(){
        this.Receta = new Receta ("rib-eye al sarten")
        this.autor = this.autor
        this.ingrediente1 = new Ingrediente ("pimineta negra recien molida")
        this.ingrediente2 = new Ingrediente ("sal de mar en grano")

    }


    probarCantidad(){
        console.log("**Cantidad**")
        let cantidad = new Cantidad (600, "gramos")
        console.log(cantidad.getDescripcion())
    }

    probarIngrediente(){
        console.log("**Ingredientes**")
        let ingrediente = new Ingrediente (200, "harina", 300)
        console.log(ingrediente.getDescripcion())
    }

    probarReceta(){
        console.log("**Receta**")
        let nombre  = "Oscar de la capital"
        console.log()
    }

    
}

let app = new Main()
app.probarCantidad()
app.probarIngrediente()