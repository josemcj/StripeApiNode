const express = require('express');
const app = express();
const puerto = process.env.PORT || 4000;

app.use( express.json({ limit: '20mb' }) );
app.use( express.urlencoded({ extended: false, limit: '20mb'}));

// Rutas
app.use('/api', require('./routes/index'));

app.listen(puerto, () => console.log(`Servidor corriendo en el puerto ${puerto}`));