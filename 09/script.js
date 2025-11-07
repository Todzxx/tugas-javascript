document.addEventListener('DOMContentLoaded', () => {
    // Membuat Array
    const fruits = ['Apel', 'Pisang', 'Mangga'];
    document.getElementById('create-array-example').textContent = `const fruits = ['Apel', 'Pisang', 'Mangga'];\nHasil: [${fruits.join(', ')}]`;

    // Mengakses Elemen Array
    const firstFruit = fruits[0];
    const secondFruit = fruits[1];
    document.getElementById('access-array-example').textContent = `Elemen pertama (fruits[0]): ${firstFruit}\nElemen kedua (fruits[1]): ${secondFruit}`;

    // Properti .length
    const fruitCount = fruits.length;
    document.getElementById('length-prop-example').textContent = `Jumlah buah (fruits.length): ${fruitCount}`;

    // Metode .push() & .pop()
    let pushPopResult = `Array awal: [${fruits.join(', ')}]\n`;
    fruits.push('Leci');
    pushPopResult += `Setelah .push('Leci'): [${fruits.join(', ')}]\n`;
    const removedFruit = fruits.pop();
    pushPopResult += `Elemen yang dihapus dengan .pop(): ${removedFruit}\n`;
    pushPopResult += `Array akhir: [${fruits.join(', ')}]`;
    document.getElementById('push-pop-example').textContent = pushPopResult;

    // Metode .map()
    const numbers = [1, 2, 3, 4];
    const doubledNumbers = numbers.map(num => num * 2);
    document.getElementById('map-example').textContent = `Array angka: [${numbers.join(', ')}]\nSetelah .map(num => num * 2): [${doubledNumbers.join(', ')}]`;

    // Metode .filter()
    const ages = [15, 20, 17, 25, 30];
    const adults = ages.filter(age => age >= 18);
    document.getElementById('filter-example').textContent = `Array umur: [${ages.join(', ')}]\nSetelah .filter(age => age >= 18): [${adults.join(', ')}]`;
});
