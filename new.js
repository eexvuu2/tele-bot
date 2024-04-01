function getRandomImage() {
  return fetch("https://lust.scathach.id/pornhub/random")
    .then((response) => response.json())
    .then((result) => {
      return result.data.image;
    })
    .catch((error) => console.error("Error fetching image:", error));
}

function sendMessage(imageUrl) {
  const myHeaders = new Headers();
  const formData = new FormData();
  formData.append("chat_id", "@rmgopay");
  formData.append("photo", imageUrl);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formData,
    redirect: "follow",
  };

  return fetch(
    "https://api.telegram.org/bot7039779475:AAExVG7fDX4CwAEtxi0PcZnWCcu-KQRz42M/sendPhoto", // Replace with your Telegram bot token
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(`Success: ${result.result.message_id}`);
    })
    .catch((error) => console.error("Error sending message:", error));
}

function sendRandomImage() {
  getRandomImage()
    .then((imageUrl) => sendMessage(imageUrl))
    .catch((error) => console.error("Error:", error));
}

// Replace with your desired interval (in milliseconds)
const intervalId = setInterval(sendRandomImage, 3000);
