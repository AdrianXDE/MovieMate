const express = require('express');
const router = express.Router();
const authenticateToken = require('./auth');
const compraController = require('./compraController');

// Ruta para obtener compras
router.get('/compras/:correo', authenticateToken, compraController.getCompras);

module.exports = router;
