const output = document.getElementById('output');

let content = '<h2>Variabel</h2>';
content += '<p>Variabel adalah wadah untuk menyimpan nilai data. Di Javascript, kita bisa menggunakan <span class="code">var</span>, <span class="code">let</span>, atau <span class="code">const</span> untuk mendeklarasikan variabel.</p>';

content += '<h3>Contoh:</h3>';
content += '<p><span class="code">let nama = "John Doe";</span></p>';
content += '<p><span class="code">let umur = 30;</span></p>';

content += '<h2>Tipe Data</h2>';
content += '<p>Javascript memiliki beberapa tipe data:</p>';
content += '<ul>';
content += '<li><b>String:</b> untuk teks, contoh: <span class="code">"Hello World"</span></li>';
content += '<li><b>Number:</b> untuk angka, contoh: <span class="code">10</span>, <span class="code">3.14</span></li>';
content += '<li><b>Boolean:</b> untuk nilai benar atau salah, contoh: <span class="code">true</span>, <span class="code">false</span></li>';
content += '<li><b>Object:</b> untuk koleksi data, contoh: <span class="code">{ nama: "Jane", umur: 25 }</span></li>';
content += '<li><b>Array:</b> untuk daftar nilai, contoh: <span class="code">["apel", "pisang", "ceri"]</span></li>';
content += '<li><b>Null:</b> untuk nilai kosong yang disengaja</li>';
content += '<li><b>Undefined:</b> untuk variabel yang dideklarasikan tetapi belum diberi nilai</li>';
content += '</ul>';

output.innerHTML = content;
