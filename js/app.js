document.addEventListener("DOMContentLoaded", () => {
  // Cargar noticias
  fetch("js/data.json")
    .then(res => res.json())
    .then(data => renderNews(data.noticias))
    .catch(err => console.error("Error cargando noticias:", err));

  // Modo oscuro / claro
  const toggleBtn = document.getElementById("mode-toggle");
  const icon = toggleBtn.querySelector("i");
  const body = document.body;

  // Cargar tema guardado
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    icon.classList.replace("bi-moon-fill", "bi-sun-fill");
  }

  toggleBtn.addEventListener("click", () => {
    const isLight = body.classList.toggle("light-mode");
    icon.classList.toggle("bi-sun-fill", isLight);
    icon.classList.toggle("bi-moon-fill", !isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  // Formulario
  document.getElementById("contact-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Te responderemos pronto ⚽🎮");
    e.target.reset();
  });
});

function renderNews(noticias) {
  const container = document.getElementById("news-container");
  container.innerHTML = "";

  noticias.forEach(noticia => {
    const col = document.createElement("div");
    col.className = "col-md-4 col-sm-6 fade-in";
    col.innerHTML = `
      <div class="card h-100 shadow border-0">
        <img src="${noticia.imagen}" class="card-img-top" alt="${noticia.titulo}">
        <div class="card-body text-start">
          <h5 class="card-title text-success">${noticia.titulo}</h5>
          <p class="text-muted small mb-1">${noticia.fecha}</p>
          <p class="card-text">${noticia.descripcion}</p>
        </div>
        <div class="card-footer bg-transparent border-0 text-end">
          <a href="${noticia.link}" target="_blank" class="btn btn-sm btn-success">Ver más</a>
        </div>
      </div>
    `;
    container.appendChild(col);
  });
}
