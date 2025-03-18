const pool = require('../db');

async function obtenerDatosRegistros() {
    try {
        const connection = await pool.getConnection(); // Obtener conexión del pool
        const [rows] = await connection.query('SELECT * FROM records'); // Ejecutar consulta
        connection.release(); // Liberar conexión al pool
        return rows;
    } catch (err) {
        console.error('❌ Error al obtener los datos de los registros:', err.message);
        throw err; // Propaga el error
    }
}

module.exports = { obtenerDatosRegistros };
