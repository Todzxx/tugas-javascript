// Fungsi untuk mengubah teks saat tombol diklik
function ubahTeks() {
  const judul = document.getElementById("judul");
  judul.innerText = "Teksnya berubah! 😎";

  // Tambahkan efek animasi saat teks berubah
  judul.style.transition = "0.5s";
  judul.style.color = "#00adb5";
}
