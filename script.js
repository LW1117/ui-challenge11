const onNavButtonClick = () => {
    const fastForwardButton = document.getElementById("fast-forward-button");
    const fastBackwardButton = document.getElementById(
      "fast-backward-button"
    );
    const currentImageHref = window.location.hash;
    switch (currentImageHref) {
      case "#slide-1":
        fastBackwardButton.href = "#slide-8";
        fastForwardButton.href = "#slide-2";
        break;

      case "#slide-2":
        fastBackwardButton.href = "#slide-1";
        fastForwardButton.href = "#slide-3";
        break;

      case "#slide-3":
        fastBackwardButton.href = "#slide-2";
        fastForwardButton.href = "#slide-4";
        break;

      case "#slide-4":
        fastBackwardButton.href = "#slide-3";
        fastForwardButton.href = "#slide-5";
        break;

      case "#slide-5":
        fastBackwardButton.href = "#slide-4";
        fastForwardButton.href = "#slide-6";
        break;

      case "#slide-6":
        fastBackwardButton.href = "#slide-5";
        fastForwardButton.href = "#slide-7";
        break;

      case "#slide-7":
        fastBackwardButton.href = "#slide-6";
        fastForwardButton.href = "#slide-8";
        break;

      case "#slide-8":
        fastBackwardButton.href = "#slide-7";
        fastForwardButton.href = "#slide-1";
        break;

      default:
        break;
    }
  };

  const onShuffleButtonClick = () => {
    var sliderNav = document.querySelector(".slider-nav");
    var slider = document.querySelector(".slider");

    for (let i = 0; i < sliderNav.children.length; i++) {
      sliderNav.appendChild(sliderNav.children[(Math.random() * i) | 0]);
    }
    for (let i = 0; i < sliderNav.children.length; i++) {
      slider.children[i].src = sliderNav.children[i].children[0].src;
      slider.children[i].alt = sliderNav.children[i].children[0].alt;
    }
  };