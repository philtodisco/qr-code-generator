// GET from qrserver API
// http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100

let urlInput = document.querySelector("#qr-input")
let btn = document.querySelector(".form button")
let sizeInput = document.querySelector("#qr-size")
let qrSize = "200"
let qrCode = document.querySelector(".qr-code img")


btn.addEventListener('click', () => {
    let url = urlInput.value
    let qrSize = sizeInput.value
    if (url.length > 0) {
        let image = `http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=${qrSize}x${qrSize}`
    qrCode.src = image
    } else {
        alert("Please enter input greater than 0 characters")
    }
})

