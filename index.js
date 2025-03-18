console.log("Iniciando servidor...");

if (process.env.RAILWAY_PUBLIC_DOMAIN !== undefined) {
    console.log("⚠️ Servidor en modo de producción. No se cargarán datos de prueba.");
} else {
    console.log("⚠️ Servidor en modo de desarrollo. Se cargarán datos de prueba.");
    require('dotenv').config();
}

const express = require('express');

const app = express();

// Configuración del puerto
app.set('port', process.env.PORT || 3020);
app.set('json spaces', 2);

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas
app.use(require('./routes'));

// Manejo de errores globales para evitar que la app se congele
app.use((err, req, res, next) => {
    console.error("Error detectado:", err);
    res.status(500).json({ error: "Error interno del servidor" });
});

// Iniciar el servidor
const server = app.listen(app.get('port'), () => {
    console.log(`✅ Server is running on port ${app.get('port')}`);
});
