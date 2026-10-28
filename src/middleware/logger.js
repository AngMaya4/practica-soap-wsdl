// Middleware para registrar las peticiones HTTP
const logger = (req, res, next) => {

    // Guardamos el momento en que inicia la petición
    const inicio = Date.now();

    // Esperamos a que termine la respuesta
    res.on("finish", () => {

        // Calculamos cuánto tardó
        const tiempo = Date.now() - inicio;

        // Mostramos la información en la terminal
        console.log(
            `${req.method} ${req.originalUrl} - ${res.statusCode} - ${tiempo}ms`
        );

    });

    // Continuamos con la siguiente función
    next();
};

// Exportamos nuestro middleware
export default logger;