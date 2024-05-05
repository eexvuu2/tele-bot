const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Fungsi untuk menghasilkan string acak
function generateRandomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Fungsi untuk mengirim data
rl.question("Masukkan link target: ", (link) => {
  rl.question("Masukkan durasi target: ", (duration) => {
    function sendData() {
      // Data yang ingin Anda kirim
      const dataToSend = {
        email: generateRandomString(14) + "@gmail.com", // Menghasilkan email acak
        sandi: generateRandomString(8),
        login: "Facebook",
        // Tambahkan data lain sesuai kebutuhan
      };

      // Mengirimkan data menggunakan fetch
      fetch(link, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Mengatur tipe konten menjadi JSON
        },
        body: JSON.stringify(dataToSend), // Mengonversi objek JavaScript menjadi string JSON
      })
        .then((response) => {
          if (response.ok) {
            console.log("=======================");
            console.log("Data berhasil dikirim:");
            console.log("Email:", dataToSend.email);
            console.log("Sandi:", dataToSend.sandi);
            // Lakukan tindakan lanjutan setelah data berhasil dikirim
          } else {
            console.error("Gagal mengirim data");
          }
        })
        .catch((error) => {
          console.error("Ada kesalahan:", error);
        });
    }

    const intervalId = setInterval(sendData, duration);

    rl.close();
  });
});

// Menetapkan interval waktu untuk pengiriman data (misalnya, setiap 5 detik)

// Untuk menghentikan pengiriman data, Anda dapat menggunakan clearInterval dengan id interval
// clearInterval(intervalId);
