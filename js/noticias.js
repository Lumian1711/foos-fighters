fetch("js/data.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("news-container");
    data.noticias.forEach(n => {
      container.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow border-0">
            <img src="${n.imagen}" class="card-img-top">
            <div class="card-body">
              <h5 class="fw-bold">${n.titulo}</h5>
              <p class="text-muted small">${n.fecha}</p>
              <p>${n.descripcion}</p>
            </div>
            <div class="card-footer bg-transparent">
              <a href="${n.link}" class="btn btn-success btn-sm">Ver más</a>
            </div>
          </div>
        </div>
      `;
    });
  });
