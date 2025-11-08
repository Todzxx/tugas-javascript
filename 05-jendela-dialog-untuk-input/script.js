document.addEventListener('DOMContentLoaded', () => {
    const showAlertBtn = document.getElementById('showAlert');
    const showPromptBtn = document.getElementById('showPrompt');
    const showConfirmBtn = document.getElementById('showConfirm');
    const outputDiv = document.getElementById('output');

    showAlertBtn.addEventListener('click', () => {
        alert('Ini adalah pesan alert! Anda hanya bisa menekan OK.');
        outputDiv.innerHTML = '<p>Alert ditampilkan. Tidak ada nilai yang dikembalikan.</p>';
    });

    showPromptBtn.addEventListener('click', () => {
        const nama = prompt('Silakan masukkan nama Anda:', 'John Doe');
        if (nama === null || nama === "") {
            outputDiv.innerHTML = '<p>Anda tidak memasukkan nama atau menekan Batal.</p>';
        } else {
            outputDiv.innerHTML = `<p>Halo, ${nama}! Anda memasukkan sebuah nilai.</p>`;
        }
    });

    showConfirmBtn.addEventListener('click', () => {
        const setuju = confirm('Apakah Anda setuju untuk melanjutkan?');
        if (setuju) {
            outputDiv.innerHTML = '<p>Anda menekan OK! Nilai yang dikembalikan adalah <strong>true</strong>.</p>';
        } else {
            outputDiv.innerHTML = '<p>Anda menekan Batal! Nilai yang dikembalikan adalah <strong>false</strong>.</p>';
        }
    });
});
