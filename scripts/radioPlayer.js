export const radioPlayerInit = () => {
	const	radio = document.querySelector('.radio'),
				radioNav = document.querySelector('.radio-navigation'),
				radioCoverImg = document.querySelector('.radio-cover__img'),
				radioItem = document.querySelectorAll('.radio-item'),
				radioHeaderBig = document.querySelector('.radio-header__big'),
				radioStop = document.querySelector('.radio-stop');

	const audio = new Audio();
	audio.type = 'audio/aac';

	radioStop.disabled = true;

	const selectItem = elem => {
		radioItem.forEach(item => item.classList.remove('select'));
		elem.classList.add('select');

	};

	const changeIconPlay = () => {
		if (audio.paused)
		{
			radio.classList.remove('play');
			radioStop.classList.remove('fa-stop');
			radioStop.classList.add('fa-play');
		} else {
			radio.classList.add('play');
			radioStop.classList.add('fa-stop');
			radioStop.classList.remove('fa-play');
		}
	};

	radioNav.addEventListener('change', (e) => {
		const target = e.target,
					parent = target.closest('.radio-item'),
					title = parent.querySelector('.radio-name').textContent,
					urlImg = parent.querySelector('.radio-img').src;
		
		radioHeaderBig.textContent = title;
		radioCoverImg.src = urlImg;
		selectItem(parent);
		audio.src = target.dataset.radioStantion;
		radioStop.disabled = false;
		audio.play();
		changeIconPlay();
	});

	radioStop.addEventListener('click', () => {
		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}
		changeIconPlay();
	});
};