const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes'); // Importa el archivo de rutas
const compraRoutes= require('./compraRoutes')
const app = express();
const port = 3000;

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(bodyParser.json());

// Usa las rutas con el prefijo /api
app.use('/api', routes);

app.use('/api/compras', compraRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
