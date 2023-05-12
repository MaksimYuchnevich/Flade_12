//---Menu

const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body

if (burger && menu) {
	burger.addEventListener('click', () => {
		burger.classList.toggle('_active');
		menu.classList.toggle('_active');
		body.classList.toggle('_lock');
	})
}

//---Filter dropdown

const filter = document.querySelector('.filter');

if (filter) {
	const items = filter.querySelectorAll('.block-filter')

	items.forEach(item => {
		item.addEventListener('click', event => {
			item.querySelector('.block-filter__dropdown').classList.toggle('_active');
			item.querySelector('.block-filter__icon').classList.toggle('_active');

			if (event.target.classList.contains('block-filter__item')) {
				item.querySelector('.block-filter__value').textContent = event.target.textContent;
			}
		})
	})
}

//---Swiper

const popularSlider = new Swiper('.popular-slider', {
	spaceBetween: 20,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.popular-slider-next',
		prevEl: '.popular-slider-prev',
	},
	breakpoints: {
		992: {
			slidesPerView: 3,
		},
		660: {
			slidesPerView: 2,
		}
	}
});

const reviewsSlider = new Swiper('.slider-reviews', {
	spaceBetween: 20,
	slidesPerView: 1,
	autoHeight: true,
	navigation: {
		nextEl: '.slider-reviews-next',
		prevEl: '.slider-reviews-prev',
	},
});

//---Gallery

const galleryItems = document.querySelectorAll(".gallery__item");

if (galleryItems.length > 0) {
	galleryItems.forEach(item => {
		new Swiper(item, {
			slidesPerView: 1, 
			autoplay: {
				delay: 5000,
			},
			effect: 'fade',
		})
	})
}



window.addEventListener('DOMContentLoaded', function() {
	var xhr = new XMLHttpRequest();
  
	xhr.onreadystatechange = function() {
	  if (xhr.readyState === 4 && xhr.status === 200) {
		var xmlDoc = xhr.responseXML;
		var scheduleElement = document.getElementById('schedule');
  
		var days = xmlDoc.getElementsByTagName('day');
		for (var i = 0; i < days.length; i++) {
		  var dayElement = document.createElement('div');
		  dayElement.classList.add('day');
		  dayElement.style.setProperty('--i', i);  
		  var nameElement = document.createElement('h2');
		  nameElement.textContent = days[i].getElementsByTagName('name')[0].textContent;
  
		  var timeElement = document.createElement('p');
		  timeElement.textContent = 'Время: ' + days[i].getElementsByTagName('time')[0].textContent;
  
		  var taskElement = document.createElement('p');
		  taskElement.textContent = 'Задача: ' + days[i].getElementsByTagName('task')[0].textContent;
  
		  dayElement.appendChild(nameElement);
		  dayElement.appendChild(timeElement);
		  dayElement.appendChild(taskElement);
  
		  scheduleElement.appendChild(dayElement);
		}
	  }
	};
  
	xhr.open('GET', 'schedule.xml', true);
	xhr.send();
  });
  