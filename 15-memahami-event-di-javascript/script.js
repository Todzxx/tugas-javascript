document.addEventListener('DOMContentLoaded', () => {
    // 1. Event Listener (Click Event)
    const clickMeBtn = document.getElementById('clickMeBtn');
    const clickOutput = document.getElementById('clickOutput');

    clickMeBtn.addEventListener('click', () => {
        clickOutput.textContent = 'Tombol telah diklik!';
    });

    // 2. Event Mouse (mouseover, mouseout)
    const hoverBox = document.getElementById('hoverBox');
    const hoverOutput = document.getElementById('hoverOutput');

    hoverBox.addEventListener('mouseover', () => {
        hoverOutput.textContent = 'Status hover: Mouse di atas kotak.';
    });

    hoverBox.addEventListener('mouseout', () => {
        hoverOutput.textContent = 'Status hover: Mouse keluar dari kotak.';
    });

    // 3. Event Keyboard (keydown)
    const keyInput = document.getElementById('keyInput');
    const keyOutput = document.getElementById('keyOutput');

    keyInput.addEventListener('keydown', (event) => {
        keyOutput.textContent = `Tombol terakhir ditekan: ${event.key} (Kode: ${event.keyCode})`;
    });

    // 4. Event Form (submit)
    const myForm = document.getElementById('myForm');
    const nameInput = document.getElementById('nameInput');
    const formOutput = document.getElementById('formOutput');

    myForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah halaman reload
        const name = nameInput.value;
        formOutput.textContent = `Form disubmit! Nama: ${name}`;
    });
});
