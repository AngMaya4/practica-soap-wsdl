// Importamos nuestra aplicación Express
import app from "./src/app.js";

// Importamos la función que inicia SOAP
import { iniciarSOAP } from "./src/routes/soapRoutes.js";

// Definimos el puerto
const PORT = 3000;

// Iniciamos el servidor HTTP
const server = app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

// Activamos nuestro servicio SOAP
iniciarSOAP(server);