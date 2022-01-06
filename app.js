// GET from qrserver API
// http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100

let urlInput = document.querySelector("#qr-input")
let btn = document.querySelector(".form button")
let qrCode = document.querySelector(".qr-code img") 

btn.addEventListener('click', () => {
    let url = urlInput.value
    // console.log(url)
    let image = `http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=200x200`
    qrCode.src = image
})