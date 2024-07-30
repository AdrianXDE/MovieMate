// compraController.js
const pool = require('./db');

const getCompras = async (req, res) => {
  const userEmail = req.user.email; // Obtener el email del usuario autenticado desde el token
  const requestedEmail = req.params.correo;

  if (userEmail !== requestedEmail) {
    return res.status(403).json({ message: 'Access denied' });
  }

  try {
    const [result] = await pool.query('SELECT * FROM compras WHERE correo = ?', [requestedEmail]);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving purchase history' });
  }
};

module.exports = {
  getCompras,
};
