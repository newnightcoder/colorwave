export const animateProducts = (containerClass) => {
  const parent = document.querySelector(containerClass);
  let sections = parent?.querySelectorAll(".section-grid");
  sections?.forEach((section) => {
    let divs = section?.querySelectorAll(".product-card");
    divs?.forEach((div, i) => {
      div.classList.add("animate-fadeIn");
      div.style.animationDelay = `${190 * i}ms`;
    });
  });
};
