// ==================== 1️⃣ console.log() ====================
// Menampilkan teks ke console browser (F12 → Console)
function outputConsole() {
  console.log("Halo dari console.log() 😎");
}

// ==================== 2️⃣ document.write() ====================
// Menulis langsung ke halaman web (akan menggantikan seluruh isi halaman)
function outputWrite() {
  document.write(
    "<h1 style='color:#00ff6a;'>Halo dari document.write() 👾</h1>"
  );
}

// ==================== 3️⃣ alert() ====================
// Menampilkan kotak pop-up (alert box)
function outputAlert() {
  alert("Halo Dunia! Ini alert dari JavaScript 💻");
}

// ==================== 4️⃣ innerHTML ====================
// Mengubah isi elemen HTML dengan id="output"
function outputInner() {
  document.getElementById("output").innerHTML =
    "Halo Dunia! Ini ditampilkan dengan innerHTML 🚀";
}
