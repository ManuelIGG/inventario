import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

/*Creamos el enrutador */
const router = Router();

router.get

/* Configuramos respuestas desde server  metodo http get */
router.get("/", categoriaController.getCategorias); /* READ */
router.post("/", categoriaController.postCategorias); /* CREAT */

/*Ruta para recibir un parametro*/
router.get("/:id", categoriaController.getCategory); /* READ BY ID */

router.delete("/:id", categoriaController.deleteCategory); /* DELETE */

router.put("/:id", categoriaController.updateCategorias);
/*UPDATE, DELETE */


/*Hacemos disponible al router en toda la aplicacion */
export default router;

