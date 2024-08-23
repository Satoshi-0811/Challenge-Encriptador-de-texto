function validateText() {
    const text = document.getElementById("inputText").value;
    const regex = /^[a-z\s]*$/;

    if (!regex.test(text)) {
        alert("Solo se permiten letras minúsculas, sin acentos ni caracteres especiales.");
        document.getElementById("inputText").value = text.replace(/[^a-z\s]/g, "");
    }
}

function encryptText() {
    let text = document.getElementById("inputText").value;
    if (text === "") return;

    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    displayOutput(encryptedText);
}

function decryptText() {
    let text = document.getElementById("inputText").value;
    if (text === "") return;

    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    displayOutput(decryptedText);
}

function displayOutput(text) {
    document.getElementById("placeholderImage").style.display = "none";
    const outputText = document.getElementById("outputText");
    outputText.style.display = "block";
    outputText.textContent = text;
}

function copyText() {
    const text = document.getElementById("outputText").textContent;
    if (text === "") return;

    navigator.clipboard.writeText(text).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
