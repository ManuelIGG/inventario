/*Importamos el framework express */
import express from "express";
import categoriasRoutes from "./routes/categorias.routes.js";

/*asignamos a app toda funcionalidad  */
const app = express();

/*setear un puerto a mi web server*/
app.set("port",5000);

/*router*/
app.use("/api/categorias", categoriasRoutes)

/* routes */
app.use(categoriasRoutes)
/*Hacemos disponible a mi server app para toda*/
export default app;


