const slides = document.querySelectorAll('[data-js="carousel__item"]');
const nextButton = document.querySelector('[data-js="carousel__button--next"]');
const prevButton = document.querySelector('[data-js="carousel__button--prev"]');
const smButton = document.querySelector('[data-js="carousel__SM"]');
const motoInfo = document.querySelector('[data-js="moto-info"]');
const main = document.querySelector("main");
const nav = document.querySelector("nav");

const saibaMaisButton = document.querySelector("#buttonSM");

const lastSlideIndex = slides.length - 1;
let currentSlideIndex = 0;

const manipulateSlidesClasses = (correctSlideIndex) => {
  slides.forEach((slide) => slide.classList.remove("carousel__item--visible"));
  slides[currentSlideIndex].classList.add("carousel__item--visible");
};

nextButton.addEventListener("click", () => {
  const correctSlideIndex =
    currentSlideIndex === lastSlideIndex
      ? (currentSlideIndex = 0)
      : ++currentSlideIndex;

  manipulateSlidesClasses(correctSlideIndex);
});

prevButton.addEventListener("click", () => {
  const correctSlideIndex =
    currentSlideIndex === 0
      ? (currentSlideIndex = lastSlideIndex)

      : --currentSlideIndex;

  manipulateSlidesClasses(correctSlideIndex);
});

const motoData = [
  {
    name: "Scooter Elétrica Voltz EV1",
    info: "A scooter elétrica Voltz EV1 oferece uma pilotagem suave e confortável com transmissão automática. Com motor elétrico eficiente e freios ABS, é uma opção sustentável e segura para deslocamentos urbanos!",
    img: "moto1.svg",
    id: "moto1",
  },
  {
    name: "Honda CB 500X",
    info: "O câmbio de 6 marchas da CB 500X oferece maior confiança e performance na pilotagem, tornando as subidas de marcha mais leves e as reduções mais suaves!",
    img: "moto2.svg",
    id: "moto2",
  },
];
smButton.addEventListener("click", () => {
  const currentMotoData = motoData[currentSlideIndex];

  motoInfo.innerHTML = `
     <div class="nav-moto">
     <h3>${currentMotoData.name}</h3>
     <button class="close-button" data-js="close-button"">
     X
     </button>
     </div>
     <p>${currentMotoData.info}</p>
      <img id="${currentMotoData.id}" src="${currentMotoData.img}" />
      <button id="assignButton">Quero Assinar!</button>
    `;

  motoInfo.classList.add("moto-info--visible");
  motoInfo.classList.remove("fade-out");
  const closeButton = document.querySelector('[data-js="close-button"]');

  closeButton.addEventListener("click", () => {
    motoInfo.classList.add("fade-out");
    main.classList.add("blur-out");
    nav.classList.add("blur-out");
    setTimeout(() => {

      main.classList.remove("modal-open");
      nav.classList.remove("modal-open");
      motoInfo.remove();
    }, 500)
  });
});

const body = document.querySelector("body");

saibaMaisButton.addEventListener("click", () => {
  main.classList.remove("blur-out");
  nav.classList.remove("blur-out");
  main.classList.add("modal-open");
  nav.classList.add("modal-open");
  body.appendChild(motoInfo);
});
