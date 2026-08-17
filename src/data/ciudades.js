const ciudades = [
    {
        id: 1,
        nombre: "Santiago",
        lat: -33.45,
        lng: -70.65,
        tempActual: 17,
        estadoActual: "Sunny",
        emoji: "☀️",
        humedad: 48,
        viento: 12,
        pronostico: [
            { dia: "Lunes", emoji: "☀️", min: 12, max: 18, estado: "Sunny" },
            { dia: "Martes", emoji: "⛅", min: 10, max: 15, estado: "Partly Cloudy" },
            { dia: "Miércoles", emoji: "☀️", min: 13, max: 19, estado: "Sunny" },
            { dia: "Jueves", emoji: "☁️", min: 11, max: 16, estado: "Cloudy" },
            { dia: "Viernes", emoji: "🌧️", min: 9, max: 13, estado: "Rainy" },
            { dia: "Sábado", emoji: "☀️", min: 14, max: 20, estado: "Sunny" },
            { dia: "Domingo", emoji: "☀️", min: 15, max: 21, estado: "Sunny" }
        ]
    },
    {
        id: 2,
        nombre: "New York",
        lat: 40.71,
        lng: -74.01,
        tempActual: 12,
        estadoActual: "Cloudy",
        emoji: "☁️",
        humedad: 72,
        viento: 18,
        pronostico: [
            { dia: "Lunes", emoji: "☁️", min: 7, max: 11, estado: "Cloudy" },
            { dia: "Martes", emoji: "🌧️", min: 5, max: 9, estado: "Rainy" },
            { dia: "Miércoles", emoji: "☁️", min: 6, max: 10, estado: "Cloudy" },
            { dia: "Jueves", emoji: "⛅", min: 8, max: 13, estado: "Partly Cloudy" },
            { dia: "Viernes", emoji: "☀️", min: 10, max: 15, estado: "Sunny" },
            { dia: "Sábado", emoji: "☁️", min: 7, max: 12, estado: "Cloudy" },
            { dia: "Domingo", emoji: "🌧️", min: 4, max: 8, estado: "Rainy" }
        ]
    },
    {
        id: 3,
        nombre: "London",
        lat: 51.51,
        lng: -0.13,
        tempActual: 9,
        estadoActual: "Rainy",
        emoji: "🌧️",
        humedad: 88,
        viento: 22,
        pronostico: [
            { dia: "Lunes", emoji: "🌧️", min: 5, max: 8, estado: "Rainy" },
            { dia: "Martes", emoji: "🌧️", min: 4, max: 7, estado: "Rainy" },
            { dia: "Miércoles", emoji: "☁️", min: 6, max: 10, estado: "Cloudy" },
            { dia: "Jueves", emoji: "🌧️", min: 5, max: 9, estado: "Rainy" },
            { dia: "Viernes", emoji: "⛅", min: 7, max: 11, estado: "Partly Cloudy" },
            { dia: "Sábado", emoji: "☁️", min: 6, max: 10, estado: "Cloudy" },
            { dia: "Domingo", emoji: "🌧️", min: 4, max: 8, estado: "Rainy" }
        ]
    },
    {
        id: 4,
        nombre: "Tokyo",
        lat: 35.68,
        lng: 139.69,
        tempActual: 22,
        estadoActual: "Partly Cloudy",
        emoji: "⛅",
        humedad: 65,
        viento: 10,
        pronostico: [
            { dia: "Lunes", emoji: "☀️", min: 18, max: 24, estado: "Sunny" },
            { dia: "Martes", emoji: "⛅", min: 17, max: 22, estado: "Partly Cloudy" },
            { dia: "Miércoles", emoji: "🌧️", min: 15, max: 20, estado: "Rainy" },
            { dia: "Jueves", emoji: "☁️", min: 16, max: 21, estado: "Cloudy" },
            { dia: "Viernes", emoji: "☀️", min: 19, max: 25, estado: "Sunny" },
            { dia: "Sábado", emoji: "☀️", min: 20, max: 26, estado: "Sunny" },
            { dia: "Domingo", emoji: "⛅", min: 18, max: 23, estado: "Partly Cloudy" }
        ]
    },
    {
        id: 5,
        nombre: "Paris",
        lat: 48.85,
        lng: 2.35,
        tempActual: 11,
        estadoActual: "Rainy",
        emoji: "🌧️",
        humedad: 81,
        viento: 16,
        pronostico: [
            { dia: "Lunes", emoji: "🌧️", min: 6, max: 10, estado: "Rainy" },
            { dia: "Martes", emoji: "☁️", min: 7, max: 12, estado: "Cloudy" },
            { dia: "Miércoles", emoji: "⛅", min: 8, max: 13, estado: "Partly Cloudy" },
            { dia: "Jueves", emoji: "🌧️", min: 5, max: 9, estado: "Rainy" },
            { dia: "Viernes", emoji: "☀️", min: 9, max: 14, estado: "Sunny" },
            { dia: "Sábado", emoji: "☁️", min: 7, max: 11, estado: "Cloudy" },
            { dia: "Domingo", emoji: "⛅", min: 8, max: 12, estado: "Partly Cloudy" }
        ]
    },
    {
        id: 6,
        nombre: "Dubai",
        lat: 25.20,
        lng: 55.27,
        tempActual: 38,
        estadoActual: "Sunny",
        emoji: "☀️",
        humedad: 29,
        viento: 14,
        pronostico: [
            { dia: "Lunes", emoji: "☀️", min: 30, max: 39, estado: "Sunny" },
            { dia: "Martes", emoji: "☀️", min: 31, max: 40, estado: "Sunny" },
            { dia: "Miércoles", emoji: "☀️", min: 32, max: 41, estado: "Sunny" },
            { dia: "Jueves", emoji: "☀️", min: 29, max: 38, estado: "Sunny" },
            { dia: "Viernes", emoji: "☀️", min: 28, max: 37, estado: "Sunny" },
            { dia: "Sábado", emoji: "☀️", min: 30, max: 39, estado: "Sunny" },
            { dia: "Domingo", emoji: "☀️", min: 31, max: 40, estado: "Sunny" }
        ]
    },
    {
        id: 7,
        nombre: "Sydney",
        lat: -33.87,
        lng: 151.21,
        tempActual: 20,
        estadoActual: "Sunny",
        emoji: "☀️",
        humedad: 55,
        viento: 20,
        pronostico: [
            { dia: "Lunes", emoji: "☀️", min: 15, max: 21, estado: "Sunny" },
            { dia: "Martes", emoji: "☀️", min: 16, max: 22, estado: "Sunny" },
            { dia: "Miércoles", emoji: "⛅", min: 14, max: 19, estado: "Partly Cloudy" },
            { dia: "Jueves", emoji: "☁️", min: 13, max: 18, estado: "Cloudy" },
            { dia: "Viernes", emoji: "🌧️", min: 12, max: 17, estado: "Rainy" },
            { dia: "Sábado", emoji: "☀️", min: 17, max: 23, estado: "Sunny" },
            { dia: "Domingo", emoji: "☀️", min: 18, max: 24, estado: "Sunny" }
        ]
    },
    {
        id: 8,
        nombre: "Mexico City",
        lat: 19.43,
        lng: -99.13,
        tempActual: 25,
        estadoActual: "Partly Cloudy",
        emoji: "⛅",
        humedad: 58,
        viento: 11,
        pronostico: [
            { dia: "Lunes", emoji: "⛅", min: 18, max: 24, estado: "Partly Cloudy" },
            { dia: "Martes", emoji: "☀️", min: 20, max: 26, estado: "Sunny" },
            { dia: "Miércoles", emoji: "🌧️", min: 16, max: 22, estado: "Rainy" },
            { dia: "Jueves", emoji: "⛅", min: 17, max: 23, estado: "Partly Cloudy" },
            { dia: "Viernes", emoji: "☀️", min: 21, max: 27, estado: "Sunny" },
            { dia: "Sábado", emoji: "☀️", min: 22, max: 28, estado: "Sunny" },
            { dia: "Domingo", emoji: "⛅", min: 19, max: 25, estado: "Partly Cloudy" }
        ]
    },
    {
        id: 9,
        nombre: "Cairo",
        lat: 30.04,
        lng: 31.24,
        tempActual: 35,
        estadoActual: "Sunny",
        emoji: "☀️",
        humedad: 25,
        viento: 17,
        pronostico: [
            { dia: "Lunes", emoji: "☀️", min: 28, max: 36, estado: "Sunny" },
            { dia: "Martes", emoji: "☀️", min: 29, max: 37, estado: "Sunny" },
            { dia: "Miércoles", emoji: "☀️", min: 30, max: 38, estado: "Sunny" },
            { dia: "Jueves", emoji: "☀️", min: 27, max: 35, estado: "Sunny" },
            { dia: "Viernes", emoji: "☀️", min: 26, max: 34, estado: "Sunny" },
            { dia: "Sábado", emoji: "☀️", min: 28, max: 36, estado: "Sunny" },
            { dia: "Domingo", emoji: "☀️", min: 29, max: 37, estado: "Sunny" }
        ]
    },
    {
        id: 10,
        nombre: "Moscow",
        lat: 55.75,
        lng: 37.62,
        tempActual: -2,
        estadoActual: "Snowy",
        emoji: "❄️",
        humedad: 90,
        viento: 13,
        pronostico: [
            { dia: "Lunes", emoji: "❄️", min: -6, max: -3, estado: "Snowy" },
            { dia: "Martes", emoji: "❄️", min: -8, max: -5, estado: "Snowy" },
            { dia: "Miércoles", emoji: "☁️", min: -4, max: -1, estado: "Cloudy" },
            { dia: "Jueves", emoji: "❄️", min: -7, max: -4, estado: "Snowy" },
            { dia: "Viernes", emoji: "☁️", min: -3, max: 0, estado: "Cloudy" },
            { dia: "Sábado", emoji: "❄️", min: -5, max: -2, estado: "Snowy" },
            { dia: "Domingo", emoji: "❄️", min: -9, max: -6, estado: "Snowy" }
        ]
    },
    {
        id: 11,
        nombre: "Buenos Aires",
        lat: -34.61,
        lng: -58.38,
        tempActual: 19,
        estadoActual: "Windy",
        emoji: "💨",
        humedad: 63,
        viento: 31,
        pronostico: [
            { dia: "Lunes", emoji: "💨", min: 13, max: 18, estado: "Windy" },
            { dia: "Martes", emoji: "☀️", min: 15, max: 20, estado: "Sunny" },
            { dia: "Miércoles", emoji: "⛅", min: 14, max: 19, estado: "Partly Cloudy" },
            { dia: "Jueves", emoji: "💨", min: 12, max: 17, estado: "Windy" },
            { dia: "Viernes", emoji: "🌧️", min: 10, max: 15, estado: "Rainy" },
            { dia: "Sábado", emoji: "☀️", min: 17, max: 22, estado: "Sunny" },
            { dia: "Domingo", emoji: "☀️", min: 18, max: 23, estado: "Sunny" }
        ]
    },
    {
        id: 12,
        nombre: "Beijing",
        lat: 39.91,
        lng: 116.39,
        tempActual: 14,
        estadoActual: "Foggy",
        emoji: "🌫️",
        humedad: 84,
        viento: 7,
        pronostico: [
            { dia: "Lunes", emoji: "🌫️", min: 8, max: 13, estado: "Foggy" },
            { dia: "Martes", emoji: "☁️", min: 10, max: 15, estado: "Cloudy" },
            { dia: "Miércoles", emoji: "⛅", min: 12, max: 17, estado: "Partly Cloudy" },
            { dia: "Jueves", emoji: "🌫️", min: 9, max: 14, estado: "Foggy" },
            { dia: "Viernes", emoji: "☀️", min: 13, max: 18, estado: "Sunny" },
            { dia: "Sábado", emoji: "☁️", min: 11, max: 16, estado: "Cloudy" },
            { dia: "Domingo", emoji: "🌫️", min: 7, max: 12, estado: "Foggy" }
        ]
    }
];


export default ciudades;