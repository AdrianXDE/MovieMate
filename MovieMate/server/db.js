const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'bwl0t7bpcuyafp6yz9vj-mysql.services.clever-cloud.com',
  user: 'u8drubrwafd4mydc',
  password: 'gBghlRXHlA9zk9IZ38ts', // Reemplaza con tu contraseña
  database: 'bwl0t7bpcuyafp6yz9vj'
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL RLD');
});

module.exports = db;
