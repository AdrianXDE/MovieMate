const bcrypt = require('bcrypt'); // Asegúrate de incluir esta línea
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Reemplaza con tu contraseña
  database: 'lol'
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

// Función para actualizar la contraseña de un usuario
async function updatePassword(email, plainPassword) {
  try {
    // Generar el hash para la contraseña
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // Consulta para actualizar la contraseña
    const query = 'UPDATE users SET contraseña = ? WHERE correo = ?';
    
    // Ejecutar la consulta
    db.query(query, [hashedPassword, email], (err, result) => {
      if (err) {
        console.error('Error al actualizar la contraseña:', err);
        return;
      }
      console.log('Contraseña actualizada para:', email);
    });
  } catch (err) {
    console.error('Error al generar el hash:', err);
  } finally {
    // Cerrar la conexión a la base de datos
    db.end();
  }
}

// Llamar a la función con el email y la contraseña proporcionados
updatePassword('robertoledam@gmail.com', '123');


