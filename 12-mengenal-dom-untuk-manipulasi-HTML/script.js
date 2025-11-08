document.addEventListener('DOMContentLoaded', () => {
    // 1. Memilih Elemen
    const myParagraph = document.getElementById('myParagraph');
    const changeTextBtn = document.getElementById('changeTextBtn');

    changeTextBtn.addEventListener('click', () => {
        myParagraph.textContent = 'Teks paragraf telah diubah oleh JavaScript!';
    });

    // 2. Memanipulasi Konten
    const manipulatedParagraph = document.getElementById('manipulatedParagraph');
    const myImage = document.getElementById('myImage');
    const changeImageBtn = document.getElementById('changeImageBtn');

    changeImageBtn.addEventListener('click', () => {
        manipulatedParagraph.innerHTML = '<em>Teks ini sekarang miring!</em>';
        myImage.src = 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Gambar+Baru';
        myImage.alt = 'Gambar Baru';
    });

    // 3. Menangani Event
    const eventBtn = document.getElementById('eventBtn');
    const eventOutput = document.getElementById('eventOutput');

    eventBtn.addEventListener('click', () => {
        eventOutput.textContent = 'Tombol diklik!';
    });

    // 4. Membuat dan Menghapus Elemen
    const myList = document.getElementById('myList');
    const addElementBtn = document.getElementById('addElementBtn');
    const removeElementBtn = document.getElementById('removeElementBtn');
    let itemCount = 0;

    addElementBtn.addEventListener('click', () => {
        itemCount++;
        const newItem = document.createElement('li');
        newItem.textContent = `Item baru ${itemCount}`;
        myList.appendChild(newItem);
    });

    removeElementBtn.addEventListener('click', () => {
        if (myList.lastChild) {
            myList.removeChild(myList.lastChild);
            itemCount--;
        }
    });
});
