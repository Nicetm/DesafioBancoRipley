const express = require('express');
const cors = require('cors');
const app = express();

// Configuración
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Rutas
app.use('/api/login', require('./routes/auth'));
app.use('/api/cliente', require('./routes/clientes'));
app.use('/api/banco', require('./routes/bancos'));
app.use('/api/tipocuenta', require('./routes/tipocuentas'));
app.use('/api/destinatario', require('./routes/destinatarios'));
app.use('/api/transaccion', require('./routes/transaccion'));
app.use('/api/historial', require('./routes/historial'));

// Arrancar Servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'));
})