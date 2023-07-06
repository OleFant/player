var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'jfKfPfyJRdk',
    playerVars: {
      autoplay: 1,
      controls: 1,
      fs: 0,
      rel: 0,
      showinfo: 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerReady(event) {
  event.target.playVideo();
}
function onPlayerStateChange(event) {
  //...
}