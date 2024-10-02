import * as service from "../../services/peliculas.service.js"

export function getPeliculas(req, res) {
    console.log("Filtros", req.query);
    const filtros = req.query;
    service.getPeliculas(filtros)
        .then((peliculas) => res.status(200).json(peliculas))
        .catch(err => res.status(500).json({ error: err.message }));
}

export function getPeliculaId(req, res){
    const id = req.params.id
    service.getPeliculaId(id)
    .then ( pelicula => res.status(200).json(pelicula))
}

export function agregarPelicula(req, res){
    service.agregarPelicula(req.body)
    .then( (pelicula) => res.status(201).json(pelicula) )
}

export function reemplazarPelicula(req, res){
    const id = req.params.id
    service.modificarPelicula(id, req.body)
    .then(pelicula => res.status(201).json(pelicula))
}

export function actualizarPelicula(req, res){
    const id = req.params.id
    console.log("id", id)
    service.actualizarPelicula(id, req.body)
    .then(pelicula => {
        if( pelicula ){
            res.status(201).json(pelicula)
        }else{
            res.status(400).json({error: { message: "No se encuentra la pelicula"}})
        }
    })

}

export function borrarPelicula(req, res){
    const id = req.params.id
    service.eliminarPelicula(id)
    .then( (id) => res.status(202).json({id: id}) )
}

