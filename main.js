const hexagons = document.querySelectorAll(".hexagon");

let delay = 300;

hexagons.forEach(hexagon => {
    hexagon.style.opacity = "0";

    hexagon.style.animation = "fadeUp 200ms linear forwards";

    hexagon.style.animationDelay = delay + "ms";

    delay += 200;
});