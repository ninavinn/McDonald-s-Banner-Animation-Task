document.addEventListener("DOMContentLoaded", function () {
  // პირველი ანიმაციის ელემენტები
  const container1 = document.querySelector(".animation-container");
  const bgFrame1 = document.querySelector(".bg__frame1");
  const headline1 = document.querySelector(
    ".animation-container .txt__headline890"
  );
  const stripes1 = [
    document.querySelector(".animation-container .stripe_red"),
    document.querySelector(".animation-container .stripe_blue"),
    document.querySelector(".animation-container .stripe_yellow"),
    document.querySelector(".animation-container .stripe_green"),
  ];

  // მეორე ანიმაციის ელემენტები
  const container2 = document.querySelector(".animation-container2");
  const bgFrame3 = document.querySelector(".bg_frame3");
  const price = document.querySelector(".price_890");
  const headline2 = document.querySelector(
    ".animation-container2 .txt_end .price_890"
  );
  const stripes2 = [
    document.querySelector(".animation-container2 .stripe_red"),
    document.querySelector(".animation-container2 .stripe_blue"),
    document.querySelector(".animation-container2 .stripe_yellow"),
    document.querySelector(".animation-container2 .stripe_green"),
  ];

  // მესამე ანიმაციის ელემენტები
  const container3 = document.querySelector(".animation-container3");
  const bgFrame4 = document.querySelector(".bg_frame4");
  const headline3 = document.querySelector(".animation-container3 .txt_end");
  const stripes3 = [
    document.querySelector(".animation-container3 .stripe_red"),
    document.querySelector(".animation-container3 .stripe_blue"),
    document.querySelector(".animation-container3 .stripe_yellow"),
    document.querySelector(".animation-container3 .stripe_green"),
  ];

  // მეოთხე ანიმაციის ელემენტები
  const container4 = document.querySelector(".animation-container4");
  const bgFrame5 = document.querySelector(".bg_frame5");
  const headline4 = document.querySelector(
    ".animation-container4 .txt_end .button_cta"
  );
  const stripes4 = [
    document.querySelector(".animation-container4 .txt_end"),
    document.querySelector(".animation-container4 .button_cta"),
  ];

  // ანიმაციების დამალვა
  function hideAll() {
    container1.style.display = "none";
    container2.style.display = "none";
    container3.style.display = "none";
    container4.style.display = "none";
  }
  function hide() {
    headline1.classList.add("hide");
  }

  // პირველი ანიმაციის გაშვება
  function playFirstAnimation() {
    hideAll();
    price.style.display = "none";
    container1.style.display = "block";
    bgFrame1.classList.add("show");
    setTimeout(() => {
      headline1.classList.add("show");

      stripes1.forEach((stripe, index) => {
        setTimeout(() => {
          stripe.classList.add("show");
        }, (index + 1) * 500);
      });
    }, 500);

    // პირველი ანიმაციის დამთავრება (3 წამში)
    setTimeout(() => {
      headline1.classList.add("hide");
      hide();
      hideAll();
      playSecondAnimation(); // მეორე ანიმაციის დაწყება
    }, 3000);
  }

  // მეორე ანიმაციის გაშვება
  function playSecondAnimation() {
    hideAll();
    headline1.classList.add("hide");
    container2.style.display = "block";
    bgFrame3.classList.add("show");
    setTimeout(() => {
      headline2.classList.add("show");
      stripes2.forEach((stripe, index) => {
        setTimeout(() => {
          stripe.classList.add("show");
        }, (index + 1) * 500);
      });
    }, 500);

    // მეორე ანიმაციის დამთავრება (3 წამში)
    setTimeout(() => {
      hideAll();
      playThirdAnimation(); // მესამე ანიმაციის დაწყება
    }, 3000);
  }

  // მესამე ანიმაციის გაშვება
  function playThirdAnimation() {
    hideAll();
    container3.style.display = "block";
    bgFrame4.classList.add("show");
    setTimeout(() => {
      headline3.classList.add("show");
      stripes3.forEach((stripe, index) => {
        setTimeout(() => {
          stripe.classList.add("show");
        }, (index + 1) * 500);
      });
    }, 500);

    // მესამე ანიმაციის დამთავრება (3 წამში)
    setTimeout(() => {
      hideAll();
      playFourthAnimation(); // მეოთხე ანიმაციის დაწყება
    }, 3000);
  }

  // მეოთხე ანიმაციის გაშვება
  function playFourthAnimation() {
    hideAll();
    container4.style.display = "block";
    bgFrame5.classList.add("show");
    setTimeout(() => {
      headline4.classList.add("show");
      stripes4.forEach((stripe, index) => {
        setTimeout(() => {
          stripe.classList.add("show");
        }, (index + 1) * 500);
      });
    }, 500);

    // მეოთხე ანიმაციის დამთავრება (3 წამში)
    setTimeout(() => {
      hideAll();
      playFourthAnimation();
    }, 3000);
  }

  // პირველი ანიმაციის დაწყება
  playFirstAnimation();
});
