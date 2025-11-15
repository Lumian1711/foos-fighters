fetch("js/data.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("dev-container");
    data.desarrollo.forEach(post => {
      container.innerHTML += `
        <div class="card-container">
          <div class="card h-100 shadow border-0">
            <div class="div">
              <img src="${post.imagen}" class="card-img-top">
            </div>
              <h5 class="card-title">${post.titulo}</h5>
              <p class="fecha small">${post.fecha}</p>
              <p class="card-text">${post.descripcion}</p>
          </div>
        </div>
      `;
    });
  });
