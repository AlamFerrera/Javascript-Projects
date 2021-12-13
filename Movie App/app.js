const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const main = document.getElementById("main");

async function getMovies(){
    const resp = await fetch(APIURL);
    const respData = await resp.json();

    respData.results.forEach((movie) => { console.log(movie);
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
            <div>
                <img src="${IMGPATH + movie.poster_path}" alt="Poster">
            </div>
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="${getClassByAverage(movie.vote_average)}">${movie.vote_average}</span>
            </div>
        `;
        main.appendChild(movieEl);
    });
    return respData;
}

function getClassByAverage(avg){
    if(avg >= 8){
        return "green";
    }
    else if(avg >= 5){
        return "orange";
    }
    else{
        return "red";
    }
}

getMovies();