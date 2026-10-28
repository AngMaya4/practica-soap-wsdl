// Servicio SOAP para cálculos geométricos

const geometriaService = {

    GeometriaService: {

        GeometriaPort: {

            // Calcular el área de un rectángulo
            AreaRectangulo(args) {

                const base = Number(args.base);
                const altura = Number(args.altura);

                const area = base * altura;

                return {
                    resultado: area
                };
            },

            // Calcular el perímetro de un rectángulo
            PerimetroRectangulo(args) {

                const base = Number(args.base);
                const altura = Number(args.altura);

                const perimetro = 2 * (base + altura);

                return {
                    resultado: perimetro
                };
            }

        }

    }

};

// Exportamos el servicio
export default geometriaService;