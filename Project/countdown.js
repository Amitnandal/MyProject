const input = prompt("guess the no.");
var time = input*60;

const showCountdown = document.getElementById('h1');

const updateCountdown = ()=>{
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds :seconds;
    showCountdown.innerHTML = `${minutes} : ${seconds}`;

    time--;
}
setInterval(updateCountdown, 1000);