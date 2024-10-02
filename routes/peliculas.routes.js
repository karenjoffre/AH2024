import express from "express"
import * as controllerPelicula from "../controllers/peliculas.controller.js"

const route = express.Router()
route.get("/", controllerPelicula.getPeliculas);
route.get("/peliculas", controllerPelicula.getPeliculas)
route.get("/peliculas/nueva", controllerPelicula.nuevaPelicula)
route.post("/peliculas/nueva", controllerPelicula.agregarPelicula)
route.get("/peliculas/eliminar/:id", controllerPelicula.eliminarPelicula)
route.get("/peliculas/modificar/:id", controllerPelicula.modificarPeliculaForm)
route.post("/peliculas/modificar/:id", controllerPelicula.modificarPelicula)
route.get("/peliculas/:id", controllerPelicula.getPeliculaId) 



export default route