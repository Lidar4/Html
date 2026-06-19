const API_KEY = 'YOUR_TMDB_API_KEY_HERE';
const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

fetch(URL)
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('movieGrid');
    data.results.forEach(movie => {
      grid.innerHTML += `
        <div class="movie-card">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
          <h3>${movie.title}</h3>
        </div>`;
    });
  });
