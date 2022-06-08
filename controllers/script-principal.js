let anteriorCancion = document.querySelector('#anterior');
let play= document.querySelector('#play');
let siguienteCancion = document.querySelector('#siguiente');
let titulo = document.querySelector('#titulo');
let volumenreciente=document.querySelector('#volume');
let mostrarvolumen=document.querySelector('#mostrarvolumen')
let slider=document.querySelector('#duracion-slider');
let mostrarDuracion=document.querySelector('#mostrar-duracion');
let imagen_musica=document.querySelector('#imagen_musica');
let auto_play=document.querySelector('#auto');
let presente=document.querySelector('#presente');
let total=document.querySelector('#total');
let artista=document.querySelector('#artista');


let timer;
let autoplay=0;

let index_no=0;
let sonando=false; 

//CREAR UN ELEMENTO DE AUDIO
let cancion=document.createElement('audio');

//LISTAR TODAS LAS CANCIONES
let todas_canciones=[
{
    nombre: "primera cancion",
    path: "music/Tevvez-Quasar.mp3",
    img: "img/quasar.jpg",
    cantante: "primer cantante"
},
{
    nombre: "Segunda cancion",
    path: "music/zyzz.mp3",
    img: "img/zyzz.jpg",
    cantante: "Segundo cantante"
}
];
//***************************************************************************************/
//*****************************TODAS LAS FUNCIONES***************************************.
//***************************************************************************************/ 




// --------------------------- FUNCION PARA CARGAR LA PISTA --------------------------------

// CARGAR PISTA
function cargar_pista(index_no){
    clearInterval(timer);
    reset_slider();   

    cancion.src=todas_canciones[index_no].path;
    titulo.innerHTML=todas_canciones[index_no].name;
    imagen_musica.src=todas_canciones[index_no].img;
    artista.innerHTML=todas_canciones[index_no].singer;
    cancion.cargar();

  timer=setInterval(range_slider,1000);
    total.innerHTML=todas_canciones.length;
    presente.innerHTML=index_no+1;   
}
cargar_pista(index_no);




// ************************ PARA QUE SUENE O NO LA CANCIÓN ****************************

function reproducir(){
    if(sonando==false){
        // *** LLAMA A LA FUNCION PARA QUE FUNCIONES ***
        sonandocancion();
    }else{
        // *** LLAMA A LA FUNCION PARA QUE FUNCIONES ***
        pausarcancion();
    }
}
//************************************************************************************ */


// Restablecer control deslizante de canción
function reset_slider(){
    slider.value = 0;
}


//____________________________________________________________________________
//CANCION SONANDO
function sonandocancion(){
    cancion.play();
    sonando = true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
  }
//____________________________________________________________________________

// PAUSAR  CANCION
function pausarcancion(){
	cancion.pause();
	sonando = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

// SIGUIENTE CANCION
function cancion_siguiente(){
    if (index_no < todas_canciones.length -1){
        index_no += 1;
        cargar_pista(index_no);
        sonandocancion();
    }else{
        index_no=0;
        cargar_pista(index_no);
        sonandocancion();
    }
}

//CANCION ANTERIOR
function cancion_anterior(){
    if(index_no  >0){
        index_no -= 1;
        cargar_pista(index_no);
        sonandocancion();
    }else {
        index_no=todas_canciones.length;
        cargar_pista(index_no);
        sonandocancion();
    }
}


// CAMBIAR VOLUMEN
function volume_cambiar(){
    mostrarvolumen.innerHTML=volumenreciente.value;
    cancion.volume=volumenreciente.value / 100;
}