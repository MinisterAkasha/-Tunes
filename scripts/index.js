import {radioPlayerInit} from './radioPlayer.js';
import {videoPlayerInit} from './videoPlayer.js';
import {musicPlayerInit} from './musicPlayer.js';


const   playerBtn = document.querySelectorAll('.player-btn'),
				playerBlock = document.querySelectorAll('.player-block'),
				temp = document.querySelector('.temp');

const deactivationPlayer = function() {
	temp.style.display = 'none';
	playerBlock.forEach(item => item.classList.remove('active'));
	playerBtn.forEach(item => item.classList.remove('active'));
};

playerBtn.forEach((btn, index) => {
	btn.addEventListener('click', (item) => {
		deactivationPlayer();
		btn.classList.add('active');
		playerBlock[index].classList.add('active');
	});
});

radioPlayerInit();
videoPlayerInit();
musicPlayerInit();