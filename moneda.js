const apiURL = 'https://v6.exchangerate-api.com/v6/5d04eb5efb128782c3a4fc70/latest/USD';

// Función principal
async function convertirMonedas() {
    const monto = document.getElementById("monto").value;

    if (!monto || monto <= 0) {
        alert("Ingrese un monto válido en USD.");
        return;
    }

    try {
        const respuesta = await fetch(apiURL);

        if (!respuesta.ok) {
            throw new Error("Error al conectar con la API");
        }

        const datos = await respuesta.json();

        // Calculamos conversiones
        const pyg = (datos.conversion_rates.PYG * monto).toFixed(2);
        const ars = (datos.conversion_rates.ARS * monto).toFixed(2);
        const brl = (datos.conversion_rates.BRL * monto).toFixed(2);

        // Mostramos en pantalla
        document.getElementById("resultados").innerHTML = `
            <p><strong>${monto} USD equivalen a:</strong></p>
            <p>🇵🇾 Guaraní (PYG): ${pyg}</p>
            <p>🇦🇷 Peso Argentino (ARS): ${ars}</p>
            <p>🇧🇷 Real Brasileño (BRL): ${brl}</p>
        `;
        
    } catch (error) {
        console.error(error);
        document.getElementById("resultados").innerText =
            "No se pudieron obtener los datos de la API.";
    }
}

// Evento del botón
document.getElementById("btnConvertir").addEventListener("click", convertirMonedas);
