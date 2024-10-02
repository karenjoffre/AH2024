import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");
const db = client.db("AH20232CP1");

async function connectDB() {
    await client.connect();
}

async function getUsuarios() {
    await connectDB();
    return db.collection("usuarios").find().toArray();
}

async function getUsuarioId(id) {
    await connectDB();
    return db.collection("usuarios").findOne({ _id: new ObjectId(id) });
}

async function agregarUsuario(usuario) {
    console.log(usuario);
    await connectDB();
    await db.collection("usuarios").insertOne(usuario);
    return usuario;
}

async function eliminarUsuario(id) {
    await connectDB();
    await db.collection("usuarios").deleteOne({ _id: new ObjectId(id) });
    return id;
}

async function getPeliculasPorUsuario(usuarioId) {
    await connectDB();
    // Busca el usuario por su ID
    const usuario = await db.collection("usuarios").findOne({ _id: new ObjectId(usuarioId) });
    
    if (!usuario) {
        throw new Error("Usuario no encontrado");
    }

    
    return db.collection("movies").find({ 
        _id: { $in: usuario.peliculas.map(id => new ObjectId(id)) } 
    }).toArray(); 
}

export {
    getUsuarios,
    getUsuarioId,
    agregarUsuario,
    eliminarUsuario,
    getPeliculasPorUsuario
};
