function buscar()
{
    //alert("en desarrollo")
    fetch("https://www.omdbapi.com/?apikey=5ab2d3&t=The Godfather")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("imagen1").src=data.Poster
        contenido=''
        contenido+="<p><b>Primer Premio</b></p>"
        contenido+="<p>Aclamada por la Crítica<p>"
        contenido+='<p>'
        contenido+='<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">'
        contenido+='Premios'
        contenido+='</button>'
        contenido+='</p>'
        contenido+='<div class="collapse" id="collapseExample">'
        contenido+='<div class="card card-body">'
        contenido+=data.Awards
        contenido+='</div>'
        contenido+='</div>'
        document.getElementById("texto1").innerHTML= contenido
    });

    
    fetch("https://www.omdbapi.com/?apikey=5ab2d3&t=Jaws")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("imagen2").src=data.Poster
        contenido=''
        contenido+="<p><b>Segundo Premio</b></p>"
        contenido+="<p>Aclamada por la Crítica<p>"
        contenido+='<p>'
        contenido+='<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">'
        contenido+='Premios'
        contenido+='</button>'
        contenido+='</p>'
        contenido+='<div class="collapse" id="collapseExample">'
        contenido+='<div class="card card-body">'
        contenido+=data.Awards
        contenido+='</div>'
        contenido+='</div>'
        document.getElementById("texto2").innerHTML= contenido
    });
    fetch("https://www.omdbapi.com/?apikey=5ab2d3&t=Tombstone")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("imagen3").src=data.Poster
        contenido=''
        contenido+="<p><b>Tercer Premio</b></p>"
        contenido+="<p>Aclamada por el público presente<p>"
        contenido+='<p>'
        contenido+='<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">'
        contenido+='Premios'
        contenido+='</button>'
        contenido+='</p>'
        contenido+='<div class="collapse" id="collapseExample">'
        contenido+='<div class="card card-body">'
        contenido+=data.Awards
        contenido+='</div>'
        contenido+='</div>'
        document.getElementById("texto3").innerHTML= contenido
    });
    fetch("https://www.omdbapi.com/?apikey=5ab2d3&t=Star Wars")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("imagen4").src=data.Poster
        contenido=''
        contenido+="<p><b>Premio Consuelo...</b></p>"
        contenido+="<p>Mejor Recaudación<p>"
        contenido+='<p>'
        contenido+='<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">'
        contenido+='Premios'
        contenido+='</button>'
        contenido+='</p>'
        contenido+='<div class="collapse" id="collapseExample">'
        contenido+='<div class="card card-body">'
        contenido+=data.Awards
        contenido+='</div>'
        contenido+='</div>'
        document.getElementById("texto4").innerHTML= contenido
    });
    /*"Title": "Guardians of the Galaxy Vol. 2",
"Year": "2017",
"Rated": "PG-13",
"Released": "05 May 2017",
"Runtime": "136 min",
"Genre": "Action, Adventure, Comedy",
"Director": "James Gunn",
"Writer": "James Gunn, Dan Abnett, Andy Lanning",
"Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
"Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
"Language": "English",
"Country": "United States",
"Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
"Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
"Ratings": [
{
"Source": "Internet Movie Database",
"Value": "7.6/10"-
},
{
"Source": "Rotten Tomatoes",
"Value": "85%"
},
{
"Source": "Metacritic",
"Value": "67/100"
}
],
"Metascore": "67",
"imdbRating": "7.6",
"imdbVotes": "719,971",
"imdbID": "tt3896198",
"Type": "movie",
"DVD": "22 Aug 2017",
"BoxOffice": "$389,813,101",
"Production": "N/A",
"Website": "N/A",
"Response": "True" */
}
