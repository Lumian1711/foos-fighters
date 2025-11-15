
fetch("js/data.json")
  .then(res => res.json())
  .then(data => {
    const indicators = document.getElementById("news-indicators");
    const slides = document.getElementById("news-slides");

    let slideIndex = 0;

    for (let i = 0; i < data.noticias.length; i += 2) {

      const noticia1 = data.noticias[i];
      const noticia2 = data.noticias[i + 1];

      indicators.innerHTML += `
        <button type="button" data-bs-target="#newsCarousel" data-bs-slide-to="${slideIndex}"
          class="${slideIndex === 0 ? 'active' : ''}">
        </button>
      `;
      slides.innerHTML += `
        <div class="carousel-item ${slideIndex === 0 ? 'active' : ''}">
            <div class="row g-4">

                <!-- Card 1 -->
                <div class="col-md-6">
                    <div class="news-card">
                        <img src="${noticia1.imagen}" alt="">
                        <div class="card-body">
                            <h5>${noticia1.titulo}</h5>
                            <p class="fecha small">${noticia1.fecha}</p>
                            <p>${noticia1.descripcion}</p>
                            <a href="${noticia1.link}" class="btn btn-primary w-100">Ver más</a>
                        </div>
                    </div>
                </div>

                <!-- Card 2 (solo si existe) -->
                ${ noticia2 ? `
                <div class="col-md-6">
                    <div class="news-card">
                        <img src="${noticia2.imagen}" alt="">
                        <div class="card-body">
                            <h5>${noticia2.titulo}</h5>
                            <p class="fecha small">${noticia2.fecha}</p>
                            <p>${noticia2.descripcion}</p>
                            <a href="${noticia2.link}" class="btn btn-primary w-100">Ver más</a>
                        </div>
                    </div>
                </div>` : "" }

            </div>
        </div>
      `;

      slideIndex++;
    }
});