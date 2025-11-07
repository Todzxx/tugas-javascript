document.addEventListener('DOMContentLoaded', () => {
    // 1. Deklarasi Fungsi
    function sapa(nama) {
        return `Halo, ${nama}! Ini dari Deklarasi Fungsi.`;
    }
    document.getElementById('declaration-example').textContent = `sapa('Budi');\nHasil: ${sapa('Budi')}`;

    // 2. Ekspresi Fungsi
    const sapaLagi = function(nama) {
        return `Hai lagi, ${nama}! Ini dari Ekspresi Fungsi.`;
    };
    document.getElementById('expression-example').textContent = `sapaLagi('Ani');\nHasil: ${sapaLagi('Ani')}`;

    // 3. Fungsi Panah (Arrow Function)
    const kuadrat = (angka) => angka * angka;
    document.getElementById('arrow-example').textContent = `kuadrat(5);\nHasil: ${kuadrat(5)}`;

    // Contoh Program: Kalkulator Sederhana
    const tambah = (a, b) => a + b;
    const kurang = (a, b) => a - b;
    const kali = (a, b) => a * b;
    const bagi = (a, b) => (b === 0) ? 'Tidak bisa dibagi dengan 0' : a / b;

    let hasilKalkulator = `Operasi Kalkulator:\n`;
    hasilKalkulator += `10 + 5 = ${tambah(10, 5)}\n`;
    hasilKalkulator += `10 - 5 = ${kurang(10, 5)}\n`;
    hasilKalkulator += `10 * 5 = ${kali(10, 5)}\n`;
    hasilKalkulator += `10 / 5 = ${bagi(10, 5)}`;

    document.getElementById('calculator-example').textContent = hasilKalkulator;
});
