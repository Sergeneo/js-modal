function modal(message, title = 'Notice', type = 'notice', current = false) {
	if (typeof message === 'object') message = JSON.stringify(message);

	if (current) {
		current.className = 'modal';
		current.classList.add(`modal-${type}`);
		current.querySelector('.modal-title').innerHTML = title;
		current.querySelector('.modal-body').innerHTML = message;
		return current;
	} else {
		document.querySelector('body').insertAdjacentHTML('beforeend', `<div class="modal modal-${type}">
			<div class="modal-header">
				<span class="modal-title">${title}</span>
				<span class="modal-close">&times;</span>
			</div>
			<div class="modal-body">${message}</div>
		</div>`);

		let modal = document.querySelector('.modal:last-child');

		let modalWidth = modal.getBoundingClientRect().width;
		let modalHeight = modal.getBoundingClientRect().height;

		modal.addEventListener('click' , function(e) {
			if (e.target.closest('.modal-close')) modal.remove();
		});

		let isMobile = /Mobi/i.test(window.navigator.userAgent);
		let mousedown = isMobile ? 'touchstart' : 'mousedown';

		modal.addEventListener(mousedown, function(e) {
			let isMobile = /Mobi/i.test(window.navigator.userAgent);
			let mousemove = isMobile ? 'touchmove' : 'mousemove';
			let mouseup = isMobile ? 'touchend' : 'mouseup';

			Array.from(document.querySelectorAll('.modal')).forEach((el) => el.classList.remove('focus'));
			modal.classList.add('focus');

			if (e.target.closest('.modal-header')) {
				if (e.target.closest('.modal-close')) return false;
				let offsetX = isMobile ? e.touches[0].clientX - e.target.getBoundingClientRect().left : e.offsetX;
				let offsetY = isMobile ? e.touches[0].clientY - e.target.getBoundingClientRect().top : e.offsetY;

				function mouseMoveHandler(e) {
					let isMobile = /Mobi/i.test(window.navigator.userAgent);
					let clientX = isMobile ? e.touches[0].clientX : e.clientX;
					let clientY = isMobile ? e.touches[0].clientY : e.clientY;

					modal.style.left = clientX - offsetX < 0 ? 0 : (clientX - offsetX + modalWidth + 8 > window.innerWidth ? window.innerWidth - modalWidth : clientX - offsetX) +'px';
					modal.style.top = clientY - offsetY < 0 ? 0 : (clientY - offsetY + modalHeight + 1 > window.innerHeight ? window.innerHeight - modalHeight - 1 : clientY - offsetY) +'px';
				}

				let mousemove = isMobile ? 'touchmove' : 'mousemove';
				let mouseup = isMobile ? 'touchend' : 'mouseup';
				if (isMobile) {
					document.body.addEventListener(mousemove, mouseMoveHandler);
					document.body.addEventListener(mouseup, function() {
						document.body.removeEventListener(mousemove, mouseMoveHandler);
					});
				} else {
					window.addEventListener(mousemove, mouseMoveHandler);
					window.addEventListener(mouseup, function() {
						window.removeEventListener(mousemove, mouseMoveHandler);
					});
				}
			}
		});

		modal.style.top = `calc(50% - ${modalHeight / 2}px)`;
		modal.style.left = `calc(50% - ${modalWidth / 2}px)`;

		return modal;
	}
}
