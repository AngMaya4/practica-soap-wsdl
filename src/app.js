import express from "express";

// Importamos nuestro middleware
import logger from "./middleware/logger.js";

// Importamos las rutas SOAP
import soapRoutes from "./routes/soapRoutes.js";

// Creamos nuestra aplicación Express
const app = express();

// Activamos el middleware
app.use(logger);

// Ruta principal para comprobar el servidor
app.get("/", (req, res) => {
    res.send("Servidor SOAP y WSDL funcionando correctamente");
});

// Registramos las rutas SOAP
app.use("/soap", soapRoutes);

// Exportamos la aplicación
export default app;