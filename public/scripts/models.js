// Deshabilitar la selección y el arrastre de imágenes en la página
document.addEventListener("DOMContentLoaded", function () {
  disableSelectionAndDrag(document.body);
});

function disableSelectionAndDrag(element) {
  element.setAttribute("unselectable", "on");
  element.style.userSelect = "none";
  element.style.webkitUserSelect = "none";
  element.style.msUserSelect = "none";
  element.style.mozUserSelect = "none";

  var images = element.querySelectorAll("img");
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("draggable", "false");
  }

  var children = element.children;
  for (var i = 0; i < children.length; i++) {
    disableSelectionAndDrag(children[i]);
  }
}

// Etiquetas (Tags)
function filterImages(tag) {
  var tags = document.getElementsByClassName("tag");
  for (var i = 0; i < tags.length; i++) {
    tags[i].classList.remove("selected");
  }

  var selectedTag = document.getElementById("tag-" + tag);
  if (selectedTag) {
    selectedTag.classList.add("selected");
  }

  var articles = document.querySelectorAll(".model-gallery article");

  // Oculta todos los modelos aplicando la clase 'fade-out'
  articles.forEach(function (article) {
    article.classList.add("fade-out");
  });

  // Espera 300ms (duración de la transición) antes de mostrar los modelos filtrados
  setTimeout(function () {
    // Muestra los modelos filtrados quitando la clase 'fade-out'
    articles.forEach(function (article) {
      var labels = article.querySelectorAll(".label");
      var hasTag = false;

      labels.forEach(function (label) {
        if (label.innerText === tag || tag === "") {
          hasTag = true;
        }
      });

      if (hasTag) {
        // Aplica la animación de fade-in al mostrar los modelos
        article.style.display = "block";
        article.classList.remove("fade-out");
        article.classList.add("fade-in");
      } else {
        article.style.display = "none";
      }
    });
  }, 500);
}

// Audio
// Working on...
