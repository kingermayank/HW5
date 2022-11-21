var vid = document.getElementById("videoplayer");
vid.removeAttribute("loop");
vid.autoplay= false;

document.getElementById("play").addEventListener("click", playVid);
function playVid() {
    vid.play();
}

document.getElementById("pause").addEventListener("click", pauseVid);
function pauseVid() {
    vid.pause();
}

var video_speed = [0.5, 1.0, 2.0]
var speed_index = 1

document.getElementById("slower").addEventListener("click", slowVid);
document.getElementById("faster").addEventListener("click", fastVid);

function slowVid() {
    speed_index = speed_index - 1
    if (speed_index < 0) {
        speed_index = 0
        window.alert("Video is at slowest speed!")
    }
    else {
    vid.playbackRate = video_speed[speed_index];
    }
}
function fastVid() {
    speed_index = speed_index + 1
    if (speed_index > 2) {
        speed_index = 2
        window.alert("Video is at fastest speed!")
    }
    else {
    vid.playbackRate = video_speed[speed_index];
    }
}

document.getElementById("mute").addEventListener("click", muteVid);

function muteVid() {
    if (vid.muted == false) {
        vid.muted = true;
        document.getElementById("mute").innerText = "Unmute"
    }
    else {
        vid.muted = false;
        document.getElementById("mute").innerText = "Mute"
    }


}

document.getElementById("skip").addEventListener("click", skipVid);
function skipVid(){
    seek_time = vid.currentTime + 15
    if (seek_time > vid.duration) {
        vid.currentTime = 0
        pauseVid()
    }
    else {
        vid.currentTime = seek_time;
    }
    
}

var volumeControl = document.getElementById('slider');
document.getElementById("volume").innerText = volumeControl.value
function setVolume(){
    vid.volume = this.value / 100;
};

function displayVolume() {
    document.getElementById("volume").innerText = volumeControl.value ;
}

volumeControl.addEventListener('input', displayVolume);
volumeControl.addEventListener('input',setVolume);
