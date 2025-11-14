fetch("js/data.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("dev-container");
    data.desarrollo.forEach(post => {
      container.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card h-100 shadow border-0">
            <img src="${post.imagen}" class="card-img-top">
            <div class="card-body">
              <h5 class="fw-bold">${post.titulo}</h5>
              <p class="text-muted small">${post.fecha}</p>
              <p>${post.descripcion}</p>
            </div>
          </div>
        </div>
      `;
    });
  });
