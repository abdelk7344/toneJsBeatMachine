let start = false;
let playBtn = document.getElementById("playBtn");
let i = 0;
const loop = new Tone.Loop(repeat, "8n").start(0);
document.getElementById("playBtn").onclick = function () {
  start = !start;
  if (start) {
    playBtn.innerHTML = "Stop";
    Tone.Transport.start();
  } else {
    playBtn.innerHTML = "Play";
    Tone.Transport.stop();
  }
};

function repeat() {
  const sound1 = new Tone.Player("Samples/clap-808.wav").toDestination();
  const sound2 = new Tone.Player("Samples/kick-808.wav").toDestination();
  const sound3 = new Tone.Player("Samples/hihat-808.wav").toDestination();
  const sound4 = new Tone.Player("Samples/shaker-suckup.wav").toDestination();
  const soundOneCurrId = "s1n" + ((i % 8) + 1);
  const soundTwoCurrId = "s2n" + ((i % 8) + 1);
  const soundThreeCurrId = "s3n" + ((i % 8) + 1);
  const soundFourCurrId = "s4n" + ((i % 8) + 1);
  if (document.getElementById(soundOneCurrId).checked) {
    sound1.autostart = true;
  }
  if (document.getElementById(soundTwoCurrId).checked) {
    sound2.autostart = true;
  }
  if (document.getElementById(soundThreeCurrId).checked) {
    sound3.autostart = true;
  }
  if (document.getElementById(soundFourCurrId).checked) {
    sound4.autostart = true;
  }

  i++;
}
