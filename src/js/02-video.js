import Player from '@vimeo/player';
import _ from 'lodash';

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

player.on(
  'timeupdate',
  _.throttle(
    ({ seconds }) =>
      localStorage.setItem('videoplayer-current-time', `${seconds}`),
    1000
  )
);

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
