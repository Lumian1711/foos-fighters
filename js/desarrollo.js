fetch("js/data.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("dev-container");
    container.innerHTML = ""; 

    data.desarrollo.forEach((post, index) => {
      const shortDesc = post.descripcion.substring(0, 120);

      container.innerHTML += `
        <article class="post-card">
          <img src="${post.imagen}" class="post-img">

          <div class="post-body">
            <h3 class="post-title">${post.titulo}</h3>
            <p class="post-date">${post.fecha}</p>

            <p class="post-text">
                ${shortDesc}...
            </p>

            <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#modal-${index}">
              Ver más
            </button>
          </div>
        </article>

        <!-- MODAL -->
        <div class="modal fade" id="modal-${index}" tabindex="-1">
          <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content dev-modal">

              <div class="modal-header dev-modal-header">
                <h5 class="modal-title dev-modal-title">${post.titulo}</h5>
                <button class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
              </div>

              <div class="modal-body dev-modal-body">
                <img src="${post.imagen}" class="dev-modal-img mb-3">
                <p class="dev-modal-date">${post.fecha}</p>
                <p class="dev-modal-text">${post.descripcion}</p>
              </div>

            </div>
          </div>
        </div>
      `;
    });
  });

