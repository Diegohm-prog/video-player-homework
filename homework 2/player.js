window.onload = inicio;
var videos = ["BEATLES.mp4", "Superman.mp4", "woody.mp4"];
var vid;
var videoActual = 2;
function inicio() {
  vid = document.querySelector("video");
  vid.src = `vid/${videos[videoActual]}`;
  document.querySelector(".play").onclick = play;
  document.querySelector(".volumen").onclick = volumen;
  // document.querySelector(".siguiente").onclick = siguiente;
  document.querySelector(".reiniciar").onclick = reiniciar;
  document.querySelector(".reducir").onclick = reducir;
  vid.ontimeupdate = actualizar;
}

function play() {

  if (vid.paused) {
    vid.play();
    document.querySelector(".play").src = "img/pause.svg";
  }
  else {
    vid.pause();
    document.querySelector(".play").src = "img/play_arrow_FILL0_wght400_GRAD0_opsz48.svg";
  }

}

function volumen() {
  if (vid.volume == 1) {
    vid.volume = 0;
    document.querySelector(".volumen").src = "img/volumen.svg";
  } else {
    vid.volume = 1;
    document.querySelector(".volumen").src = "img/volume_up.svg";
  }
}

function reproduce() {
  let videoToca = videoActual;
  vid.src = `vid/$videos[0, 1, 2, 3]}`;
  vid.play();
}



// // function siguiente() {
// //   videoActual++;

//   // if (videoActual >= videos.length) {
//   //   videoActual = 0;
//   // }
//   // reproduce(videoToca);
// }

function reiniciar() {
  vid.currentTime = 0;
}

function reducir() {
  let s = document.querySelector("section");
  if (s.style.transform == "scale(0.5)") {
    s.style.transform = "scale(1)";
    document.querySelector(".reducir").src = "img/fullscreen_exit_FILL0_wght400_GRAD0_opsz48.svg";
  } else {
    s.style.transform = "scale(0.5)";
    document.querySelector(".reducir").src = "img/fullscreen_exit_FILL0_wght400_GRAD0_opsz48.svg";
  }
}

