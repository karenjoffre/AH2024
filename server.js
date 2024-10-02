import express from "express"
import peliculasRoute from "./routes/peliculas.routes.js"
import apiRoute from "./api/routes/peliculas.routes.js"
import usuariosRoute from "./api/routes/usuarios.routes.js"; 



const app = express()


app.use( express.static("public") )
app.use( express.urlencoded({ extended: true }) )
app.use( express.json() )

app.use("/api",apiRoute)
app.use("/api", usuariosRoute);
app.use(peliculasRoute)

app.listen(3333, () => console.log("Servidor funcionando"))