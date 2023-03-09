// //Вызов выпадающего списка в подменю в шапке
function submenuOpen () {
  document.querySelectorAll('.header-submenu__btn').forEach((button) => {
    button.addEventListener('click', function(e) {
      document.querySelectorAll('.header-submenu__item').forEach(item => {
        if (item.querySelector('.header-submenu__btn') !== button)
        item.classList.remove('open');
      });
      e._isClick = true;
      button.parentElement.classList.toggle('open');
    });
  });
  document.body.addEventListener('click', function(e) {
    if (e._isClick == true ||
        e.target.classList.contains('header-submenu__btn') == true ||
        e.target.classList.contains('simplebar-content') == true)
       return
    document.querySelectorAll('.header-submenu__item').forEach(item => {
      item.classList.remove('open');
    });
  });
};
submenuOpen();

/*Поиск*/
document.getElementById('header__search').addEventListener('submit', (e) => {
  e.preventDefault();
});

document.getElementById('header__search-buttom').addEventListener('submit', (e) => {
  e.preventDefault();
});

document.getElementById('btn-serch').addEventListener('click', () => {
  document.getElementById('header__search').classList.add('header__search-active')
});

document.getElementById('btn-exit').addEventListener('click', () => {
  document.getElementById('header__search').classList.remove('header__search-active')
});

//Бургер меню
document.querySelector('.header__burger').addEventListener('click',
function() {
  document.getElementById('header').classList.toggle('open');
});

//Choice gallery
const element = document.getElementById('js-choice');
const choices = new Choices(element, {
      searchEnabled: false,
      placeholder: false,
      placeholderValue: null,
      itemSelectText: '',
    });

//Slider gallery
const swiper = new Swiper('.gallery__slider-container', {
  slidesPerGroup: 1,
  slidesPerView: 1,
  autoHeight: false,
  breakpoints: {
    1440: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50,
    },
    576: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34,
    },
  },
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    clickable: false,
    dynamicBullets: true,
    dynamicMainBullets: 2,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    containerMessage: 'Галерея изображений',
    paginationBulletMessage: `Слайд {{index}}`,
    slideLabelMessage: '{{index}} / {{slidesLength}}',
    enabled: true,
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Первый слайд',
    lastSlideMessage: 'Последний слайд',
  },
});

//Аккордеон
new Accordion('.accordion-container');


//Tab
document.querySelectorAll('.catalog__link').forEach(function(prop) {

  prop.addEventListener('click', function(e) {
    const  path = e.currentTarget.dataset.path;

    document.querySelectorAll('.catalog__link').forEach(function(link) {
      link.classList.remove('catalog__link--active')});
    e.currentTarget.classList.add('catalog__link--active');

    document.querySelectorAll('.card-tab').forEach(function(prop) {
      prop.classList.remove('card-active')});

    document.querySelector(`[data-target="${path}"]`).classList.add('card-active');
    document.querySelector(`[data-target="${path}"]`).scrollIntoView();
  })
})

 //Slider Events
 const swiperEvents = new Swiper('.events__slider', {
  slidesPerGroup: 1,
  slidesPerView: 1,
   autoHeight: false,
  breakpoints: {
    1024: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 27,
    },
    576: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34,
    },
  },
  loop: false,
  navigation: {
    nextEl: '.swiper-but-ev-next',
    prevEl: '.swiper-but-ev-prev',
    hideOnClick: true
  },
  pagination: {
    el: ".swiper-event-pagination",
    type: "bullets",
    clickable: true
  },
  a11y: {
    containerMessage: 'Галерея событий',
    paginationBulletMessage: `Слайд {{index}}`,
    slideLabelMessage: '{{index}} / {{slidesLength}}',
    enabled: true,
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Первый слайд',
    lastSlideMessage: 'Последний слайд',
  },
});


//Tooltip
tippy('.marker-tooltip')

//Slider Project
const swiperProj = new Swiper('.projects__swiper-container', {
  slidesPerGroup: 1,
  slidesPerView: 1,

  breakpoints: {
    1440: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      spaceBetween: 50,
    },
    576: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34,
    },
  },
  loop: false,
  navigation: {
    nextEl: '.swiper-but-pr-next',
    prevEl: '.swiper-but-pr-prev',
  },
  a11y: {
    containerMessage: 'Галерея проектов',
    paginationBulletMessage: `Слайд {{index}}`,
    slideLabelMessage: '{{index}} / {{slidesLength}}',
    enabled: true,
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Первый слайд',
    lastSlideMessage: 'Последний слайд',
  },
});

//Валидация
var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

new JustValidate('#form', {
  rules: {
  name: {
    required: true,
    minLength: 2,
    maxLength: 15,
    strength: {
      custom: 'a-zA-Z'
    }
  },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10;
      }
    },
  },
    messages: {
      name: {
        required: 'Вы не ввели имя',
        minLength: 'Минимум 2 символа',
        strength: 'Недопустимый формат'
      },
      tel: {
        required: 'Вы не ввели телефон',
        function: 'Недопустимый формат'
      },
    }
});

//Map
ymaps.ready(init);

function init(){
  var myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 14
  });

  let myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/icons/map_icon.svg',
    iconImageSize: [20, 20],
  });
  myMap.behaviors.disable('scrollZoom') //Отключение скрола колесиком
  myMap.geoObjects.add(myPlacemark)
}


