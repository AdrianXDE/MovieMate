const bcrypt = require('bcrypt');

// El hash generado manualmente
const hashedPassword = '$2b$10$RpxgCCIfNnedUlzdMNaSb.9vqILRyMzx32mMSvO6RWgG2o5zcZORy';

// La contraseña en texto plano
const password = '123'; 

// Verifica la contraseña
bcrypt.compare(password, hashedPassword, (err, result) => {
  if (err) {
    console.error('Error al comparar la contraseña:', err);
  } else if (result) {
    console.log('Contraseña coincidente');
  } else {
    console.log('Contraseña no coincidente');
  }
});
