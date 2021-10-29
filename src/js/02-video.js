import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);
const localStorageKey = "videoplayer-current-time";
console.log(player._window.localStorage);

player.setCurrentTime(localStorage.getItem(localStorageKey)).then(function(seconds) {
  seconds = localStorage.getItem(localStorageKey);
});

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(localStorageKey, seconds);
}

