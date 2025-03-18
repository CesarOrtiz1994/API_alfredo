const db = require('../db');

//funcion para obtener todos los datos de los registros y devolverlos en json
async function obtenerDatosRegistros() {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM records`;
        db.all(query, [], (err, rows) => {
            if (err) {
                console.error('Error al obtener los datos de los registros:', err.message);
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}


module.exports = { obtenerDatosRegistros};