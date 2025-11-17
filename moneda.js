const apiKey = '5d04eb5efb128782c3a4fc70';
        const apiURL = https://v6.exchangerate-api.com/v6/5d04eb5efb128782c3a4fc70/latest/USD;

        async function obtenerTiposDeCambio() {
            try {
                const respuesta = await fetch(apiURL);
                if (!respuesta.ok) {
                    throw new Error('Error al conectar con la API');
                }
                const datos = await respuesta.json();

                const div = document.getElementById('resultados');
                div.innerHTML = `
                    <p>USD: ${datos.conversion_rates.USD}</p>
                    <p>Guaraní (PYG): ${datos.conversion_rates.PYG}</p>
                    <p>Peso Argentino (ARS): ${datos.conversion_rates.ARS}</p>
                    <p>Real Brasileño (BRL): ${datos.conversion_rates.BRL}</p>
                `;
            } catch (error) {
                console.error(error);
                document.getElementById('resultados').innerText = 'No se pudieron cargar los datos.';
            }
        }

        obtenerTiposDeCambio();
