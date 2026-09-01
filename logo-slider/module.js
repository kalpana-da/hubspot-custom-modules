document.addEventListener("DOMContentLoaded", function () {

  const sliders = document.querySelectorAll(
    ".logo-slider-container"
  );


  sliders.forEach(function (container) {

    const slider =
      container.querySelector(".logo-slider");

    const prevButton =
      container.querySelector(".prev-arrow");

    const nextButton =
      container.querySelector(".next-arrow");


    if (!slider || !prevButton || !nextButton) {
      return;
    }


    /* =====================================
       GET ONE CARD SCROLL DISTANCE
    ===================================== */

    function getScrollAmount() {

      const card =
        slider.querySelector(".logo-card");

      if (!card) {
        return 0;
      }


      const cardWidth =
        card.getBoundingClientRect().width;


      const sliderStyle =
        window.getComputedStyle(slider);


      const gap =
        parseFloat(sliderStyle.columnGap) || 0;


      return cardWidth + gap;
    }


    /* =====================================
       UPDATE ARROWS
    ===================================== */

    function updateButtons() {

      const maxScroll =
        slider.scrollWidth -
        slider.clientWidth;


      prevButton.disabled =
        slider.scrollLeft <= 2;


      nextButton.disabled =
        slider.scrollLeft >= maxScroll - 2;
    }


    /* =====================================
       NEXT BUTTON
    ===================================== */

    nextButton.addEventListener(
      "click",
      function () {

        slider.scrollBy({

          left: getScrollAmount(),

          behavior: "smooth"

        });

      }
    );


    /* =====================================
       PREVIOUS BUTTON
    ===================================== */

    prevButton.addEventListener(
      "click",
      function () {

        slider.scrollBy({

          left: -getScrollAmount(),

          behavior: "smooth"

        });

      }
    );


    /* =====================================
       SCROLL EVENT
    ===================================== */

    slider.addEventListener(
      "scroll",
      updateButtons
    );


    /* =====================================
       RESIZE EVENT
    ===================================== */

    window.addEventListener(
      "resize",
      updateButtons
    );


    /* =====================================
       INITIAL STATE
    ===================================== */

    updateButtons();

  });

});