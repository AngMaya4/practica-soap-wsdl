// Servicio SOAP para realizar conversiones

const conversionesService = {

    ConversionesService: {

        ConversionesPort: {

            // Convertir Celsius a Fahrenheit
            CelsiusAFahrenheit(args) {

                const celsius = Number(args.celsius);

                const fahrenheit = (celsius * 9 / 5) + 32;

                return {
                    resultado: fahrenheit
                };
            },

            // Convertir kilómetros a millas
            KilometrosAMillas(args) {

                const kilometros = Number(args.kilometros);

                const millas = kilometros * 0.621371;

                return {
                    resultado: millas
                };
            }

        }

    }

};

// Exportamos el servicio
export default conversionesService;