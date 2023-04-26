import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  _.throttle(
    ({ seconds }) =>
      localStorage.setItem('videoplayer-current-time', `${seconds}`),
    1000
  )
);

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
