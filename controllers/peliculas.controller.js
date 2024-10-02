import * as peliculaService from "../services/peliculas.service.js"
import peliculasView, * as peliculaView from "../views/peliculas.view.js"


const getPeliculas = (req, res) => {  
    const filtros = req.query; // Obtener filtros desde los parámetros de consulta  
    peliculaService.getPeliculas(filtros)  
        .then(peliculas => {  
            res.send(peliculaView.crearPagina("Listado de películas", peliculaView.crearListadoPeliculas(peliculas)));  
        })  
        .catch(err => res.status(500).send("Error al obtener las películas"));  
};  

const getPeliculaId = (req, res) => {
    console.log(req.params.id)
    peliculaService.getPeliculaId(req.params.id)
    .then( pelicula => res.send( peliculaView.crearPagina("detalle", peliculaView.crearDetallePelicula(pelicula)) ) )
}
const nuevaPelicula = (req, res) => {
    res.send( peliculaView.crearPagina("Nueva pelicula", peliculaView.nuevaPelicula() ) )
}


const agregarPelicula = (req, res) => {  
    peliculaService.agregarPelicula(req.body)  
    .then( (pelicula) => res.send(peliculaView.crearPagina("Nueva pelicula", `<p>Pelicula:ID: ${pelicula.id} <br> ${pelicula.nombre} </p>`)))  
    .catch((err)=> res.send(peliculaView.crearPagina("Error al agregar la pelicula", `<p>${err}</p>`)))  
}  

const eliminarPelicula = (req, res) => {  
    peliculaService.eliminarPelicula(req.params.id)  
    .then( () => res.redirect("/peliculas")) // redirige a la lista después de eliminar  
    .catch( (err) => res.send(peliculaView.crearPagina("Error al eliminar la pelicula", `<p>${err}</p>`)) );  
}  

/*function eliminarPelicula(id){
    return getPeliculas()
    .then( peliculas => peliculas.filter(pelicula => pelicula.id != id))
         
}*/

const modificarPeliculaForm = (req, res) => {
    const idPelicula = req.params.id
    peliculaService.getPeliculaId(idPelicula)
    .then( pelicula => res.send( peliculaView.crearPagina("Modificar pelicula", peliculaView.modificarForm(pelicula))))
    .catch( (err) => res.send(peliculaView.crearPagina("Error al modificar la peliculas", `<p>${err}</p>`)))
}

const modificarPelicula = (req, res) => {
    const idPelicula = req.params.id
    peliculaService.modificarPelicula(idPelicula, req.body)
    .then( () => res.redirect("/peliculas"))
}

export {
    getPeliculaId,
    getPeliculas,
    nuevaPelicula,
    agregarPelicula,
    eliminarPelicula,
    modificarPeliculaForm,
    modificarPelicula
}