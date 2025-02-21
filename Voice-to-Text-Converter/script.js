const output = document.getElementById('output');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const copyBtn = document.getElementById('copy');

let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = true;
recognition.interimResults = true;

startBtn.addEventListener('click', () => {
    recognition.start();
    startBtn.textContent = "Listening...";
    startBtn.style.background = "#ff004f";
});

stopBtn.addEventListener('click', () => {
    recognition.stop();
    startBtn.textContent = "Start";
    startBtn.style.background = "#0a0a2a";
});

resetBtn.addEventListener('click', () => {
    output.value = '';
});

copyBtn.addEventListener('click', () => {
    output.select();
    document.execCommand('copy');
    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy", 1500);
});

recognition.onresult = (event) => {
    let transcript = '';
    for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
    }
    output.value = transcript;
};
