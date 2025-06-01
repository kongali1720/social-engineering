#!/usr/bin/env node

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
🧠 SOCIAL ENGINEERING SIMULATOR
--------------------------------
Simulasi edukasi teknik manipulasi sosial.
Tujuan: menyadarkan pentingnya keamanan informasi pribadi.

Contoh: "Hallo, saya dari tim teknis. Bisa bantu verifikasi akun kamu?"
`);

rl.question('\nSiapakah nama lengkapmu? ', (nama) => {
  rl.question('Apa nama hewan peliharaan pertamamu? ', (hewan) => {
    rl.question('Kapan kamu pertama kali bikin akun email? (tahun) ', (tahun) => {
      console.log(`\n🔍 Data yang berhasil dikumpulkan:
      - Nama: ${nama}
      - Hewan Peliharaan: ${hewan}
      - Tahun Buat Email: ${tahun}

⚠️ Dalam skenario nyata, info ini bisa dipakai untuk reset password atau tebak pertanyaan keamanan.
`);
      rl.close();
    });
  });
});
