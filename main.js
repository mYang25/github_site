document.addEventListener("DOMContentLoaded", () => {
  const titleText = "Hi! I'm Matthew Yang";
  const titleElement = document.getElementById("title");
  const cursor = document.querySelector(".cursor");
  const subtitleParts = document.querySelectorAll("#subtitle .subtitle-part");
  const hexagons = document.querySelectorAll(".hexagon");

  let index = 0;

  function typeTitle() {
    if (index < titleText.length) {
      titleElement.innerHTML = titleText.substring(0, index + 1) + '<span class="cursor">|</span>';
      index++;
      setTimeout(typeTitle, 100); 
    } else {
      showSubtitles();
    }
  }

  function showSubtitles() {
    subtitleParts.forEach((part, i) => {
      setTimeout(() => {
        part.classList.add("fade-up");
        if (i === subtitleParts.length - 1) {
          startHexagonAnimation();
        }
      }, i * 300);
    });
  }

  function startHexagonAnimation() {
    let delay = 350;
    hexagons.forEach(hexagon => {
      hexagon.style.opacity = "0";
      hexagon.style.animation = "fadeUp 200ms linear forwards";
      hexagon.style.animationDelay = delay + "ms";
      delay += 200;
    });
  }

  typeTitle();
});