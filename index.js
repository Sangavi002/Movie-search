let btn = document.querySelector('button');
btn.addEventListener('click',searchMovie)

let mainscreen = document.getElementById("mainscreen")

let url = "https://www.omdbapi.com/?apikey=48c5313a";
let search = document.getElementById('search');
let container = document.getElementById('container');
let container2 = document.getElementById('container2');
function searchMovie(){
    fetch(`${url}&s=${search.value}`)
    .then(res => {
        
        return res.json();
    })
    .then((data) => {
        // console.log(data);
        let movieList = data.Search
        movieListDetail(movieList)
    })
    .catch((error) =>{
        console.log(error);
        alert("Please enter the movie name.")
    })
}

function movieListDetail(movieList){
    mainscreen.style.display = "none";
    movieList.forEach(element => {
        let card = document.createElement('div')
        card.className = "moviecard"
        card.addEventListener("click",function(){
            movieDetailsFetch(element.Title)
        });
        let poster = document.createElement('img')
        poster.src = element.Poster;
        let title = document.createElement('h4');
        title.textContent = `Movie : ${element.Title}`;
        let year = document.createElement('p');
        year.textContent = `Year : ${element.Year}`;
        let imdb= document.createElement('p');
        imdb.textContent = `IMdb : ${element.imdbID}`;

        card.append(poster,title,year,imdb);
        container.append(card);
    });
    
}


function movieDetailsFetch(title){
    fetch(`${url}&t=${title}`)
    .then(result => {
        return result.json();
    })
    .then((ele) => {
        console.log (ele);
       movieadetail(ele)
        

    })
    .catch((error) =>{
        console.log(error)
        
    })
}

function movieadetail(ele){
    mainscreen.style.display = "none";
    container.style.display = "none";
    let card1 = document.createElement('div')
    card1.className = "movieDetail"
    let poster = document.createElement('img')
    poster.src = ele.Poster;
    let title = document.createElement('h4');
    title.textContent = `Title : ${ele.Title}`;
    let description= document.createElement('p');
    description.textContent = `Description : ${ele.Plot}`;
    let releasedate = document.createElement('p');
    releasedate.textContent = `Released : ${ele.Released}`;
    let genre= document.createElement('p');
    genre.textContent = `Genre : ${ele.Genre}`;
    let director= document.createElement('p');
    director.textContent = `Director : ${ele.Director}`;
    let actor= document.createElement('p');
    actor.textContent = `Actors : ${ele.Actors}`;
    let language= document.createElement('p');
    language.textContent = `Language : ${ele.Language}`;
    let country= document.createElement('p');
    country.textContent = `Country : ${ele.Country}`;
    let award= document.createElement('p');
    award.textContent = `Awards : ${ele.Awards}`;



    card1.append(poster,title,description,releasedate,genre,director,actor,language,country,award);
    // container2.innerHTML = '';
    container2.append(card1);
}