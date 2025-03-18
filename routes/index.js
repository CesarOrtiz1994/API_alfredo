
const { obtenerDatosRegistros } = require('../utils');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hola mundo');
});

//ruta para obtener los datos de los registros
router.get('/Registros', async (req, res) => {
    try {
        const registros = await obtenerDatosRegistros();
        res.send(registros);
    } catch (error) {
        console.error('Error al obtener los datos de los registros:', error.message);
        res.status(500).send({
            message: 'Error al obtener los datos de los registros',
            error: error.message
        });
    }
});

module.exports = router;