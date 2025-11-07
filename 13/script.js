document.addEventListener('DOMContentLoaded', () => {
    // Properti Objek Math
    let propertiesOutput = `Math.PI: ${Math.PI}\n`;
    propertiesOutput += `Math.E: ${Math.E}\n`;
    propertiesOutput += `Math.SQRT2: ${Math.SQRT2}`; // Square root of 2
    document.getElementById('math-properties-example').textContent = propertiesOutput;

    // Metode Math.round(), Math.floor(), Math.ceil()
    const num = 4.7;
    let roundOutput = `Angka: ${num}\n`;
    roundOutput += `Math.round(${num}): ${Math.round(num)}\n`; // 5
    roundOutput += `Math.floor(${num}): ${Math.floor(num)}\n`; // 4
    roundOutput += `Math.ceil(${num}): ${Math.ceil(num)}`; // 5
    document.getElementById('math-round-example').textContent = roundOutput;

    // Metode Math.random()
    let randomOutput = `Angka acak (0-1): ${Math.random().toFixed(4)}\n`;
    randomOutput += `Angka acak (1-10): ${Math.floor(Math.random() * 10) + 1}`; // Random integer between 1 and 10
    document.getElementById('math-random-example').textContent = randomOutput;

    // Metode Math.max(), Math.min()
    const nums = [10, 5, 20, 8];
    let minMaxOutput = `Angka: ${nums.join(', ')}\n`;
    minMaxOutput += `Math.max(${nums.join(', ')}): ${Math.max(...nums)}\n`; // 20
    minMaxOutput += `Math.min(${nums.join(', ')}): ${Math.min(...nums)}`; // 5
    document.getElementById('math-minmax-example').textContent = minMaxOutput;

    // Metode Math.sqrt(), Math.pow()
    const val = 9;
    let sqrtPowOutput = `Nilai: ${val}\n`;
    sqrtPowOutput += `Math.sqrt(${val}): ${Math.sqrt(val)}\n`; // 3
    sqrtPowOutput += `Math.pow(${val}, 2): ${Math.pow(val, 2)}`; // 81
    document.getElementById('math-sqrtpow-example').textContent = sqrtPowOutput;
});
