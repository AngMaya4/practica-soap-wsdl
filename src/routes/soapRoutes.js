import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import soap from "soap";

// Importamos nuestros dos servicios
import conversionesService from "../services/conversionesService.js";
import geometriaService from "../services/geometriaService.js";

// Creamos el Router
const router = express.Router();

// Obtenemos la ubicación del archivo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Leemos los dos contratos WSDL
const conversionesWsdl = fs.readFileSync(
    path.join(__dirname, "../wsdl/conversiones.wsdl"),
    "utf8"
);

const geometriaWsdl = fs.readFileSync(
    path.join(__dirname, "../wsdl/geometria.wsdl"),
    "utf8"
);

// Ruta para consultar el WSDL de conversiones
router.get("/conversiones", (req, res, next) => {

    if (!("wsdl" in req.query)) {
        return next();
    }

    res.type("application/xml");
    res.send(conversionesWsdl);
});

// Ruta para consultar el WSDL de geometría
router.get("/geometria", (req, res, next) => {

    if (!("wsdl" in req.query)) {
        return next();
    }

    res.type("application/xml");
    res.send(geometriaWsdl);
});

// Función para iniciar los servicios SOAP
export function iniciarSOAP(server) {

    // Primer servicio: Conversiones
    soap.listen(
        server,
        "/soap/conversiones",
        conversionesService,
        conversionesWsdl
    );

    console.log("Servicio SOAP de conversiones disponible");

    // Segundo servicio: Geometría
    soap.listen(
        server,
        "/soap/geometria",
        geometriaService,
        geometriaWsdl
    );

    console.log("Servicio SOAP de geometría disponible");
}

// Exportamos el Router
export default router;