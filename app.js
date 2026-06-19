const API_KEY = 
Pd_QDj9s-CrkRUmNzBaCJ0sQdGGlccCaFpPSf6QFOju9IbApVlWEZQ== 
const BASE_URL = 'https://api.themoviedb.org/3';

fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('movieGrid');
    data.results.forEach(movie => {
      grid.innerHTML += `
        <div class="movie-card">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
          <div class="movie-info">
            <h3>${movie.title}</h3>
            <p class="rating">Rating: ${movie.vote_average}</p>
          </div>
        </div>`;
    });
  });

