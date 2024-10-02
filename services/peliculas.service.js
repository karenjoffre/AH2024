import { writeFile } from "fs/promises";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");
const db = client.db("AH20232CP1");

async function getPeliculas(filtros = {}) {
    const filterMongo = { eliminado: { $ne: true } };
    if (filtros.categoria) {
        filterMongo.categoria = { $eq: filtros.categoria };
    }
    if (filtros.plataformas) {
        filterMongo.plataformas = { $regex: new RegExp(filtros.plataformas.split(",").join("|"), "i") }; //Busca coincidencias parciales dentro del string

    }
    await client.connect();
    return db.collection("movies").find(filterMongo).toArray();
}



async function getPeliculaId(id) {
    await client.connect();
    return db.collection("movies").findOne({ _id: ObjectId.createFromHexString(id) });
}

async function agregarPelicula(pelicula) {
    console.log(pelicula);
    await client.connect();
    await db.collection("movies").insertOne(pelicula);
    return pelicula;
}

async function eliminarPelicula(id) {
    await client.connect();
    await db.collection("movies").updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: { eliminado: true } });
    return id;
}

const modificarPelicula = async (id, peliculaActualizada) => {
    await client.connect();
    await db.collection("movies").replaceOne({ _id: ObjectId.createFromHexString(id) }, peliculaActualizada);  
    return peliculaActualizada;
}

const actualizarPelicula = async (id, peliculaActualizada) => {
    await client.connect();
    const peliculaNueva = await db.collection("movies").updateOne({ _id: ObjectId.createFromHexString(id) }, { $set: peliculaActualizada });  
    return peliculaNueva;
}

export {
    getPeliculaId,
    getPeliculas,
    agregarPelicula,
    eliminarPelicula,
    modificarPelicula,
    actualizarPelicula
};
