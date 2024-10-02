import { MongoClient } from "mongodb";

const cliente = new MongoClient('mongodb://localhost:27017');

cliente.connect()
.then(async () => {
    console.log("Me conecte");
    const db = cliente.db("AH20232CP1");
    
    // Obtener datos de la colección "movies"
    const movies = await db.collection("movies").find().toArray();
    console.log("Movies:", movies);
    
    // Obtener datos de la colección "usuarios"
    const usuarios = await db.collection("usuarios").find().toArray();
    console.log("Usuarios:", usuarios);
})
.catch(() => console.log("No me conecte"));
