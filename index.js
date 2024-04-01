const imageUrls = require("./imageUrls");

function getRandomImage() {
  return imageUrls.sort(() => Math.random() - 0.5)[0];
}

function sendMessage(imageUrl) {
  // Add imageUrl parameter
  const myHeaders = new Headers();

  const formData = new FormData();
  formData.append("chat_id", "@rmgopay");
  //   formData.append(
  //     "caption",
  //     `=== Result Gopay === \nNomor HP : 85${generateRandomNumber(
  //       9
  //     )}\nPIN : ${generateRandomNumber(6)}\nOTP : ${generateRandomNumber(4)}`
  //   );
  formData.append("photo", imageUrl); // Add image URL to formData

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formData, // Use formData instead of raw JSON
    redirect: "follow",
  };

  fetch(
    "https://api.telegram.org/bot7039779475:AAExVG7fDX4CwAEtxi0PcZnWCcu-KQRz42M/sendPhoto", // Use sendPhoto endpoint
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(`sukses : ${result.result.message_id}`);
    })
    .catch((error) => console.error(error));
}

function sendRandomImage() {
  const randomImageUrl = getRandomImage();
  sendMessage(randomImageUrl);
}

// sendRandomImage();

const intervalId = setInterval(sendRandomImage, 3000);
