const readlineSync = require('readline-sync');

function haloUser() {
  const name = readlineSync.question('Masukkan nama Anda: ');
  console.log(`Halo, ${name}! Selamat datang di program ini.`);
}

module.exports = haloUser;
