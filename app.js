const API_KEY = '104442528f95deaf117dfe649cb33699';
const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=' + API_KEY;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('movieGrid');
    grid.innerHTML = '';
    data.results.forEach(movie => {
      grid.innerHTML += '<div><img src="https://image.tmdb.org/t/p/w200' + movie.poster_path + '"><h3>' + movie.title + '</h3></div>';
    });
  })
  .catch(err => console.error(err));
