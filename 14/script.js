document.addEventListener('DOMContentLoaded', () => {
    const xhrOutput = document.getElementById('xhr-output');
    const fetchOutput = document.getElementById('fetch-output');
    const loadDataXHRBtn = document.getElementById('loadDataXHR');
    const loadDataFetchBtn = document.getElementById('loadDataFetch');

    // Menggunakan XMLHttpRequest
    loadDataXHRBtn.addEventListener('click', () => {
        xhrOutput.textContent = 'Memuat data menggunakan XHR...';
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                const data = JSON.parse(xhr.responseText);
                xhrOutput.textContent = `Data XHR berhasil dimuat:\nTitle: ${data.title}\nCompleted: ${data.completed}`;
            } else {
                xhrOutput.textContent = `Gagal memuat data XHR. Status: ${xhr.status}`;
            }
        };

        xhr.onerror = function() {
            xhrOutput.textContent = 'Terjadi kesalahan jaringan saat memuat data XHR.';
        };

        xhr.send();
    });

    // Menggunakan Fetch API
    loadDataFetchBtn.addEventListener('click', () => {
        fetchOutput.textContent = 'Memuat data menggunakan Fetch API...';
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                fetchOutput.textContent = `Data Fetch berhasil dimuat:\nTitle: ${data.title}\nBody: ${data.body.substring(0, 100)}...`;
            })
            .catch(error => {
                fetchOutput.textContent = `Gagal memuat data Fetch: ${error.message}`;
            });
    });
});
