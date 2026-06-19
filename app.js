const API_KEY = "104442528f95deaf117dfe649cb33699";

fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
.then(res => res.json())
.then(data => {
    alert(JSON.stringify(data).substring(0,200));
})
.catch(err => {
    alert("ERROR: " + err);
});
