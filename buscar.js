
function completa(url,i,t,posicion,descripcion){
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("imagen"+i).src=data.Poster
        contenido=''
        contenido+="<p><b>"+posicion+"</b></p>"
        contenido+="<p>"+descripcion+"<p>"
        contenido+='<p>'
        contenido+='<button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample'+i+'" aria-expanded="false" aria-controls="collapseExample">'
        contenido+='Premios'
        contenido+='</button>'
        contenido+='</p>'
        contenido+='<div class="collapse" id="collapseExample'+i+'">'
        contenido+='<div class="card card-body">'
        contenido+=data.Awards
        contenido+='</div>'
        contenido+='</div>'
        document.getElementById("texto"+t).innerHTML= contenido
    });
}

function buscar()
{
    //alert("en desarrollo")
    completa("https://www.omdbapi.com/?apikey=5ab2d3&t=The Godfather","1","1","Primer Premio","Aclamada por la Crítica")
    completa("https://www.omdbapi.com/?apikey=5ab2d3&t=Jaws","2","2","Segundo Premio","Aclamada por la Crítica")
    completa("https://www.omdbapi.com/?apikey=5ab2d3&t=Tombstone","3","3","Tercer Premio","Aclamada por el público presente")
    completa("https://www.omdbapi.com/?apikey=5ab2d3&t=Star Wars","4","4","Premio Consuelo...","Mejor Recaudación")
    
    /*
*/

}
