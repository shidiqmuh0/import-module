const readlineSync = require('readline-sync');

// Fungsi untuk menghasilkan angka acak antara min dan max
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Fungsi untuk meminta tebakan pengguna dan memberikan umpan balik
const tebakAngka = () => {
  const randomNumber = generateRandomNumber(1, 100); // Menghasilkan angka acak antara 1 dan 100
  let guessedNumber;
  let attempts = 0;

  console.log("Halo! Saya telah memilih angka antara 1 dan 100. Silakan tebak:");

  do {
    guessedNumber = parseInt(readlineSync.question("Tebakan Anda: "));
    attempts++;

    if (guessedNumber < randomNumber) {
      console.log("Tebakan Anda terlalu rendah, coba lagi.");
    } else if (guessedNumber > randomNumber) {
      console.log("Tebakan Anda terlalu tinggi, coba lagi.");
    } else {
      console.log(`Selamat! Anda menebak angka (${randomNumber}) dengan benar dalam ${attempts} percobaan.`);
    }
  } while (guessedNumber !== randomNumber);
};

// Ekspor fungsi guessNumber agar bisa digunakan di luar modul
module.exports = tebakAngka;
