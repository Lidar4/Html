const API_KEY =104442528f95deaf117dfe649cb33699
const BASE_URL = 'https://api.themoviedb.org/3';

fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('movieGrid');
    grid.innerHTML = ''; // পুরনো টেস্ট ডাটা মুছে ফেলবে
    data.results.forEach(movie => {
      grid.innerHTML += `
        <div class="movie-card">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
          <div class="movie-info">
            <h3>${movie.title}</h3>
            <p class="rating">⭐ ${movie.vote_average}</p>
          </div>
        </div>`;
    });
  })
  


api
# আপনার এপিআই কীটি এখানে বসিয়ে দিলাম
API_KEY=104442528f95deaf117dfe649cb33699

cat << EOF > app.js
const API_KEY = '${API_KEY}';
const BASE_URL = 'https://api.themoviedb.org/3';

fetch(\`\${BASE_URL}/movie/now_playing?api_key=\${API_KEY}\`)
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('movieGrid');
    grid.innerHTML = '';
    data.results.forEach(movie => {
      grid.innerHTML += \`
        <div class="movie-card">
          <img src="https://image.tmdb.org/t/p/w500\${movie.poster_path}" alt="\${movie.title}">
          <div class="movie-info">
            <h3>\${movie.title}</h3>
            <p class="rating">⭐ \${movie.vote_average}</p>
          </div>
        </div>\`;
    });
  })
  .catch(err => console.error('Error:', err));
