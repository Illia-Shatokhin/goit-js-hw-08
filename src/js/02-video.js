import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  _.throttle(({ seconds }) => console.log(seconds), 1000)
);

player.setCurrentTime(133.1);
