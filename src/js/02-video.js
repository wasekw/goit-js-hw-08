import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);
const localStorageKey = "videoplayer-current-time";
// console.log(player._window.localStorage);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
  localStorage.setItem(localStorageKey, event.seconds === event.duration ? 0 : event.seconds);
}

if (localStorage.getItem(localStorageKey)) {
  player.setCurrentTime(Number.parseFloat(localStorage.getItem(localStorageKey)));
}

