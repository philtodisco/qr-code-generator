// GET from qrserver API
// http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!&size=100x100

let input = document.querySelector(".form input")
let btn = document.querySelector(".form button")
let qrCode = document.querySelector(".qr-code img") 

btn.addEventListener('click', () => {
    let url = input.value
    // console.log(url)
    let image = `http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=200x200`
    qrCode.src = image
})