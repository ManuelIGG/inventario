/*Importamos el framework express */
import express from "express";


/* */
const app = express();

/*setear un puerto a mi web server*/

app.set("port",5000);

/*Hacemos disponible a mi server app para toda*/
export default app;


