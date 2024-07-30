const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('./db'); // Importa la conexión a la base de datos

// Ruta de registro de usuario
router.post('/register', async (req, res) => {
  const { name, apellido, contraseña, correo } = req.body;
  console.log('Solicitud de registro recibida:', { name, apellido, correo });
  
  try {
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const query = 'INSERT INTO users (name, apellido, correo, contraseña) VALUES (?, ?, ?, ?)';
    db.query(query, [name, apellido, correo, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error al registrar el usuario:', err);
        return res.status(500).json({ message: 'Error al registrar el usuario' });
      }
      console.log('Registro completado para:', correo);
      res.status(201).json({ message: 'Registro completado' });
    });
  } catch (err) {
    console.error('Error al registrar el usuario:', err);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
});

// Ruta de inicio de sesión
router.post('/login', async (req, res) => {
  const { correo, contraseña } = req.body;
  console.log('Solicitud de inicio de sesión recibida:', { correo });
  
  const query = 'SELECT * FROM users WHERE correo = ?';
  db.query(query, [correo], async (err, results) => {
    if (err) {
      console.error('Error en la base de datos:', err);
      return res.status(500).json({ message: 'Error en la base de datos' });
    }
    if (results.length === 0) {
      console.log('Usuario no encontrado:', correo);
      return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }
    const user = results[0];
    const match = await bcrypt.compare(contraseña, user.contraseña);
    if (match) {
      console.log('Inicio de sesión exitoso para:', correo);
      res.status(200).json({ message: 'Inicio de sesión completado' });
    } else {
      console.log('Contraseña incorrecta para:', correo);
      res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }
  });
});

// Ruta para crear un nuevo ticket
router.post('/compras', (req, res) => {
  const { cine, pelicula, hora, numeroBoletos, precio, nombreCliente, fecha, correo } = req.body;
  console.log('Solicitud de guardado de ticket recibida:', req.body);

  const query = 'INSERT INTO tickets (cine, pelicula, hora, numeroBoletos, precio, nombreCliente, fecha, correo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [cine, pelicula, hora, numeroBoletos, precio, nombreCliente, fecha, correo], (err, result) => {
    if (err) {
      console.error('Error al insertar el ticket:', err);
      return res.status(500).json({ message: 'Error al guardar el ticket' });
    }
    console.log('Ticket guardado exitosamente:', result);
    res.status(201).json({ message: 'Ticket guardado exitosamente' });
  });
});

// Ruta para obtener el historial de compras de un usuario específico
router.get('/compras/:correo', (req, res) => {
  const { correo } = req.params;
  console.log('Solicitud de historial de compras recibida para:', correo);

  const query = 'SELECT * FROM tickets WHERE correo = ?';
  db.query(query, [correo], (err, results) => {
    if (err) {
      console.error('Error al obtener el historial de compras:', err);
      return res.status(500).json({ message: 'Error al obtener el historial de compras' });
    }
    res.json(results);
  });
});

module.exports = router;
