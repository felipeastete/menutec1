const menu = [
  {
    id: 1,
    nombre: "Lomo a lo pobre",
    precio: 4500,
    imagen:
      "https://cdn.pixabay.com/photo/2015/04/08/13/13/steak-712664_1280.jpg",
  },
  {
    id: 2,
    nombre: "Ensalada César con pollo",
    precio: 3500,
    imagen:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/salad-1238257_1280.jpg",
  },
  {
    id: 3,
    nombre: "Pasta boloñesa",
    precio: 4000,
    imagen:
      "https://cdn.pixabay.com/photo/2017/09/02/13/04/spaghetti-2707321_1280.jpg",
  },
  {
    id: 4,
    nombre: "Sopa del día",
    precio: 2500,
    imagen:
      "https://cdn.pixabay.com/photo/2016/03/05/19/02/soup-1238242_1280.jpg",
  },
  {
    id: 5,
    nombre: "Postre casero",
    precio: 2000,
    imagen:
      "https://cdn.pixabay.com/photo/2016/11/29/09/32/cake-1869227_1280.jpg",
  },
];

// ⭐ Clasificaciones
let ratings = JSON.parse(localStorage.getItem("ratings")) || {};

// 💬 Comentarios generales
let comentariosGenerales = JSON.parse(localStorage.getItem("comentariosGenerales")) || [];

function renderMenu() {
  const app = document.getElementById("app");

  app.innerHTML = menu
    .map((plato) => {
      const currentRating = ratings[plato.id] || 0;

      return `
      <div class="card">
        <img src="${plato.imagen}" alt="${plato.nombre}">
        <div class="card-content">
          <h3>${plato.nombre}</h3>
          <p class="price">$${plato.precio}</p>
          <div class="stars" data-id="${plato.id}">
            ${[1, 2, 3, 4, 5]
              .map(
                (num) =>
                  `<span class="star ${
                    num <= currentRating ? "active" : ""
                  }" data-value="${num}">★</span>`
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  // Activar estrellas interactivas
  document.querySelectorAll(".star").forEach((star) => {
    star.addEventListener("click", (e) => {
      const value = parseInt(e.target.getAttribute("data-value"));
      const id = parseInt(e.target.parentElement.getAttribute("data-id"));
      ratings[id] = value;
      localStorage.setItem("ratings", JSON.stringify(ratings));
      renderMenu();
    });
  });
}

// 💬 Renderizar comentarios generales
function renderComentarios() {
  const contenedor = document.getElementById("lista-comentarios");
  contenedor.innerHTML = comentariosGenerales
    .map((c) => `<div class="comentario">${c}</div>`)
    .join("");
}

document.getElementById("btn-comentar").addEventListener("click", () => {
  const textarea = document.getElementById("nuevo-comentario");
  const texto = textarea.value.trim();
  if (texto === "") return;

  comentariosGenerales.push(texto);
  localStorage.setItem("comentariosGenerales", JSON.stringify(comentariosGenerales));
  textarea.value = "";
  renderComentarios();
});

renderMenu();
renderComentarios();
