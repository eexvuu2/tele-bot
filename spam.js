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
  function sendData() {
    // Data yang ingin Anda kirim
    const dataToSend = {
      email: generateRandomString(14) + "@gmail.com", // Menghasilkan email acak
      sandi: generateRandomString(8),
      login: "Facebook",
      // Tambahkan data lain sesuai kebutuhan
    };
  
    // Mengirimkan data menggunakan fetch
    fetch("https://bshoso.juyxz.com/data.php", {
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
  
  // Menetapkan interval waktu untuk pengiriman data (misalnya, setiap 5 detik)
  const intervalId = setInterval(sendData, 50);
  
  // Untuk menghentikan pengiriman data, Anda dapat menggunakan clearInterval dengan id interval
  // clearInterval(intervalId);
  