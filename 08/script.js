document.addEventListener('DOMContentLoaded', () => {
    // 1. Perulangan for
    let forResult = '';
    for (let i = 1; i <= 5; i++) {
        forResult += `Iterasi ke-${i}\n`;
    }
    document.getElementById('for-loop-example').textContent = forResult.trim();

    // 2. Perulangan while
    let whileResult = '';
    let j = 1;
    while (j <= 5) {
        whileResult += `Iterasi ke-${j}\n`;
        j++;
    }
    document.getElementById('while-loop-example').textContent = whileResult.trim();

    // 3. Perulangan do...while
    let doWhileResult = '';
    let k = 1;
    do {
        doWhileResult += `Iterasi ke-${k}\n`;
        k++;
    } while (k <= 5);
    document.getElementById('do-while-loop-example').textContent = doWhileResult.trim();

    // 4. Perulangan for...in
    const car = {
        brand: 'Toyota',
        model: 'Avanza',
        year: 2022
    };
    let forInResult = 'Properti objek mobil:\n';
    for (const key in car) {
        forInResult += `${key}: ${car[key]}\n`;
    }
    document.getElementById('for-in-loop-example').textContent = forInResult.trim();

    // 5. Perulangan for...of
    const fruits = ['Apel', 'Pisang', 'Ceri'];
    let forOfResult = 'Isi array buah:\n';
    for (const fruit of fruits) {
        forOfResult += `${fruit}\n`;
    }
    document.getElementById('for-of-loop-example').textContent = forOfResult.trim();
});
