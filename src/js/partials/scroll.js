let lastScrollTop = 0;

const conceptScroll = function () {
  const windowTopOffet = window.pageYOffset || document.documentElement.scrollTop;
  const elementTopOffset = document.querySelector(`.concept`).offsetTop;
  const nextelementTopOffset = document.querySelector(`.spetial`).offsetTop;
  const newScrollTop = windowTopOffet - elementTopOffset;
  const decoreElement = document.querySelector(`.concept__decore`);

  if (windowTopOffet > elementTopOffset && windowTopOffet < nextelementTopOffset) { // работаем в пределах одного блока на экране
    if (newScrollTop > lastScrollTop) {
      // спускаемся вниз
      const width = decoreElement.clientWidth;
      decoreElement.style.width = width + 20 + `px`;
    } else {
      // поднимаемся вверх
      const width = decoreElement.clientWidth;
      decoreElement.style.width = width - 20 + `px`;
    }
    lastScrollTop = newScrollTop;
  }
};

window.onscroll = function () {
  conceptScroll();
};
