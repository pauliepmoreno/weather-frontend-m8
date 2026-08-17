function calcularEstadisticas(pronostico) {
    let sumaMax = 0;
    let tempMin = pronostico[0].min;
    let tempMax = pronostico[0].max;
    let diasSunny = 0;
    let diasPartlyCloudy = 0;
    let diasCloudy = 0;
    let diasRainy = 0;
    let diasSnowy = 0;
    let diasWindy = 0;
    let diasFoggy = 0;

    for (let i = 0; i < pronostico.length; i++) {
        if (pronostico[i].min < tempMin) {
            tempMin = pronostico[i].min;
        }
        if (pronostico[i].max > tempMax) {
            tempMax = pronostico[i].max;
        }
        sumaMax = sumaMax + pronostico[i].max;

        if (pronostico[i].estado == "Sunny") {
            diasSunny++;
        } else if (pronostico[i].estado == "Partly Cloudy") {
            diasPartlyCloudy++;
        } else if (pronostico[i].estado == "Cloudy") {
            diasCloudy++
        } else if (pronostico[i].estado == "Rainy") {
            diasRainy++
        } else if (pronostico[i].estado == "Snowy") {
            diasSnowy++
        } else if (pronostico[i].estado == "Windy") {
            diasWindy++
        } else if (pronostico[i].estado == "Foggy") {
            diasFoggy++
        }

    }

    const maxDias = Math.max(diasSunny, diasPartlyCloudy, diasCloudy, diasRainy, diasSnowy, diasWindy, diasFoggy);
    const promedio = Math.round(sumaMax / pronostico.length);

    let resumen = "";

    if (diasSunny === maxDias) {
        resumen = "Semana mayormente soleada";
    } else if (diasPartlyCloudy === maxDias) {
        resumen = "Semana mayormente parcialmente nublada";
    } else if (diasCloudy === maxDias) {
        resumen = "Semana mayormente nublada";
    } else if (diasRainy === maxDias) {
        resumen = "Semana con varias lluvias";
    } else if (diasSnowy === maxDias) {
        resumen = "Semana con nieve";
    } else if (diasWindy === maxDias) {
        resumen = "Semana ventosa";
    } else if (diasFoggy === maxDias) {
        resumen = "Semana con neblina";
    }

    return {
        tempMin: tempMin,
        tempMax: tempMax,
        promedio: promedio,
        resumen: resumen,
        diasSunny: diasSunny,
        diasPartlyCloudy: diasPartlyCloudy,
        diasCloudy: diasCloudy,
        diasRainy: diasRainy,
        diasSnowy: diasSnowy,
        diasWindy: diasWindy,
        diasFoggy: diasFoggy,
    };

}

export default calcularEstadisticas;