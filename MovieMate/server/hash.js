const bcrypt = require('bcrypt');

const password = '123'; // Contraseña en texto plano

bcrypt.hash(password, 10, (err, hashedPassword) => {
  if (err) {
    console.error('Error al generar el hash:', err);
  } else {
    console.log('Nuevo hash generado:', hashedPassword);
  }
});
