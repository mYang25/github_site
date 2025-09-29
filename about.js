document.addEventListener("DOMContentLoaded", () => {
      const titleText = "About Me";
      const titleElement = document.getElementById("title-text");
      let index = 0;

      function typeTitle() {
        if (index < titleText.length) {
          titleElement.textContent = titleText.substring(0, index + 1);
          index++;
          setTimeout(typeTitle, 100);
        }
      }

      typeTitle();
});