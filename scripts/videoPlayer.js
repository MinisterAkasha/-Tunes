export const videoPlayerInit = () => {
	const videoPlayer = document.querySelector('.video-player'),
				videoButtonPlay = document.querySelector('.video-button__play'),
				videoButtonStop = document.querySelector('.video-button__stop'),
				videoProgress = document.querySelector('.video-progress'),
				videoTimePassed = document.querySelector('.video-time__passed'),
				videoTimeTotal = document.querySelector('.video-time__total');

	const toggleIcon = () => {
		if (videoPlayer.paused) {
			videoButtonPlay.classList.remove('fa-pause');
			videoButtonPlay.classList.add('fa-play');
		} else {
			videoButtonPlay.classList.add('fa-pause');
			videoButtonPlay.classList.remove('fa-play');
		}
	};

	const togglePlay = () => {
		if (videoPlayer.paused) {
			videoPlayer.play();
		} else {
			videoPlayer.pause();
		}
	};

	const stopPlay = () => {
		videoPlayer.pause();
		videoPlayer.currentTime = 0;
	};

	const addZero = num => num < 10 ? '0' + num : num; 

	videoPlayer.addEventListener('click', togglePlay);
	videoButtonPlay.addEventListener('click', togglePlay);

	videoPlayer.addEventListener('play', toggleIcon);
	videoPlayer.addEventListener('pause', toggleIcon);
	
	videoPlayer.addEventListener('timeupdate', () => {
		const currentTime = videoPlayer.currentTime,
					duration = videoPlayer.duration;

		let minutePassed = Math.floor(currentTime / 60),
				secondsPassed = Math.floor(currentTime % 60),
				minuteTotal = Math.floor(duration / 60),
				secondsTotal = Math.floor(duration % 60);
	
		videoTimePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;
		videoTimeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;

		videoProgress.value = (currentTime / duration) * 100;
	});

	videoProgress.addEventListener('change', () => {
		const duration = videoPlayer.duration,
					value = videoProgress.value;

		videoPlayer.currentTime = (value * duration) / 100;
	});

	videoButtonStop.addEventListener('click', stopPlay);
};