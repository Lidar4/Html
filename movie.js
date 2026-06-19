const API_KEY = "104442528f95deaf117dfe649cb33699";

const params = new URLSearchParams(window.location.search);
const movieId = params.get("id");

// মুভির বিস্তারিত তথ্য ফেচ করা
fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
.then(res => res.json())
.then(movie => {
    document.getElementById("movieTitle").innerText = movie.title;
    document.getElementById("movieRating").innerHTML = "⭐ Rating: " + movie.vote_average;
    document.getElementById("movieOverview").innerText = movie.overview;
});

// রেকমেন্ডেড মুভি ফেচ করা
fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${API_KEY}`)
.then(res => res.json())
.then(data => {
    const grid = document.getElementById("recommendedGrid");
    data.results.slice(0,12).forEach(movie => {
        grid.innerHTML += `
        <div class="movie-card">
            <a href="movie.html?id=${movie.id}">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            </a>
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>⭐ ${movie.vote_average}</p>
            </div>
        </div>
        `;
    });
});
