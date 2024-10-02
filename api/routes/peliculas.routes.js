import { Router } from "express";
import * as controller from "../controllers/peliculas.controller.js"

const route = Router()
route.get("/", controller.getPeliculas);
route.get("/peliculas", controller.getPeliculas) //obtener todas las peliculas
route.get("/peliculas/:id", controller.getPeliculaId) //obtener 1 pelicula 
route.post("/peliculas", controller.agregarPelicula) //agregar pelicula
route.put("/peliculas/:id", controller.reemplazarPelicula) // reemplaza
route.patch("/peliculas/:id", controller.actualizarPelicula) // actualiza
route.delete("/peliculas/:id", controller.borrarPelicula) //borrar



export default route