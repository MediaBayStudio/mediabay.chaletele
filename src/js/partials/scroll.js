let lastConceptScrollTop = 0;
let lastReservecrollTop = 0;
let lastInstaScrollTop = 0;
let lastCoffeeScrollTop = 0;
let lastResultScrollTop = 0;

const conceptScroll = function () {
  const LOCAL_OFFSET = 10; // percent
  const windowTopOffet = window.pageYOffset || document.documentElement.scrollTop;
  const elementTopOffset = document.querySelector(`.concept`).offsetTop + (document.querySelector(`.insta`).offsetTop * LOCAL_OFFSET / 100);
  const nextElementTopOffset = document.querySelector(`.spetial`).offsetTop;
  const newScrollTop = windowTopOffet - elementTopOffset;
  const decoreElement = document.querySelector(`.concept__decore`);

  if (windowTopOffet > elementTopOffset && windowTopOffet < nextElementTopOffset) { // работаем в пределах одного блока на экране
    if (newScrollTop > lastConceptScrollTop) {
      // спускаемся вниз
      const width = decoreElement.clientWidth;
      decoreElement.style.width = width + 20 + `px`;
    } else {
      // поднимаемся вверх
      const width = decoreElement.clientWidth;
      decoreElement.style.width = width - 20 + `px`;
    }
    lastConceptScrollTop = newScrollTop;
  }
};

const reserveScroll = function () {
  const windowTopOffet = window.pageYOffset || document.documentElement.scrollTop;
  const parrentOffet = document.querySelector(`.spetial__item--reserve`).offsetParent.offsetTop;
  const elementTopOffset = parrentOffet + document.querySelector(`.spetial__item--reserve`).offsetTop;
  const nextElementTopOffset = parrentOffet + document.querySelector(`.spetial__mobile--first`).offsetTop;
  const newScrollTop = windowTopOffet - elementTopOffset;
  const decoreElement = document.querySelector(`.spetial__decore`);

  if (windowTopOffet > elementTopOffset && windowTopOffet < nextElementTopOffset) { // работаем в пределах одного блока на экране

    if (newScrollTop > lastReservecrollTop) {
      // спускаемся вниз
      const height = decoreElement.clientHeight;
      decoreElement.style.height = height + 10 + `px`;
    } else {
      // поднимаемся вверх
      const height = decoreElement.clientHeight;
      decoreElement.style.height = height - 7 + `px`;
    }
    lastReservecrollTop = newScrollTop;
  }
};

const instaScroll = function () {
  const LOCAL_OFFSET = 15; // percent
  const windowTopOffet = window.pageYOffset || document.documentElement.scrollTop;
  const elementTopOffset = document.querySelector(`.insta`).offsetTop - (document.querySelector(`.insta`).offsetTop * LOCAL_OFFSET / 100);
  const nextelementTopOffset = document.querySelector(`.develop`).offsetTop;
  const newScrollTop = windowTopOffet - elementTopOffset;
  const decoreElement = document.querySelector(`.insta__decore`);

  if (windowTopOffet > elementTopOffset && windowTopOffet < nextelementTopOffset) { // работаем в пределах одного блока на экране

    if (newScrollTop > lastInstaScrollTop) {
      // спускаемся вниз
      const width = decoreElement.clientWidth;
      decoreElement.style.width = width + 10 + `px`;
    } else {
      // поднимаемся вверх
      const width = decoreElement.clientWidth;
      decoreElement.style.width = width - 10 + `px`;
    }
    lastInstaScrollTop = newScrollTop;
  }
};

const coffeeScroll = function () {
  const LOCAL_OFFSET = 5; // percent
  const windowTopOffet = window.pageYOffset || document.documentElement.scrollTop;
  const elementTopOffset = document.querySelector(`.coffee`).offsetTop + (document.querySelector(`.insta`).offsetTop * LOCAL_OFFSET / 100);
  const nextelementTopOffset = document.querySelector(`.insta`).offsetTop;
  const newScrollTop = windowTopOffet - elementTopOffset;
  const decoreElement = document.querySelector(`.coffee__decore`);

  if (windowTopOffet > elementTopOffset && windowTopOffet < nextelementTopOffset) { // работаем в пределах одного блока на экране
    if (newScrollTop > lastCoffeeScrollTop) {
      // спускаемся вниз
      const width = decoreElement.clientWidth;
      decoreElement.style.width = width + 15 + `px`;
    } else {
      // поднимаемся вверх
      const width = decoreElement.clientWidth;
      decoreElement.style.width = width - 15 + `px`;
    }
    lastCoffeeScrollTop = newScrollTop;
  }
};

const resultScroll = function () {
  const LOCAL_OFFSET = 20; // percent
  const windowTopOffet = window.pageYOffset || document.documentElement.scrollTop;
  const elementTopOffset = document.querySelector(`.result`).offsetTop - (document.querySelector(`.insta`).offsetTop * LOCAL_OFFSET / 100);
  const nextelementTopOffset = document.querySelector(`.feedback`).offsetTop;
  const newScrollTop = windowTopOffet - elementTopOffset;
  const decoreElement = document.querySelector(`.result__decore`);
  let maxWidth = 500;

  if (windowTopOffet > elementTopOffset && windowTopOffet < nextelementTopOffset) {
    if (newScrollTop > lastResultScrollTop) {
      // спускаемся вниз
      const width = decoreElement.clientWidth;
      if (document.documentElement.clientWidth >= 1440) {
        maxWidth = 680;
      }
      if (width < maxWidth) {
        decoreElement.style.width = width + 10 + `px`;
      } else {
        const leftOffset = window.innerWidth - (decoreElement.offsetLeft + width);
        const percentsOffset = leftOffset * 100 / window.innerWidth;
        if (percentsOffset < 10) {
          decoreElement.style.right = percentsOffset + 1 + `%`;
        }
      }

    } else {
      // поднимаемся вверх
      const width = decoreElement.clientWidth;
      const leftOffset = window.innerWidth - (decoreElement.offsetLeft + width);
      const percentsOffset = leftOffset * 100 / window.innerWidth;
      if (percentsOffset > 0) {
        decoreElement.style.right = percentsOffset - 1 + `%`;
      } else {
        decoreElement.style.width = width - 10 + `px`;
      }
    }
    lastResultScrollTop = newScrollTop;
  }
};

window.onscroll = function () {
  conceptScroll();
  reserveScroll();
  coffeeScroll();
  instaScroll();
  resultScroll();
};
