const videoElement = document.getElementById("video"),
      button = document.getElementById("button");
const constrains = { audio: true, video: true };

// Prompt user to select media stream

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch(error) {
        console.log(error);
    }
}

button.addEventListener("click", async () => {
    // Disable  button
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});
selectMediaStream();
