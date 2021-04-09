"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function email_test(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
} //BildSlider


var sliders = document.querySelectorAll('._swiper');

if (sliders) {
  for (var index = 0; index < sliders.length; index++) {
    var _slider = sliders[index];

    if (!_slider.classList.contains('swiper-bild')) {
      var slider_items = _slider.children;

      if (slider_items) {
        for (var _index = 0; _index < slider_items.length; _index++) {
          var el = slider_items[_index];
          el.classList.add('swiper-slide');
        }
      }

      var slider_content = _slider.innerHTML;
      var slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      _slider.innerHTML = '';

      _slider.appendChild(slider_wrapper);

      _slider.classList.add('swiper-bild');

      if (_slider.classList.contains('_swiper_scroll')) {
        var sliderScroll = document.createElement('div');
        sliderScroll.classList.add('swiper-scrollbar');

        _slider.appendChild(sliderScroll);
      }
    }

    if (_slider.classList.contains('_gallery')) {//slider.data('lightGallery').destroy(true);
    }
  }

  sliders_bild_callback();
} // function sliders_bild_callback(params) { }


var sliderScrollItems = document.querySelectorAll('._swiper_scroll');

if (sliderScrollItems.length > 0) {
  for (var _index2 = 0; _index2 < sliderScrollItems.length; _index2++) {
    var sliderScrollItem = sliderScrollItems[_index2];
    var sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');

    var _sliderScroll = new Swiper(sliderScrollItem, {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: sliderScrollBar,
        draggable: true,
        snapOnRelease: false
      },
      mousewheel: {
        releaseOnEdges: true
      }
    });

    _sliderScroll.scrollbar.updateSize();
  }
}

function sliders_bild_callback(params) {}

var slider = new Swiper('.slider-block__wrapper', {
  /*
  effect: 'fade',
  */
  // autoplay: {
  // 	delay: 4000,
  // 	disableOnInteraction: false,
  // },
  observer: true,
  observeParents: true,
  slidesPerView: 2,
  spaceBetween: 0,
  autoHeight: false,
  speed: 800,
  //touchRatio: 0,
  //simulateTouch: false,
  // loop: true,
  //preloadImages: false,
  //lazy: true,
  // Dotts
  // pagination: {
  // 	el: '.slider-clients__pagging',
  // 	clickable: true,
  // },
  // Arrows
  navigation: {
    nextEl: '.slider-block__next',
    prevEl: '.slider-block__prev'
  },

  /*
  breakpoints: {
  	320: {
  		slidesPerView: 1,
  		spaceBetween: 0,
  		autoHeight: true,
  	},
  	768: {
  		slidesPerView: 2,
  		spaceBetween: 20,
  	},
  	992: {
  		slidesPerView: 3,
  		spaceBetween: 20,
  	},
  	1268: {
  		slidesPerView: 4,
  		spaceBetween: 30,
  	},
  },
  */
  on: {
    lazyImageReady: function lazyImageReady() {
      ibg();
    }
  } // And if we need scrollbar
  //scrollbar: {
  //	el: '.swiper-scrollbar',
  //},

});
var sliderClients = new Swiper('.slider-clients__wrapper', {
  /*
  effect: 'fade',
  */
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  observer: true,
  observeParents: true,
  slidesPerView: 3,
  spaceBetween: 0,
  autoHeight: false,
  speed: 800,
  //touchRatio: 0,
  //simulateTouch: false,
  // loop: true,
  //preloadImages: false,
  //lazy: true,
  // Dotts
  pagination: {
    el: '.slider-clients__pagging',
    clickable: true
  },
  // Arrows
  // navigation: {
  // 	nextEl: '.slider-block__next',
  // 	prevEl: '.slider-block__prev',
  // },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    516: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    } // 992: {
    // 	slidesPerView: 3,
    // 	spaceBetween: 20,
    // },
    // 1268: {
    // 	slidesPerView: 4,
    // 	spaceBetween: 30,
    // },

  },
  on: {
    lazyImageReady: function lazyImageReady() {
      ibg();
    }
  } // And if we need scrollbar
  //scrollbar: {
  //	el: '.swiper-scrollbar',
  //},

});
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
  Android: function Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}

if (isIE()) {
  document.querySelector('body').classList.add('ie');
}

if (isMobile.any()) {
  document.querySelector('body').classList.add('_touch');
}

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('_webp');
  } else {
    document.querySelector('body').classList.add('_no-webp');
  }
});

function ibg() {
  if (isIE()) {
    var _ibg = document.querySelectorAll("._ibg");

    for (var i = 0; i < _ibg.length; i++) {
      if (_ibg[i].querySelector('img') && _ibg[i].querySelector('img').getAttribute('src') != null) {
        _ibg[i].style.backgroundImage = 'url(' + _ibg[i].querySelector('img').getAttribute('src') + ')';
      }
    }
  }
}

ibg();

if (document.querySelector('.wrapper')) {
  document.querySelector('.wrapper').classList.add('_loaded');
}

var unlock = true; //=================
//ActionsOnHash

if (location.hash) {
  var hsh = location.hash.replace('#', '');

  if (document.querySelector('.popup_' + hsh)) {
    popup_open(hsh);
  } else if (document.querySelector('div.' + hsh)) {
    _goto(document.querySelector('.' + hsh), 500, '');
  }
} //=================
//Menu


var iconMenu = document.querySelector(".icon-menu");

if (iconMenu != null) {
  var delay = 500;
  var menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", function (e) {
    if (unlock) {
      body_lock(delay);
      iconMenu.classList.toggle("_active");
      menuBody.classList.toggle("_active");
    }
  });
}

;

function menu_close() {
  var iconMenu = document.querySelector(".icon-menu");
  var menuBody = document.querySelector(".menu__body");
  iconMenu.classList.remove("_active");
  menuBody.classList.remove("_active");
} //=================
//BodyLock


function body_lock(delay) {
  var body = document.querySelector("body");

  if (body.classList.contains('_lock')) {
    body_lock_remove(delay);
  } else {
    body_lock_add(delay);
  }
}

function body_lock_remove(delay) {
  var body = document.querySelector("body");

  if (unlock) {
    var lock_padding = document.querySelectorAll("._lp");
    setTimeout(function () {
      for (var _index3 = 0; _index3 < lock_padding.length; _index3++) {
        var _el = lock_padding[_index3];
        _el.style.paddingRight = '0px';
      }

      body.style.paddingRight = '0px';
      body.classList.remove("_lock");
    }, delay);
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
}

function body_lock_add(delay) {
  var body = document.querySelector("body");

  if (unlock) {
    var lock_padding = document.querySelectorAll("._lp");

    for (var _index4 = 0; _index4 < lock_padding.length; _index4++) {
      var _el2 = lock_padding[_index4];
      _el2.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    }

    body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    body.classList.add("_lock");
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, delay);
  }
} //=================
// LettersAnimation


var title = document.querySelectorAll('._letter-animation');

if (title) {
  for (var _index5 = 0; _index5 < title.length; _index5++) {
    var _el3 = title[_index5];
    var txt = _el3.innerHTML;
    var txt_words = txt.replace('  ', ' ').split(' ');
    var new_title = '';

    for (var _index6 = 0; _index6 < txt_words.length; _index6++) {
      var txt_word = txt_words[_index6];
      var len = txt_word.length;
      new_title = new_title + '<p>';

      for (var _index7 = 0; _index7 < len; _index7++) {
        var it = txt_word.substr(_index7, 1);

        if (it == ' ') {
          it = '&nbsp;';
        }

        new_title = new_title + '<span>' + it + '</span>';
      }

      _el3.innerHTML = new_title;
      new_title = new_title + '&nbsp;</p>';
    }
  }
} //=================
//Tabs


var tabs = document.querySelectorAll("._tabs");

var _loop = function _loop(_index8) {
  var tab = tabs[_index8];
  var tabs_items = tab.querySelectorAll("._tabs-item");
  var tabs_blocks = tab.querySelectorAll("._tabs-block");

  var _loop11 = function _loop11(_index41) {
    var tabs_item = tabs_items[_index41];
    tabs_item.addEventListener("click", function (e) {
      for (var _index42 = 0; _index42 < tabs_items.length; _index42++) {
        var _tabs_item = tabs_items[_index42];

        _tabs_item.classList.remove('_active');

        tabs_blocks[_index42].classList.remove('_active');
      }

      tabs_item.classList.add('_active');

      tabs_blocks[_index41].classList.add('_active');

      e.preventDefault();
    });
  };

  for (var _index41 = 0; _index41 < tabs_items.length; _index41++) {
    _loop11(_index41);
  }
};

for (var _index8 = 0; _index8 < tabs.length; _index8++) {
  _loop(_index8);
} //=================
//Spollers


var spollers = document.querySelectorAll("._spoller");
var spollersGo = true;

if (spollers.length > 0) {
  var _loop2 = function _loop2(_index9) {
    var spoller = spollers[_index9];
    spoller.addEventListener("click", function (e) {
      if (spollersGo) {
        spollersGo = false;

        if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
          return false;
        }

        if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
          return false;
        }

        if (spoller.closest('._spollers').classList.contains('_one')) {
          var curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');

          for (var _i = 0; _i < curent_spollers.length; _i++) {
            var _el4 = curent_spollers[_i];

            if (_el4 != spoller) {
              _el4.classList.remove('_active');

              _slideUp(_el4.nextElementSibling);
            }
          }
        }

        spoller.classList.toggle('_active');

        _slideToggle(spoller.nextElementSibling);

        setTimeout(function () {
          spollersGo = true;
        }, 500);
      }
    });
  };

  for (var _index9 = 0; _index9 < spollers.length; _index9++) {
    _loop2(_index9);
  }
} //=================
//Gallery


var gallery = document.querySelectorAll('._gallery');

if (gallery) {
  gallery_init();
}

function gallery_init() {
  for (var _index10 = 0; _index10 < gallery.length; _index10++) {
    var _el5 = gallery[_index10];
    lightGallery(_el5, {
      counter: false,
      selector: 'a',
      download: false
    });
  }
} //=================
//SearchInList


function search_in_list(input) {
  var ul = input.parentNode.querySelector('ul');
  var li = ul.querySelectorAll('li');
  var filter = input.value.toUpperCase();

  for (i = 0; i < li.length; i++) {
    var _el6 = li[i];
    var item = _el6;
    txtValue = item.textContent || item.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      _el6.style.display = "";
    } else {
      _el6.style.display = "none";
    }
  }
} //=================
//DigiFormat


function digi(str) {
  var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
  return r;
} //=================
//DiGiAnimate


function digi_animate(digi_animate) {
  if (digi_animate.length > 0) {
    for (var _index11 = 0; _index11 < digi_animate.length; _index11++) {
      var _el7 = digi_animate[_index11];
      var el_to = parseInt(_el7.innerHTML.replace(' ', ''));

      if (!_el7.classList.contains('_done')) {
        digi_animate_value(_el7, 0, el_to, 1500);
      }
    }
  }
}

function digi_animate_value(el, start, end, duration) {
  var obj = el;
  var range = end - start; // no timer shorter than 50ms (not really visible any way)

  var minTimer = 50; // calc step time to show all interediate values

  var stepTime = Math.abs(Math.floor(duration / range)); // never go below minTimer

  stepTime = Math.max(stepTime, minTimer); // get current time and calculate desired end time

  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
    var now = new Date().getTime();
    var remaining = Math.max((endTime - now) / duration, 0);
    var value = Math.round(end - remaining * range);
    obj.innerHTML = digi(value);

    if (value == end) {
      clearInterval(timer);
    }
  }

  timer = setInterval(run, stepTime);
  run();
  el.classList.add('_done');
} //=================
//Popups


var popup_link = document.querySelectorAll('._popup-link');
var popups = document.querySelectorAll('.popup');

var _loop3 = function _loop3(_index12) {
  var el = popup_link[_index12];
  el.addEventListener('click', function (e) {
    if (unlock) {
      var item = el.getAttribute('href').replace('#', '');
      var video = el.getAttribute('data-video');
      popup_open(item, video);
    }

    e.preventDefault();
  });
};

for (var _index12 = 0; _index12 < popup_link.length; _index12++) {
  _loop3(_index12);
}

for (var _index13 = 0; _index13 < popups.length; _index13++) {
  var popup = popups[_index13];
  popup.addEventListener("click", function (e) {
    if (!e.target.closest('.popup__body')) {
      popup_close(e.target.closest('.popup'));
    }
  });
}

function popup_open(item) {
  var video = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var activePopup = document.querySelectorAll('.popup._active');

  if (activePopup.length > 0) {
    popup_close('', false);
  }

  var curent_popup = document.querySelector('.popup_' + item);

  if (curent_popup && unlock) {
    if (video != '' && video != null) {
      var popup_video = document.querySelector('.popup_video');
      popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    }

    if (!document.querySelector('.menu__body._active')) {
      body_lock_add(500);
    }

    curent_popup.classList.add('_active');
    history.pushState('', '', '#' + item);
  }
}

function popup_close(item) {
  var bodyUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (unlock) {
    if (!item) {
      for (var _index14 = 0; _index14 < popups.length; _index14++) {
        var _popup = popups[_index14];

        var video = _popup.querySelector('.popup__video');

        if (video) {
          video.innerHTML = '';
        }

        _popup.classList.remove('_active');
      }
    } else {
      var _video = item.querySelector('.popup__video');

      if (_video) {
        _video.innerHTML = '';
      }

      item.classList.remove('_active');
    }

    if (!document.querySelector('.menu__body._active') && bodyUnlock) {
      body_lock_remove(500);
    }

    history.pushState('', '', window.location.href.split('#')[0]);
  }
}

var popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');

if (popup_close_icon) {
  var _loop4 = function _loop4(_index15) {
    var el = popup_close_icon[_index15];
    el.addEventListener('click', function () {
      popup_close(el.closest('.popup'));
    });
  };

  for (var _index15 = 0; _index15 < popup_close_icon.length; _index15++) {
    _loop4(_index15);
  }
}

document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape') {
    popup_close();
  }
}); //=================
//SlideToggle

var _slideUp = function _slideUp(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.transitionProperty = 'height, margin, padding';
  target.style.transitionDuration = duration + 'ms';
  target.style.height = target.offsetHeight + 'px';
  target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(function () {
    target.style.display = 'none';
    target.style.removeProperty('height');
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
};

var _slideDown = function _slideDown(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  target.style.removeProperty('display');
  var display = window.getComputedStyle(target).display;
  if (display === 'none') display = 'block';
  target.style.display = display;
  var height = target.offsetHeight;
  target.style.overflow = 'hidden';
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = duration + 'ms';
  target.style.height = height + 'px';
  target.style.removeProperty('padding-top');
  target.style.removeProperty('padding-bottom');
  target.style.removeProperty('margin-top');
  target.style.removeProperty('margin-bottom');
  window.setTimeout(function () {
    target.style.removeProperty('height');
    target.style.removeProperty('overflow');
    target.style.removeProperty('transition-duration');
    target.style.removeProperty('transition-property');
    target.classList.remove('_slide');
  }, duration);
};

var _slideToggle = function _slideToggle(target) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');

    if (window.getComputedStyle(target).display === 'none') {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  }
}; //========================================
//Wrap


function _wrap(el, wrapper) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
} //========================================
//RemoveClasses


function _removeClasses(el, class_name) {
  for (var i = 0; i < el.length; i++) {
    el[i].classList.remove(class_name);
  }
} //========================================
//IsHidden


function _is_hidden(el) {
  return el.offsetParent === null;
} //========================================
//Animate


function animate(_ref) {
  var timing = _ref.timing,
      draw = _ref.draw,
      duration = _ref.duration;
  var start = performance.now();
  requestAnimationFrame(function animate(time) {
    // timeFraction изменяется от 0 до 1
    var timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1; // вычисление текущего состояния анимации

    var progress = timing(timeFraction);
    draw(progress); // отрисовать её

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  };
}

function makeEaseInOut(timing) {
  return function (timeFraction) {
    if (timeFraction < .5) return timing(2 * timeFraction) / 2;else return (2 - timing(2 * (1 - timeFraction))) / 2;
  };
}

function quad(timeFraction) {
  return Math.pow(timeFraction, 2);
}

function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/
//Полифилы


(function () {
  // проверяем поддержку
  if (!Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})();

(function () {
  // проверяем поддержку
  if (!Element.prototype.matches) {
    // определяем свойство
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})(); //let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');


var forms = document.querySelectorAll('form');

if (forms.length > 0) {
  for (var _index16 = 0; _index16 < forms.length; _index16++) {
    var _el8 = forms[_index16];

    _el8.addEventListener('submit', form_submit);
  }
}

function form_submit(_x) {
  return _form_submit.apply(this, arguments);
}

function _form_submit() {
  _form_submit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
    var btn, form, error, formAction, formMethod, message, ajax, formData, response, result, form_error;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            btn = e.target;
            form = btn.closest('form');
            error = form_validate(form);

            if (!(error == 0)) {
              _context.next = 28;
              break;
            }

            formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
            formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
            message = form.getAttribute('data-message');
            ajax = form.getAttribute('data-ajax'); //SendForm

            if (!ajax) {
              _context.next = 26;
              break;
            }

            e.preventDefault();
            formData = new FormData(form);
            form.classList.add('_sending');
            _context.next = 14;
            return fetch(formAction, {
              method: formMethod,
              body: formData
            });

          case 14:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 24;
              break;
            }

            _context.next = 18;
            return response.json();

          case 18:
            result = _context.sent;
            form.classList.remove('_sending');

            if (message) {
              popup_open('_' + message + '-message');
            }

            form_clean(form);
            _context.next = 26;
            break;

          case 24:
            alert("Ошибка");
            form.classList.remove('_sending');

          case 26:
            _context.next = 31;
            break;

          case 28:
            form_error = form.querySelectorAll('._error');

            if (form_error && form.classList.contains('_goto-error')) {
              _goto(form_error[0], 1000, 50);
            }

            e.preventDefault();

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _form_submit.apply(this, arguments);
}

function form_validate(form) {
  var error = 0;
  var form_req = form.querySelectorAll('._req');

  if (form_req.length > 0) {
    for (var _index17 = 0; _index17 < form_req.length; _index17++) {
      var _el9 = form_req[_index17];

      if (!_is_hidden(_el9)) {
        error += form_validate_input(_el9);
      }
    }
  }

  return error;
}

function form_validate_input(input) {
  var error = 0;
  var input_g_value = input.getAttribute('data-value');

  if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
    if (input.value != input_g_value) {
      var em = input.value.replace(" ", "");
      input.value = em;
    }

    if (email_test(input) || input.value == input_g_value) {
      form_add_error(input);
      error++;
    } else {
      form_remove_error(input);
    }
  } else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
    form_add_error(input);
    error++;
  } else {
    if (input.value == '' || input.value == input_g_value) {
      form_add_error(input);
      error++;
    } else {
      form_remove_error(input);
    }
  }

  return error;
}

function form_add_error(input) {
  input.classList.add('_error');
  input.parentElement.classList.add('_error');
  var input_error = input.parentElement.querySelector('.form__error');

  if (input_error) {
    input.parentElement.removeChild(input_error);
  }

  var input_error_text = input.getAttribute('data-error');

  if (input_error_text && input_error_text != '') {
    input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
  }
}

function form_remove_error(input) {
  input.classList.remove('_error');
  input.parentElement.classList.remove('_error');
  var input_error = input.parentElement.querySelector('.form__error');

  if (input_error) {
    input.parentElement.removeChild(input_error);
  }
}

function form_clean(form) {
  var inputs = form.querySelectorAll('input,textarea');

  for (var _index18 = 0; _index18 < inputs.length; _index18++) {
    var _el10 = inputs[_index18];

    _el10.parentElement.classList.remove('_focus');

    _el10.classList.remove('_focus');

    _el10.value = _el10.getAttribute('data-value');
  }

  var checkboxes = form.querySelectorAll('.checkbox__input');

  if (checkboxes.length > 0) {
    for (var _index19 = 0; _index19 < checkboxes.length; _index19++) {
      var checkbox = checkboxes[_index19];
      checkbox.checked = false;
    }
  }

  var selects = form.querySelectorAll('select');

  if (selects.length > 0) {
    for (var _index20 = 0; _index20 < selects.length; _index20++) {
      var select = selects[_index20];
      var select_default_value = select.getAttribute('data-default');
      select.value = select_default_value;
      select_item(select);
    }
  }
}

var viewPass = document.querySelectorAll('.form__viewpass');

var _loop5 = function _loop5(_index21) {
  var element = viewPass[_index21];
  element.addEventListener("click", function (e) {
    if (element.classList.contains('_active')) {
      element.parentElement.querySelector('input').setAttribute("type", "password");
    } else {
      element.parentElement.querySelector('input').setAttribute("type", "text");
    }

    element.classList.toggle('_active');
  });
};

for (var _index21 = 0; _index21 < viewPass.length; _index21++) {
  _loop5(_index21);
} //Select


var selects = document.getElementsByTagName('select');

if (selects.length > 0) {
  selects_init();
}

function selects_init() {
  for (var _index22 = 0; _index22 < selects.length; _index22++) {
    var select = selects[_index22];
    select_init(select);
  } //select_callback();


  document.addEventListener('click', function (e) {
    selects_close(e);
  });
  document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
      selects_close(e);
    }
  });
}

function selects_close(e) {
  var selects = document.querySelectorAll('.select');

  if (!e.target.closest('.select')) {
    for (var _index23 = 0; _index23 < selects.length; _index23++) {
      var select = selects[_index23];
      var select_body_options = select.querySelector('.select__options');
      select.classList.remove('_active');

      _slideUp(select_body_options, 100);
    }
  }
}

function select_init(select) {
  var select_parent = select.parentElement;
  var select_modifikator = select.getAttribute('class');
  var select_selected_option = select.querySelector('option:checked');
  select.setAttribute('data-default', select_selected_option.value);
  select.style.display = 'none';
  select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');
  var new_select = select.parentElement.querySelector('.select');
  new_select.appendChild(select);
  select_item(select);
}

function select_item(select) {
  var select_parent = select.parentElement;
  var select_items = select_parent.querySelector('.select__item');
  var select_options = select.querySelectorAll('option');
  var select_selected_option = select.querySelector('option:checked');
  var select_selected_text = select_selected_option.text;
  var select_type = select.getAttribute('data-type');

  if (select_items) {
    select_items.remove();
  }

  var select_type_content = '';

  if (select_type == 'input') {
    select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
  } else {
    select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
  }

  select_parent.insertAdjacentHTML('beforeend', '<div class="select__item">' + '<div class="select__title">' + select_type_content + '</div>' + '<div class="select__options">' + select_get_options(select_options) + '</div>' + '</div></div>');
  select_actions(select, select_parent);
}

function select_actions(original, select) {
  var select_item = select.querySelector('.select__item');
  var select_body_options = select.querySelector('.select__options');
  var select_options = select.querySelectorAll('.select__option');
  var select_type = original.getAttribute('data-type');
  var select_input = select.querySelector('.select__input');
  select_item.addEventListener('click', function () {
    var selects = document.querySelectorAll('.select');

    for (var _index24 = 0; _index24 < selects.length; _index24++) {
      var _select = selects[_index24];

      var _select_body_options = _select.querySelector('.select__options');

      if (_select != select_item.closest('.select')) {
        _select.classList.remove('_active');

        _slideUp(_select_body_options, 100);
      }
    }

    _slideToggle(select_body_options, 100);

    select.classList.toggle('_active');
  });

  var _loop6 = function _loop6(_index25) {
    var select_option = select_options[_index25];
    var select_option_value = select_option.getAttribute('data-value');
    var select_option_text = select_option.innerHTML;

    if (select_type == 'input') {
      select_input.addEventListener('keyup', select_search);
    } else {
      if (select_option.getAttribute('data-value') == original.value) {
        select_option.style.display = 'none';
      }
    }

    select_option.addEventListener('click', function () {
      for (var _index26 = 0; _index26 < select_options.length; _index26++) {
        var _el11 = select_options[_index26];
        _el11.style.display = 'block';
      }

      if (select_type == 'input') {
        select_input.value = select_option_text;
        original.value = select_option_value;
      } else {
        select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
        original.value = select_option_value;
        select_option.style.display = 'none';
      }
    });
  };

  for (var _index25 = 0; _index25 < select_options.length; _index25++) {
    _loop6(_index25);
  }
}

function select_get_options(select_options) {
  if (select_options) {
    var select_options_content = '';

    for (var _index27 = 0; _index27 < select_options.length; _index27++) {
      var select_option = select_options[_index27];
      var select_option_value = select_option.value;

      if (select_option_value != '') {
        var select_option_text = select_option.text;
        select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
      }
    }

    return select_options_content;
  }
}

function select_search(e) {
  var select_block = e.target.closest('.select ').querySelector('.select__options');
  var select_options = e.target.closest('.select ').querySelectorAll('.select__option');
  var select_search_text = e.target.value.toUpperCase();

  for (var _i2 = 0; _i2 < select_options.length; _i2++) {
    var select_option = select_options[_i2];
    var select_txt_value = select_option.textContent || select_option.innerText;

    if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
      select_option.style.display = "";
    } else {
      select_option.style.display = "none";
    }
  }
}

function selects_update_all() {
  var selects = document.querySelectorAll('select');

  if (selects) {
    for (var _index28 = 0; _index28 < selects.length; _index28++) {
      var select = selects[_index28];
      select_item(select);
    }
  }
} //Placeholers


var inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
inputs_init(inputs);

function inputs_init(inputs) {
  if (inputs.length > 0) {
    var _loop7 = function _loop7(_index29) {
      var input = inputs[_index29];
      var input_g_value = input.getAttribute('data-value');
      input_placeholder_add(input);

      if (input.value != '' && input.value != input_g_value) {
        input_focus_add(input);
      }

      input.addEventListener('focus', function (e) {
        if (input.value == input_g_value) {
          input_focus_add(input);
          input.value = '';
        }

        if (input.getAttribute('data-type') === "pass") {
          input.setAttribute('type', 'password');
        }

        if (input.classList.contains('_date')) {
          /*
          input.classList.add('_mask');
          Inputmask("99.99.9999", {
          	//"placeholder": '',
          	clearIncomplete: true,
          	clearMaskOnLostFocus: true,
          	onincomplete: function () {
          		input_clear_mask(input, input_g_value);
          	}
          }).mask(input);
          */
        }

        if (input.classList.contains('_phone')) {
          //'+7(999) 999 9999'
          //'+38(999) 999 9999'
          //'+375(99)999-99-99'
          input.classList.add('_mask');
          Inputmask("+375 (99) 9999999", {
            //"placeholder": '',
            clearIncomplete: true,
            clearMaskOnLostFocus: true,
            onincomplete: function onincomplete() {
              input_clear_mask(input, input_g_value);
            }
          }).mask(input);
        }

        if (input.classList.contains('_digital')) {
          input.classList.add('_mask');
          Inputmask("9{1,}", {
            "placeholder": '',
            clearIncomplete: true,
            clearMaskOnLostFocus: true,
            onincomplete: function onincomplete() {
              input_clear_mask(input, input_g_value);
            }
          }).mask(input);
        }

        form_remove_error(input);
      });
      input.addEventListener('blur', function (e) {
        if (input.value == '') {
          input.value = input_g_value;
          input_focus_remove(input);

          if (input.classList.contains('_mask')) {
            input_clear_mask(input, input_g_value);
          }

          if (input.getAttribute('data-type') === "pass") {
            input.setAttribute('type', 'text');
          }
        }
      });

      if (input.classList.contains('_date')) {
        datepicker(input, {
          customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
          formatter: function formatter(input, date, instance) {
            var value = date.toLocaleDateString();
            input.value = value;
          },
          onSelect: function onSelect(input, instance, date) {
            input_focus_add(input.el);
          }
        });
      }
    };

    for (var _index29 = 0; _index29 < inputs.length; _index29++) {
      _loop7(_index29);
    }
  }
}

function input_placeholder_add(input) {
  var input_g_value = input.getAttribute('data-value');

  if (input.value == '' && input_g_value != '') {
    input.value = input_g_value;
  }
}

function input_focus_add(input) {
  input.classList.add('_focus');
  input.parentElement.classList.add('_focus');
}

function input_focus_remove(input) {
  input.classList.remove('_focus');
  input.parentElement.classList.remove('_focus');
}

function input_clear_mask(input, input_g_value) {
  input.inputmask.remove();
  input.value = input_g_value;
  input_focus_remove(input);
} //QUANTITY


var quantityButtons = document.querySelectorAll('.quantity__button');

if (quantityButtons.length > 0) {
  var _loop8 = function _loop8(_index30) {
    var quantityButton = quantityButtons[_index30];
    quantityButton.addEventListener("click", function (e) {
      var value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);

      if (quantityButton.classList.contains('quantity__button_plus')) {
        value++;
      } else {
        value = value - 1;

        if (value < 1) {
          value = 1;
        }
      }

      quantityButton.closest('.quantity').querySelector('input').value = value;
    });
  };

  for (var _index30 = 0; _index30 < quantityButtons.length; _index30++) {
    _loop8(_index30);
  }
} //RANGE


var priceSlider = document.querySelector('.price-filter__slider');

if (priceSlider) {
  var setPriceValues = function setPriceValues() {
    var priceStartValue;
    var priceEndValue;

    if (priceStart.value != '') {
      priceStartValue = priceStart.value;
    }

    if (priceEnd.value != '') {
      priceEndValue = priceEnd.value;
    }

    priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
  };

  noUiSlider.create(priceSlider, {
    start: [0, 200000],
    connect: true,
    tooltips: [wNumb({
      decimals: 0
    }), wNumb({
      decimals: 0
    })],
    range: {
      'min': [0],
      'max': [200000]
    }
  });
  var priceStart = document.getElementById('price-start');
  var priceEnd = document.getElementById('price-end');
  priceStart.addEventListener('change', setPriceValues);
  priceEnd.addEventListener('change', setPriceValues);
}

var scr_body = document.querySelector('body');
var scr_blocks = document.querySelectorAll('._scr-sector');
var scr_items = document.querySelectorAll('._scr-item');
var scr_fix_block = document.querySelectorAll('._side-wrapper');
var scr_min_height = 750;
var scrolling = true;
var scrolling_full = true;
var scrollDirection = 0; //ScrollOnScroll

window.addEventListener('scroll', scroll_scroll);

function scroll_scroll() {
  //scr_body.setAttribute('data-scroll', pageYOffset);
  var src_value = pageYOffset;
  var header = document.querySelector('header.header');

  if (header !== null) {
    if (src_value > 10) {
      header.classList.add('_scroll');
    } else {
      header.classList.remove('_scroll');
    }
  }

  if (scr_blocks.length > 0) {
    for (var _index31 = 0; _index31 < scr_blocks.length; _index31++) {
      var block = scr_blocks[_index31];
      var block_offset = offset(block).top;
      var block_height = block.offsetHeight;

      if (pageYOffset > block_offset - window.innerHeight / 1.5 && pageYOffset < block_offset + block_height - window.innerHeight / 5) {
        block.classList.add('_scr-sector_active');
      } else {
        if (block.classList.contains('_scr-sector_active')) {
          block.classList.remove('_scr-sector_active');
        }
      }

      if (pageYOffset > block_offset - window.innerHeight / 2 && pageYOffset < block_offset + block_height - window.innerHeight / 5) {
        if (!block.classList.contains('_scr-sector_current')) {
          block.classList.add('_scr-sector_current');
        }
      } else {
        if (block.classList.contains('_scr-sector_current')) {
          block.classList.remove('_scr-sector_current');
        }
      }
    }
  }

  if (scr_items.length > 0) {
    for (var _index32 = 0; _index32 < scr_items.length; _index32++) {
      var scr_item = scr_items[_index32];
      var scr_item_offset = offset(scr_item).top;
      var scr_item_height = scr_item.offsetHeight;
      var scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);

      if (window.innerHeight > scr_item_height) {
        scr_item_point = window.innerHeight - scr_item_height / 3;
      }

      if (src_value > scr_item_offset - scr_item_point && src_value < scr_item_offset + scr_item_height) {
        scr_item.classList.add('_active');
        scroll_load_item(scr_item);
      } else {
        scr_item.classList.remove('_active');
      }

      if (src_value > scr_item_offset - window.innerHeight) {
        if (scr_item.querySelectorAll('._lazy').length > 0) {
          scroll_lazy(scr_item);
        }
      }
    }
  }

  if (scr_fix_block.length > 0) {
    fix_block(scr_fix_block, src_value);
  }

  var custom_scroll_line = document.querySelector('._custom-scroll__line');

  if (custom_scroll_line) {
    var window_height = window.innerHeight;
    var content_height = document.querySelector('.wrapper').offsetHeight;
    var scr_procent = pageYOffset / (content_height - window_height) * 100;
    var custom_scroll_line_height = custom_scroll_line.offsetHeight;
    custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
  }

  if (src_value > scrollDirection) {// downscroll code
  } else {// upscroll code
    }

  scrollDirection = src_value <= 0 ? 0 : src_value;
}

setTimeout(function () {
  //document.addEventListener("DOMContentLoaded", scroll_scroll);
  scroll_scroll();
}, 100);

function scroll_lazy(scr_item) {
  var lazy_src = scr_item.querySelectorAll('*[data-src]');

  if (lazy_src.length > 0) {
    for (var _index33 = 0; _index33 < lazy_src.length; _index33++) {
      var _el12 = lazy_src[_index33];

      if (!_el12.classList.contains('_loaded')) {
        _el12.setAttribute('src', _el12.getAttribute('data-src'));

        _el12.classList.add('_loaded');
      }
    }
  }

  var lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');

  if (lazy_srcset.length > 0) {
    for (var _index34 = 0; _index34 < lazy_srcset.length; _index34++) {
      var _el13 = lazy_srcset[_index34];

      if (!_el13.classList.contains('_loaded')) {
        _el13.setAttribute('srcset', _el13.getAttribute('data-srcset'));

        _el13.classList.add('_loaded');
      }
    }
  }
}

function scroll_load_item(scr_item) {
  if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
    var map_item = document.getElementById('map');

    if (map_item) {
      scr_item.classList.add('_loaded-map');
      map();
    }
  }
} //FullScreenScroll


if (scr_blocks.length > 0 && !isMobile.any()) {
  disableScroll();
  window.addEventListener('wheel', full_scroll);
}

function full_scroll(e) {
  var viewport_height = window.innerHeight;

  if (viewport_height >= scr_min_height) {
    if (scrolling_full) {
      // ВЫЧИСЛИТЬ!!!
      var current_scroll = pageYOffset; //parseInt(scr_body.getAttribute('data-scroll'));
      //

      var current_block = document.querySelector('._scr-sector._scr-sector_current');
      var current_block_pos = offset(current_block).top;
      var current_block_height = current_block.offsetHeight;
      var current_block_next = current_block.nextElementSibling;
      var current_block_prev = current_block.previousElementSibling;
      var block_pos;

      if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
        if (current_block_prev) {
          var current_block_prev_height = current_block_prev.offsetHeight;
          block_pos = offset(current_block_prev).top;

          if (current_block_height <= viewport_height) {
            if (current_block_prev_height >= viewport_height) {
              block_pos = block_pos + (current_block_prev_height - viewport_height);
              full_scroll_to_sector(block_pos);
            }
          } else {
            enableScroll();

            if (current_scroll <= current_block_pos) {
              full_scroll_to_sector(block_pos);
            }
          }
        } else {
          full_scroll_pagestart();
        }
      } else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
        if (current_block_next) {
          block_pos = offset(current_block_next).top;

          if (current_block_height <= viewport_height) {
            full_scroll_to_sector(block_pos);
          } else {
            enableScroll();

            if (current_scroll >= block_pos - viewport_height) {
              full_scroll_to_sector(block_pos);
            }
          }
        } else {
          full_scroll_pageend();
        }
      }
    } else {
      disableScroll();
    }
  } else {
    enableScroll();
  }
}

function full_scroll_to_sector(pos) {
  disableScroll();
  scrolling_full = false;

  _goto(pos, 800);

  var scr_pause = 500;

  if (navigator.appVersion.indexOf("Mac") != -1) {
    scr_pause = 1000;
  }

  ;
  setTimeout(function () {
    scrolling_full = true;
  }, scr_pause);
}

function full_scroll_pagestart() {}

function full_scroll_pageend() {} //ScrollOnClick (Navigation)


var link = document.querySelectorAll('._goto-block');

if (link) {
  var blocks = [];

  var _loop9 = function _loop9(_index35) {
    var el = link[_index35];
    var block_name = el.getAttribute('href').replace('#', '');

    if (block_name != '' && !~blocks.indexOf(block_name)) {
      blocks.push(block_name);
    }

    el.addEventListener('click', function (e) {
      if (document.querySelector('.menu__body._active')) {
        menu_close();
        body_lock_remove(500);
      }

      var target_block_class = el.getAttribute('href').replace('#', '');
      var target_block = document.querySelector('.' + target_block_class);

      _goto(target_block, 300);

      e.preventDefault();
    });
  };

  for (var _index35 = 0; _index35 < link.length; _index35++) {
    _loop9(_index35);
  }

  window.addEventListener('scroll', function (el) {
    var old_current_link = document.querySelectorAll('._goto-block._active');

    if (old_current_link) {
      for (var _index36 = 0; _index36 < old_current_link.length; _index36++) {
        var _el14 = old_current_link[_index36];

        _el14.classList.remove('_active');
      }
    }

    for (var _index37 = 0; _index37 < blocks.length; _index37++) {
      var block = blocks[_index37];
      var block_item = document.querySelector('.' + block);

      if (block_item) {
        var block_offset = offset(block_item).top;
        var block_height = block_item.offsetHeight;

        if (pageYOffset > block_offset - window.innerHeight / 3 && pageYOffset < block_offset + block_height - window.innerHeight / 3) {
          var current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');

          for (var _index38 = 0; _index38 < current_links.length; _index38++) {
            var current_link = current_links[_index38];
            current_link.classList.add('_active');
          }
        }
      }
    }
  });
} //ScrollOnClick (Simple)


var goto_links = document.querySelectorAll('._goto');

if (goto_links) {
  var _loop10 = function _loop10(_index39) {
    var goto_link = goto_links[_index39];
    goto_link.addEventListener('click', function (e) {
      var target_block_class = goto_link.getAttribute('href').replace('#', '');
      var target_block = document.querySelector('.' + target_block_class);

      _goto(target_block, 300);

      e.preventDefault();
    });
  };

  for (var _index39 = 0; _index39 < goto_links.length; _index39++) {
    _loop10(_index39);
  }
}

function _goto(target_block, speed) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var header = ''; //OffsetHeader
  //if (window.innerWidth < 992) {
  //	header = 'header';
  //}

  var options = {
    speedAsDuration: true,
    speed: speed,
    header: header,
    offset: offset,
    easing: 'easeOutQuad'
  };
  var scr = new SmoothScroll();
  scr.animateScroll(target_block, '', options);
} //SameFunctions


function offset(el) {
  var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {
    passive: false
  }); // Disable scrolling in Chrome

  window.onwheel = preventDefault; // modern standard

  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE

  window.ontouchmove = preventDefault; // mobile

  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
  document.removeEventListener('wheel', preventDefault, {
    passive: false
  }); // Enable scrolling in Chrome

  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  /*if (keys[e.keyCode]) {
  	preventDefault(e);
  	return false;
  }*/
}

function fix_block(scr_fix_block, scr_value) {
  var window_width = parseInt(window.innerWidth);
  var window_height = parseInt(window.innerHeight);
  var header_height = parseInt(document.querySelector('header').offsetHeight) + 15;

  for (var _index40 = 0; _index40 < scr_fix_block.length; _index40++) {
    var block = scr_fix_block[_index40];
    var block_width = block.getAttribute('data-width');
    var item = block.querySelector('._side-block');

    if (!block_width) {
      block_width = 0;
    }

    if (window_width > block_width) {
      if (item.offsetHeight < window_height - (header_height + 30)) {
        if (scr_value > offset(block).top - (header_height + 15)) {
          item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
        } else {
          gotoRelative(item);
        }

        if (scr_value > block.offsetHeight + offset(block).top - (item.offsetHeight + (header_height + 15))) {
          block.style.cssText = "position:relative;";
          item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
        }
      } else {
        gotoRelative(item);
      }
    }
  }

  function gotoRelative(item) {
    item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
  }
}

if (!isMobile.any()) {//custom_scroll();

  /*
  window.addEventListener('wheel', scroll_animate, {
  	capture: true,
  	passive: true
  });
  window.addEventListener('resize', custom_scroll, {
  	capture: true,
  	passive: true
  });
  */
}

function custom_scroll(event) {
  scr_body.style.overflow = 'hidden';
  var window_height = window.innerHeight;
  var custom_scroll_line = document.querySelector('._custom-scroll__line');
  var custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
  var custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));

  if (custom_scroll_content_height > window_height) {
    if (!custom_scroll_line) {
      var _custom_scroll = document.createElement('div');

      custom_scroll_line = document.createElement('div');

      _custom_scroll.setAttribute('class', '_custom-scroll');

      custom_scroll_line.setAttribute('class', '_custom-scroll__line');

      _custom_scroll.appendChild(custom_scroll_line);

      scr_body.appendChild(_custom_scroll);
    }

    custom_scroll_line.style.height = custom_cursor_height + 'px';
  }
}

var new_pos = pageYOffset;

function scroll_animate(event) {
  var window_height = window.innerHeight;
  var content_height = document.querySelector('.wrapper').offsetHeight;
  var start_position = pageYOffset;
  var pos_add = 100;

  if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
    new_pos = new_pos - pos_add;
  } else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
    new_pos = new_pos + pos_add;
  }

  if (new_pos > content_height - window_height) new_pos = content_height - window_height;
  if (new_pos < 0) new_pos = 0;

  if (scrolling) {
    scrolling = false;

    _goto(new_pos, 1000);

    var scr_pause = 100;

    if (navigator.appVersion.indexOf("Mac") != -1) {
      scr_pause = scr_pause * 2;
    }

    ;
    setTimeout(function () {
      scrolling = true;

      _goto(new_pos, 1000);
    }, scr_pause);
  } //If native scroll
  //disableScroll();

}