const qrContainer = document.querySelector('#qr-container'); 
const qrtextinput = document.querySelector('.input-Text');
const errormessagetext = document.querySelector('.error-message-text'); 
const generateQrCodebutton = document.querySelector('.generate-qr-code-btn');

generateQrCodebutton.addEventListener('click', () => {
    validateInputField();
});

function validateInputField() {
    if (qrtextinput.value.trim().length > 0) {
        generateQrcode();
    } else {
        errormessagetext.textContent = "⚠️ Enter the text to generate a QR code"; 
    }
}

function generateQrcode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrtextinput.value,
        height: 200, 
        width: 200, 
        colorLight: '#fff',
        colorDark: '#000'
    });

    qrtextinput.value = "";
    errormessagetext.textContent = "";
}
