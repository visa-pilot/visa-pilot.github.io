// main script
(function () {
  "use strict";

  // FAQ slider (native horizontal scroll)
  // ----------------------------------------
  const faqSlider = document.querySelector(".faq-slider");
  const faqPrev = document.querySelector(".faq-slider-prev");
  const faqNext = document.querySelector(".faq-slider-next");
  const faqFirstCard = faqSlider ? faqSlider.querySelector(".faq-slide") : null;

  if (faqSlider && faqFirstCard) {
    const getStep = () => {
      const styles = window.getComputedStyle(faqFirstCard);
      const cardWidth = faqFirstCard.getBoundingClientRect().width;
      const gap = parseFloat(styles.marginRight) || 24;
      return cardWidth + gap;
    };

    const scrollByStep = (direction) => {
      faqSlider.scrollBy({
        left: direction * getStep(),
        behavior: "smooth",
      });
    };

    if (faqPrev) {
      faqPrev.addEventListener("click", () => scrollByStep(-1));
    }

    if (faqNext) {
      faqNext.addEventListener("click", () => scrollByStep(1));
    }
  }
})();
