document.addEventListener('DOMContentLoaded', () => {
    // 1. Percabangan if
    const nilaiUjian = 85;
    let hasilIf = 'Nilai awal.';
    if (nilaiUjian > 75) {
        hasilIf = `Nilai Anda ${nilaiUjian}, Anda Lulus!`;
    }
    document.getElementById('if-example').textContent = `Kondisi: nilaiUjian > 75\nNilai Ujian: ${nilaiUjian}\nHasil: ${hasilIf}`;

    // 2. Percabangan if...else
    const umur = 17;
    let hasilIfElse;
    if (umur >= 18) {
        hasilIfElse = 'Boleh membuat SIM.';
    } else {
        hasilIfElse = 'Belum boleh membuat SIM.';
    }
    document.getElementById('if-else-example').textContent = `Kondisi: umur >= 18\nUmur: ${umur}\nHasil: ${hasilIfElse}`;

    // 3. Percabangan if...else if...else
    const nilaiAbjad = 'B';
    let hasilIfElseIf;
    if (nilaiAbjad === 'A') {
        hasilIfElseIf = 'Sangat Baik';
    } else if (nilaiAbjad === 'B') {
        hasilIfElseIf = 'Baik';
    } else if (nilaiAbjad === 'C') {
        hasilIfElseIf = 'Cukup';
    } else {
        hasilIfElseIf = 'Kurang';
    }
    document.getElementById('if-else-if-example').textContent = `Kondisi: Memeriksa nilaiAbjad\nNilai: '${nilaiAbjad}'\nHasil: ${hasilIfElseIf}`;

    // 4. Percabangan switch
    const hari = 'Senin';
    let hasilSwitch;
    switch (hari) {
        case 'Senin':
            hasilSwitch = 'Hari kerja, semangat!';
            break;
        case 'Sabtu':
        case 'Minggu':
            hasilSwitch = 'Hari libur, yeay!';
            break;
        default:
            hasilSwitch = 'Hari biasa.';
    }
    document.getElementById('switch-example').textContent = `Kondisi: Memeriksa variabel hari\nNilai: '${hari}'\nHasil: ${hasilSwitch}`;

    // 5. Operator Ternary
    const cuaca = 'Hujan';
    const hasilTernary = (cuaca === 'Hujan') ? 'Bawa payung' : 'Tidak perlu bawa payung';
    document.getElementById('ternary-example').textContent = `Kondisi: cuaca === 'Hujan'\nCuaca: '${cuaca}'\nHasil: ${hasilTernary}`;

    // 6. Logical Operators (Short-circuiting)
    const adaTugas = true;
    // Jika adaTugas true, maka kerjakanTugas() akan dipanggil.
    const hasilLogical = adaTugas && 'Segera kerjakan tugas!';
    document.getElementById('logical-example').textContent = `Kondisi: adaTugas && 'Segera kerjakan tugas!'\nNilai adaTugas: ${adaTugas}\nHasil: ${hasilLogical}`;
});
