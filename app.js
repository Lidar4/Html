const API_KEY = '104442528f95deaf117dfe649cb33699';
const BASE_URL = 'https://api.themoviedb.org/3';

fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('movieGrid');
    grid.innerHTML = '';
    data.results.forEach(movie => {
      grid.innerHTML += `
        <div class="movie-card">
          <a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
          </a>
          <h3>${movie.title}</h3>
          <p>⭐ ${movie.vote_average}</p>
          <a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank" class="watch-btn">
            বিস্তারিত দেখুন
          </a>
        </div>`;
    });
  })
  .catch(err => console.error(err));
fetch(`${BASE_URL}/tv/airing_today?api_key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('tvGrid');
    data.results.forEach(show => {
      grid.innerHTML += `
        <div class="movie-card">
          <a href="https://www.themoviedb.org/tv/${show.id}" target="_blank">
            <img src="https://image.tmdb.org/t/p/w500${show.poster_path}" alt="${show.name}">
          </a>
          <div class="movie-info">
            <h3>${show.name}</h3>
            <p class="rating">⭐ ${show.vote_average}</p>
            <a href="https://www.themoviedb.org/tv/${show.id}" target="_blank" class="watch-btn">বিস্তারিত দেখুন</a>
          </div>
        </div>`;
    });
  })
  .catch(err => console.error(err));
