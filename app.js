const API_KEY = "104442528f95deaf117dfe649cb33699";
const BASE_URL = "https://api.themoviedb.org/3";

function searchMovie() {

  const query = document.getElementById("searchInput").value;

  fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)

    .then(res => res.json())

    .then(data => {

      const movieGrid = document.getElementById("movieGrid");

      movieGrid.innerHTML = "";

      data.results.forEach(movie => {

        movieGrid.innerHTML += `
          <div class="movie-card">

            <a href="movie.html?id=${movie.id}">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            </a>

            <div class="movie-info">
              <h3>${movie.title}</h3>
              <p>⭐ ${movie.vote_average}</p>

              <a href="movie.html?id=${movie.id}" class="watch-btn">
                বিস্তারিত দেখুন
              </a>

            </div>

          </div>
        `;

      });

    })

    .catch(error => {
      console.log(error);
    });

}
