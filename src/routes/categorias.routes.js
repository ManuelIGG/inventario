import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

/*Creamos el enrutador */
const router = Router();

router.get

/* Configuramos respuestas desde server  metodo http get */
router.get("/", categoriaController.getCategorias) 

/*Hacemos disponible al router en toda la aplicacion */
export default router;

