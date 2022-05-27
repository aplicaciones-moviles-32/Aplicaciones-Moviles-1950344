var arreglo = ["Gignac1.jpg" , "Gignac2.jpg" , "Gignac3.jpg","Gignac4.jpg" ,"Gignac1.jpg" , "Gignac2.jpg" , "Gignac3.jpg"
, "Gignac4.jpg" , "Gignac1.jpg" , "Gignac2.jpg" , "Gignac3.jpg", "Gignac4.jpg" ,"Gignac1.jpg" , "Gignac2.jpg" , "Gignac3.jpg", "Gignac4.jpg"];

var imagenesContenedor = document.getElementById("imagenes");
var imagenesInicioContenedor = document.getElementById("imagenesInicio");

function asignarImagenes(contenedor, size){

for(var x=0; x< arreglo.length; x++){

var columna = document.createElement("ion-col");
columna.size = size;

var imagen = document.createElement("img");
imagen.src = arreglo[x];

columna.appendChild(imagen);
contenedor.appendChild(columna);
}

}

asignarImagenes(imagenesContenedor, "4");
asignarImagenes(imagenesInicioContenedor, "12");

var usuario = {
    "Nombre": "Andre Pierre Gignac",
    "Correo": "APG10@mail.com",
    "ID": "APG10",
    "Password": "1234",
    "FotoPerfil": "Gignac1.jpg",
    "Nacimiento": 05/12/85,
    "Seguidores" : 1000000 ,
    "Seguidos" : 1,
    "Publicaciones" : 20,
    "Descripcion" : "Dale Tigres"
}

var feed = [
    {
        "idpublicacion": "125426452",
        "usuario": "@Gignac_Fan",
        "imagen": "Gignac2.jpg",
        "caption": "El rey de nuevo leon"
    },
    {
        "idpublicacion": "125426452",
        "usuario": "@Gignac_Fan",
        "imagen": "Gignac2.jpg",
        "caption": "El rey de nuevo leon"
    },
    {
        "idpublicacion": "125426452",
        "usuario": "@Gignac_Fan",
        "imagen": "Gignac2.jpg",
        "caption": "El rey de nuevo leon"
    },
    {
        "idpublicacion": "125426452",
        "usuario": "@Gignac_Fan",
        "imagen": "Gignac2.jpg",
        "caption": "El rey de nuevo leon"
    },
    {
        "idpublicacion": "125426452",
        "usuario": "@Gignac_Fan",
        "imagen": "Gignac2.jpg",
        "caption": "El rey de nuevo leon"
    }
]

for (var i=0; i<feed.length;i++){
    var card= document.createElement("ion-card");
    var cardheader= document.createElement("ion-card-header");
    var cardsubtitle= document.createElement("ion-card-subtitle");
    var cardtitle= document.createElement("ion-card-title");
    var containerimg = document.createElement("p");
    var img= document.createElement("img");
    var cardcontent= document.createElement("ion-card-content");

    cardsubtitle.innerHTML = feed[i].idpublicacion;
    cardtitle.innerHTML = "<img src= \"" + feed[i].imagen+feed[i].usuario;
    img.src=feed[i].imagen;
    img.id="imgfeed";
    cardcontent.innerText = feed[i].caption;


    containerimg.appendChild(img);
    cardtitle.appendChild(containerimg);
    cardheader.appendChild(csubtitle);
    cardheader.appendChild(ctitle);
    card.appendChild(cheader);
    card.appendChild(ccontent);
    iniciocontainer.appendChild(card);
}

nombre.innerHTML = usuario.Nombre;
fotoperfil.src = usuario.FotoPerfil;
seguidores.innerHTML = usuario.Seguidores;
seguidos.innerHTML = usuario.Seguidos;
publicaciones.innerHTML = usuario.Publicaciones;
descripcion.innerText = usuario.Descripcion;

