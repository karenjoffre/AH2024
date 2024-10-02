import { Router } from 'express';
import { getUsuarios, getUsuarioById, createUsuario, getPeliculasPorUsuario } from '../controllers/usuarios.controller.js';

const router = Router();

router.get('/usuarios', getUsuarios); 
router.get('/usuarios/:id', getUsuarioById); 
router.post('/usuarios/nuevo', createUsuario); 
router.get('/usuarios/:id/peliculas', getPeliculasPorUsuario); 

export default router;