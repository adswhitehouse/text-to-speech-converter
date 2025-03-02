let speech = new SpeechSynthesisUtterance();
let listenBtn = document.querySelector(".jsListenBtn");
let textarea = document.querySelector("textarea");
let voiceSelect = document.querySelector("select");
let voices = [];

listenBtn.addEventListener("click", () => {
  speech.text = textarea.value;
  window.speechSynthesis.speak(speech);
});

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});
