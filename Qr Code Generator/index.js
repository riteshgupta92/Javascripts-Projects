let qrText = document.getElementById("qrText");
let imageBox = document.getElementsByClassName("imageBox")[0];
let qrImage = document.getElementById("qrImage");

function generateQrCode() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imageBox.classList.add("show-img");
  }else{
    setInterval(()=>{
        qrText.classList.add("error")
    },1000)
  }
}
