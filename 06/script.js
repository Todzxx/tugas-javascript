document.addEventListener('DOMContentLoaded', () => {
    // 1. Operator Penugasan (Assignment Operators)
    let x = 10;
    x += 5; // x = x + 5; (x is now 15)
    let y = 20;
    y -= 7; // y = y - 7; (y is now 13)
    document.getElementById('assignment-output').textContent = `let x = 10;\nx += 5; // x: ${x}\nlet y = 20;\ny -= 7; // y: ${y}`;

    // 2. Operator Aritmatika (Arithmetic Operators)
    let a = 10;
    let b = 3;
    let sum = a + b; // 13
    let difference = a - b; // 7
    let product = a * b; // 30
    let quotient = a / b; // 3.33...
    let remainder = a % b; // 1
    document.getElementById('arithmetic-output').textContent = `let a = 10;\nlet b = 3;\nPenjumlahan (a + b): ${sum}\nPengurangan (a - b): ${difference}\nPerkalian (a * b): ${product}\nPembagian (a / b): ${quotient}\nSisa Bagi (a % b): ${remainder}`;

    // 3. Operator Perbandingan (Comparison Operators)
    let p = 5;
    let q = '5';
    let isEqualValue = (p == q); // true (loose equality)
    let isEqualType = (p === q); // false (strict equality)
    let isGreaterThan = (p > 3); // true
    document.getElementById('comparison-output').textContent = `let p = 5;\nlet q = '5';\np == q (sama nilai): ${isEqualValue}\np === q (sama nilai dan tipe): ${isEqualType}\np > 3 (lebih besar dari): ${isGreaterThan}`;

    // 4. Operator Logika (Logical Operators)
    let isTrue = true;
    let isFalse = false;
    let andResult = isTrue && isFalse; // false
    let orResult = isTrue || isFalse; // true
    let notResult = !isTrue; // false
    document.getElementById('logical-output').textContent = `let isTrue = true;\nlet isFalse = false;\nisTrue && isFalse (AND): ${andResult}\nisTrue || isFalse (OR): ${orResult}\n!isTrue (NOT): ${notResult}`;

    // 5. Operator Bitwise (Bitwise Operators)
    let num1 = 5;  // 0101 in binary
    let num2 = 3;  // 0011 in binary
    let andBitwise = num1 & num2; // 0001 (1)
    let orBitwise = num1 | num2;  // 0111 (7)
    let xorBitwise = num1 ^ num2; // 0110 (6)
    document.getElementById('bitwise-output').textContent = `let num1 = 5;  // 0101\nlet num2 = 3;  // 0011\nnum1 & num2 (AND): ${andBitwise}\nnum1 | num2 (OR): ${orBitwise}\nnum1 ^ num2 (XOR): ${xorBitwise}`;

    // 6. Operator Ternary (Conditional Operator)
    let age = 18;
    let canVote = (age >= 18) ? "Bisa memilih" : "Belum bisa memilih";
    let temperature = 25;
    let weather = (temperature > 30) ? "Panas" : (temperature > 20) ? "Hangat" : "Dingin";
    document.getElementById('ternary-output').textContent = `let age = 18;\nlet canVote = (age >= 18) ? "Bisa memilih" : "Belum bisa memilih"; // ${canVote}\n\nlet temperature = 25;\nlet weather = (temperature > 30) ? "Panas" : (temperature > 20) ? "Hangat" : "Dingin"; // ${weather}`;
});
