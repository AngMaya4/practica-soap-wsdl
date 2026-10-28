# Práctica: Servicios Web SOAP y WSDL

## 1. Introducción

En esta práctica se desarrollaron dos servicios web utilizando Node.js, Express y SOAP. Se implementaron operaciones matemáticas y de conversión, utilizando contratos WSDL para definir su funcionamiento y mensajes XML para la comunicación.

## 2. Objetivo

Implementar dos servicios web SOAP mediante Node.js y Express, comprobar sus operaciones utilizando Postman y comprender el funcionamiento de los contratos WSDL.

## 3. Tecnologías utilizadas

- **Node.js:** ejecución de JavaScript.
- **Express:** creación del servidor.
- **SOAP:** comunicación entre aplicaciones.
- **WSDL:** descripción de los servicios.
- **XML:** intercambio de información.
- **Postman:** pruebas de las operaciones.
- **Visual Studio Code:** desarrollo del proyecto.

## 4. Servicios desarrollados

### Servicio de conversiones

Permite realizar dos operaciones:

- **CelsiusAFahrenheit:** convierte grados Celsius a Fahrenheit.
- **KilometrosAMillas:** convierte kilómetros a millas.

### Servicio de geometría

Permite realizar cálculos de rectángulos:

- **AreaRectangulo:** multiplica la base por la altura.
- **PerimetroRectangulo:** calcula dos veces la suma de la base y la altura.

## 5. Estructura del proyecto

```text
practica-soap-wsdl/
├── evidencias/
├── pruebas/
├── src/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── wsdl/
│   └── app.js
├── package.json
├── README.md
└── server.js
```

Las carpetas permiten organizar los servicios, contratos WSDL, rutas, pruebas y evidencias.

## 6. Ejecución del proyecto

Para instalar las dependencias, ejecutar:

```bash
npm.cmd install
```

Para iniciar el servidor:

```bash
npm.cmd start
```

El servidor funciona en el puerto 3000.

### Contratos WSDL

**Conversiones:**

http://localhost:3000/soap/conversiones?wsdl

**Geometría:**

http://localhost:3000/soap/geometria?wsdl

## 7. Pruebas realizadas

Se utilizó Postman para enviar solicitudes SOAP mediante el método POST y comprobar las respuestas XML.

| Operación | Entrada | Resultado |
|---|---|---|
| Celsius a Fahrenheit | 25 °C | 77 °F |
| Kilómetros a millas | 10 km | 6.21371 millas |
| Área del rectángulo | Base 8, altura 5 | 40 |
| Perímetro del rectángulo | Base 8, altura 5 | 26 |

Todas las operaciones respondieron correctamente con el estado HTTP **200 OK**.

## 8. Middleware

Se creó un middleware llamado `logger.js` para registrar información de las solicitudes HTTP, como el método, la ruta, el estado y el tiempo de respuesta. Su funcionamiento con las peticiones SOAP está pendiente de verificación.

## 9. Conclusión

Esta práctica permitió comprender cómo implementar servicios web SOAP utilizando Node.js y Express. También se aprendió a crear contratos WSDL y realizar pruebas mediante Postman.

Los resultados obtenidos fueron correctos, lo que permitió comprobar el funcionamiento de los servicios y reforzar los conocimientos sobre comunicación entre aplicaciones y sistemas distribuidos.