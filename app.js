const API_KEY = "104442528f95deaf117dfe649cb33699";
const BASE_URL = "https://api.themoviedb.org/3";

function loadMovies() {
    fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`)
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
                    <a href="movie.html?id=${movie.id}" class="watch-btn">বিস্তারিত দেখুন</a>
                </div>
            </div>
            `;
        });
    })
    .catch(error => {
        document.getElementById("movieGrid").innerHTML = "<h2 style='color:red'>API Error</h2>";
        console.error("Error fetching data:", error);
    });
}
loadMovies();
