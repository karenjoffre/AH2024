import * as service from "../../services/usuarios.service.js";


function createUsuario(req, res) {
  service.agregarUsuario(req.body)
    .then(usuario => res.status(201).json(usuario))
    .catch(error => res.status(500).json({ message: "Error al agregar usuario", error }));
}


function getUsuarios(req, res) {
  service.getUsuarios()
    .then(usuarios => res.status(200).json(usuarios))
    .catch(error => res.status(500).json({ message: "Error al obtener usuarios", error }));
}


function getUsuarioById(req, res) {
  const usuarioId = req.params.id;
  service.getUsuarioById(usuarioId)
    .then(usuario => {
      if (usuario) {
        res.status(200).json(usuario);
      } else {
        res.status(404).json({ message: "Usuario no encontrado" });
      }
    })
    .catch(error => res.status(500).json({ message: "Error al obtener el usuario", error }));
}


function getPeliculasPorUsuario(req, res) {
  const usuarioId = req.params.id;
  service.getPeliculasPorUsuario(usuarioId)
      .then(peliculas => res.status(200).json(peliculas))
      .catch(error => res.status(500).json({ message: "Error al obtener películas del usuario", error }));
}


export {
  createUsuario,
  getUsuarios,
  getUsuarioById, 
  getPeliculasPorUsuario
};
