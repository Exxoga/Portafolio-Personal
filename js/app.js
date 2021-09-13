/* Button pop up */
window.onscroll = function () {
  if (document.documentElement.scrollTop > 400) {
    document.querySelector('.button').classList.add('visible');
  } else {
    document.querySelector('.button').classList.remove('visible');
  }
};

document.querySelector('.button').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});


/* Typed js */
const typed = new Typed('.typed', {
  strings: ['<i class="typed-responsive">Responsive Web Design</i>',
    '<i class="typed-html">HTML5</i>',
    '<i class="typed-html">HTML5 Semantico</i>',
    '<i class="typed-css">CSS3</i>',
    '<i class="typed-css">Css Grid</i>',
    '<i class="typed-css">Css Flexbox</i>',
    '<i class="typed-javascript">Javascript</i>',
    '<i class="typed-javascript">POO</i>',
    '<i class="typed-javascript">Classes</i>',
    '<i class="typed-javascript">Prototypes</i>',
    '<i class="typed-javascript2">APIs</i>',
    '<i class="typed-javascript2">Testing</i>',
    '<i class="typed-javascript2">Jest</i>',
    '<i class="typed-javascript2">Cypress</i>',
    '<i class="typed-linter">Linters</i>',
    '<i class="typed-webpack">Webpack</i>',
    '<i class="typed-javascript">Babel</i>'],
  // stringsElement: '#cadenas-texto',
  typeSpeed: 50,
  startDelay: 300,
  backSpeed: 75,
  // smartBackspace: true,
  shuffle: false,
  backDelay: 1000,
  loop: true,
  loopCount: false,
  showCursor: false,
  cursorChar: '|',
  contentType: 'html',
});

/* Carousel de Imagenes */

const swiper = new Swiper(".mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});