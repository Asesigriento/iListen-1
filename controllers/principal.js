
//AL ABRIR LA PAGINA (SALE COMO CANCIÓN PRINCIPAL)
const musica = new Audio('../panama.mp3');

//CREAR ARRAY CON LAS CANCIONES (LISTANDOLAS POR NÚMERO ID)
const canciones = [
    {
        id:'1',
        titulocancion:`Everytime <br>
                <div class="subtitulo">Boy Pablo</div>`,
        portada:"../images/portadas/1.jpg"
    },
    {
        id:'2',
        titulocancion:`Nana <br>
                     <div class="subtitulo">Rojuu</div>`,
        portada:'../images/portadas/2.jpg'
    },
    {
        id:'3',
        titulocancion:`Losing you <br>
                  <div class="subtitulo">Boy Pablo</div>`,
        portada:'../images/portadas/3.jpg'
    },
    {
        id:'4',
        titulocancion:`Jump <br>
        <div class="subtitulo">Van Halen</div>`,
        portada: '../images/portadas/4.jpg'
    },
    {
        id:'5',
        titulocancion:`Clavado en un bar <br>
        <div class="subtitulo">Mana</div>`,
        portada: '../images/portadas/5.jpg'
    },
    {
        id:'6',
        titulocancion:`Toxicity <br>
        <div class="subtitulo">System of a Down</div>`,
        portada: '../images/portadas/6.jpg'
    },
    {
        id:'7',
        titulocancion:`Panama <br>
        <div class="subtitulo">Van Halen</div>`,
        portada: '../images/portadas/7.jpg'
    },
    {
        id:'8',
        titulocancion:`Voy a pasarmelo bien <br>
        <div class="subtitulo">Hombres G</div>`,
        portada: '../images/portadas/8.jpg'
    },
    {
        id:'9',
        titulocancion:`Karma Police <br>
        <div class="subtitulo">Radiohead</div>`,
        portada: '../images/portadas/9.jpg'
    },
    {
        id:'10',
        titulocancion:`Vertigo <br>
        <div class="subtitulo">U2</div>`,
        portada: '../images/portadas/10.jpg'
    },
    {
        id:'11',
        titulocancion:`Big Poppa <br>
        <div class="subtitulo">The notorius B.I.G</div>`,
        portada: '../images/portadas/11.jpg'
    },
    {
        id:'12',
        titulocancion:`Me vuelvo Loco <br>
        <div class="subtitulo">Tequila</div>`,
        portada: '../images/portadas/12.jpg'
    },
    {
        id:'13',
        titulocancion:`Freaking Out the Neighborhood <br>
        <div class="subtitulo">Mac DeMarco</div>`,
        portada: '../images/portadas/13.jpg'
    },
    {
        id:'14',
        titulocancion:`You are my Angel <br>
        <div class="subtitulo">Style & Breeze</div>`,
        portada: '../images/portadas/14.jpg'
    },
    {
        id:'15',
        titulocancion:`Nana<br>
                <div class="subtitulo">Rojuu</div>`,
        portada:"../images/portadas/17.jpg"
    },
    {
        id:'16',
        titulocancion:`Triangulo Amoroso <br>
                     <div class="subtitulo">Rojuu</div>`,
        portada:'../images/portadas/18.jpg'
    },
    {
        id:'17',
        titulocancion:`Nezuko <br>
                  <div class="subtitulo">Rojuu</div>`,
        portada:'../images/portadas/19.jpg'
    },
    {
        id:'18',
        titulocancion:`Amor Acido <br>
                  <div class="subtitulo">Rojuu</div>`,
        portada:'../images/portadas/20.jpg'
    },
    {
        id:'19',
        titulocancion:`Fantasia Placebo <br>
                  <div class="subtitulo">Rojuu</div>`,
        portada:'../images/portadas/19.jpg'
    },
    {
        id:'20',
        titulocancion:`I´m a Man <br>
                  <div class="subtitulo">Black Strobe</div>`,
        portada:'../images/portadas/20.jpg'
    },
    {
        id:'21',
        titulocancion:`La cigarra <br>
                  <div class="subtitulo">Tierra adentro y Kchiporros</div>`,
        portada:'../images/portadas/21.jpg'
    },
    {
        id:'22',
        titulocancion:`Soldadito Marinero <br>
                  <div class="subtitulo">Fito y Fitipaldis</div>`,
        portada:'../images/portadas/21.jpg'
    },
    {
        id:'23',
        titulocancion:`Madre <br>
                  <div class="subtitulo">Juan Diego Flores</div>`,
        portada:'../images/portadas/23.jpg'
    },
    {
        id:'24',
        titulocancion:`End Of the World <br>
                  <div class="subtitulo">Fogorttenage</div>`,
        portada:'../images/portadas/24.jpg'
    }, 
    {
        id:'25',
        titulocancion:`Almoraima <br>
                  <div class="subtitulo">Grisha Goryachev</div>`,
        portada:'../images/portadas/25.jpg'
    },
    {
        id:'26',
        titulocancion:`After Dark <br>
                  <div class="subtitulo">Mr. Kitty</div>`,
        portada:'../images/portadas/26.jpg'
    },
    {
        id:'27',
        titulocancion:`Angel <br>
                  <div class="subtitulo">Massive Attack</div>`,
        portada:'../images/portadas/27.jpg'
    },
    {
        id:'28',
        titulocancion:`Rosas<br>
                  <div class="subtitulo">La Oreja de Van Gogh</div>`,
        portada:'../images/portadas/28.jpg'
    },
    {
        id:'29',
        titulocancion:`I Think I Can <br>
                  <div class="subtitulo">The Pillows</div>`,
        portada:'../images/portadas/29.jpg'
    },
    {
        id:'30',
        titulocancion:`STFU <br>
                  <div class="subtitulo">Shadow</div>`,
        portada:'../images/portadas/30.jpg'
    },
    {
        id:'31',
        titulocancion:`Quasar <br>
                  <div class="subtitulo">Tevvez</div>`,
        portada:'../images/portadas/31.jpg'
    },
    {
        id:'32',
        titulocancion:`Kill EveryBody<br>
                  <div class="subtitulo">Skrillex</div>`,
        portada:'../images/portadas/32.jpg'
    }
];

/*IMPRIMIR EN FORMA DE BUCLE LAS IMAGENES Y NOMBRES DE LAS CANCIONES
Array.from(document.getElementsByClassName('cancion_item')).forEach((element, i) =>{
    element.getElementsByTagName('img')[0].src = canciones[i].portada;
    element.getElementsByTagName('h5')[0].innerHTML = canciones[i].titulocancion;
})*/


/////////////////////////////////////////////  BUSCADORRRRRRRRR  //////////////////////////////////////////////////////
let resultado_busqueda=document.getElementsByClassName("resultado_busqueda")[0];

canciones.forEach(element => {
    const {id,titulocancion,portada} = element;
    let tarjeta= document.createElement('a');
    tarjeta.classList.add('tarjeta');
    tarjeta.href='#' + id;
    tarjeta.innerHTML = `
             <img src="${portada}" alt="">
             <div class="contenido">
                ${titulocancion}
             </div>
            `;
        resultado_busqueda.appendChild(tarjeta);
});

let input =document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value=input.value.toUpperCase();
    let items= resultado_busqueda.getElementsByTagName('a');

    for (let i = 0; i < items.length; i++) {
        let as=items[i].getElementsByClassName('contenido')[0];  
        let texto=  as.textContent || as.innerText;

            if (texto.toUpperCase().indexOf(input_value) > -1){
                    items[i].style.display = "flex";
            }else{
                    items[i].style.display = "none";
            }

            if(input.value == 0){
                    resultado_busqueda.style.display="none";
            }else{
                resultado_busqueda.style.display="";
            }
    }
})


//REPRODUCIR LA MUSICA
let reproducir = document.getElementById('reproducir');

//OLAS (ANIMACION CON LA MÚSICA)
let wave = document.getElementsByClassName('wave')[0];



//CONDICIONAL EN LA QUE REPRODUCE Y PAUSA (CON CAMBIO DE ÍCONOS)
reproducir.addEventListener('click',()=>{
    if(musica.paused || musica.currentTime <=0){
            musica.play();
            reproducir.classList.remove('bi-play-fill');
            reproducir.classList.add('bi-pause-fill');
            wave.classList.add('activar2');
    }else{
        musica.pause();
        reproducir.classList.add('bi-play-fill');
        reproducir.classList.remove('bi-pause-fill');
        wave.classList.remove('activar2');
    }
});





// REPRODUCIR LA CANCION DESDE LOS DISTINTOS LUGARES QUE ESTÁN
const reproducirTodos = () => {
    Array.from(document.getElementsByClassName('playlistplay')).forEach((element) =>{
                element.classList.add('bi-play-circle');
                element.classList.remove('bi-pause-circle');
    })
}


const reproducirConFondo = () => {
    Array.from(document.getElementsByClassName('cancion')).forEach((element) =>{
                element.style.background = "rgb(105,105,170,0)";
    })
}




let index = 0;

/* LA PORTADA DEL REPRODUCTOR*/
let portada_reproductor = document.getElementById('portada_reproductor');

/* TITULO DE LA CANCION DEL REPRODUCTOR*/
let titulo=document.getElementById('titulo');

Array.from(document.getElementsByClassName('playlistplay')).forEach((element) =>{
    element.addEventListener('click',(e)=>{
            index=e.target.id;
            reproducirTodos();
            e.target.classList.remove('bi-play-circle');
            e.target.classList.add('bi-pause-circle');
            /*---------------------------------------------------------*/
            musica.src=`../musica/${index}.mp3`;
            portada_reproductor.src = `../images/portadas/${index}.jpg` ;
            /*---------------------------------------------------------*/
            musica.play();
            let titulo_cancion =canciones.filter((ele)=>{
                return ele.id == index;
            })

            titulo_cancion.forEach(ele => {
                let {titulocancion} = ele;
                titulo.innerHTML = titulocancion;
            })
            reproducir.classList.remove('bi-play-fill');
            reproducir.classList.add('bi-pause-fill');
            wave.classList.add('activar2');

            /*
                musica.addEventListener('ended',()=>{
                    reproducir.classList.add('bi-play-fill');
                    reproducir.classList.remove('bi-pause-fill');
                    wave.classList.remove('activar2');
            })*/

            reproducirConFondo();
            Array.from(document.getElementsByClassName('cancion'))[`${index-1}`].style.background = "rgb (105,105,170, .1)";
    })
})


/* //////////// TIEMPO QUE DURA LA CANCION /////////////////*/ 
let tiempoInicio=document.getElementById('tiempoInicio');
let tiempoFinal=document.getElementById('tiempoFinal');

//BARRA DE MÚSICA (MOVILIDAD)
let buscar=document.getElementById('buscar');
let bar2=document.getElementById('bar2');
let punto=document.getElementsByClassName('punto')[0];



musica.addEventListener('timeupdate',()=>{
    let musica_actual = musica.currentTime;
    let musica_duracion = musica.duration;

    let min=Math.floor(musica_duracion/60);
    let seg=Math.floor(musica_duracion%60);
    if(seg<10){
        seg=`0${seg}`
    }
    tiempoFinal.innerText=`${min}:${seg}`

    let min1=Math.floor(musica_actual/60);
    let seg1=Math.floor(musica_actual%60);

    if(seg1<10){
        seg1=`0${seg1}`
    }

    tiempoInicio.innerText=`${min1}:${seg1}`;

    //BARRA DE PROGRESO
    let barraprogreso=parseInt((musica.currentTime/musica.duration)*100);
        buscar.value=barraprogreso;

    let buscarbar=buscar.value;
    bar2.style.width=`${buscarbar}%`;
    punto.style.left=`${buscarbar}%`;
    })

    buscar.addEventListener('change',()=>{
        musica.currentTime=buscar.value * musica.duration/100;
    })

    /*
    musica.addEventListener('ended',()=>{
        reproducir.classList.add('bi-play-fill');
        reproducir.classList.remove('bi-pause-fill');
        wave.classList.remove('activar2');
    })
    */

    musica.addEventListener('ended',()=>{
        reproducir.classList.add('bi-pause-fill');
        wave.classList.add('activar2');
        index ++;
      /*---------------------------------------------------------*/
      musica.src=`../musica/${index}.mp3`;
      portada_reproductor.src = `../images/portadas/${index}.jpg` ;
      /*---------------------------------------------------------*/
        musica.play();


        let titulo_cancion =canciones.filter((ele)=>{
            return ele.id == index;
        })

        titulo_cancion.forEach(ele => {
            let {titulocancion} = ele;
            titulo.innerHTML = titulocancion;
        })

        reproducirConFondo();
        Array.from(document.getElementsByClassName('cancion'))[`${index-1}`].style.background = "rgb(105,105,170, .1)";
        reproducirTodos();
        document.getElementsByClassName('playlistplay')[index-1].classList.remove('bi-play-circle-fill');
        document.getElementsByClassName('playlistplay')[index-1].classList.add('bi-pause-circle-fill');
    })


//----------------------------VOLUMEN ----------------------------------

    let volumen_icono=document.getElementById('volumen_icono');
    let vol=document.getElementById('vol');
    let volumen_punto=document.getElementById('volumen_punto');
    let volumen_barra=document.getElementsByClassName('volumen_barra')[0];

    vol.addEventListener('change', ()=>{
        if(vol.value == 0){
            volumen_icono.classList.remove('bi-volume-down-fill')
            volumen_icono.classList.add('bi-volume-mute-fill')
            volumen_icono.classList.remove('bi-volume-up-fill')
        }
        if(vol.value > 0){
            volumen_icono.classList.add('bi-volume-down-fill')
            volumen_icono.classList.remove('bi-volume-mute-fill')
            volumen_icono.classList.remove('bi-volume-up-fill')
        }
        if(vol.value > 50){
            volumen_icono.classList.remove('bi-volume-down-fill')
            volumen_icono.classList.remove('bi-volume-mute-fill')
            volumen_icono.classList.add('bi-volume-up-fill')
        }


        let vol_a = vol.value;
        volumen_barra.style.width=`${vol_a}%`;
        volumen_punto.style.left=`${vol_a}%`;
        musica.volume=vol_a/100;

    })

    // ----------------------- VOLVER (BOTON) -------------------------
    let volver=document.getElementById('volver');
    let siguiente=document.getElementById('siguiente');

    volver.addEventListener('click', () => {
        index -= 1;
        if(index <1){
            index =Array.from(document.getElementsByClassName('cancion_item')).length;
        }

      /*---------------------------------------------------------*/
      musica.src=`../musica/${index}.mp3`;
      portada_reproductor.src = `../images/portadas/${index}.jpg` ;
      /*---------------------------------------------------------*/
        musica.play();
        let titulo_cancion =canciones.filter((ele)=>{
            return ele.id == index;
        })

        titulo_cancion.forEach(ele => {
            let {titulocancion} = ele;
            titulo.innerHTML = titulocancion;
        })

        reproducirTodos()

        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');

        reproducirConFondo();
        Array.from(document.getElementsByClassName('cancion'))[`${index-1}`].style.background = "rgb (105,105,170, .1)";
    })




    //*************** BOTON SIGUIENTE ****************/

    siguiente.addEventListener('click', () => {
        index -= 0;
        index += 1;
        if(index > Array.from(document.getElementsByClassName('cancion_item')).length){
            index=1;
        }
            /*---------------------------------------------------------*/
            musica.src=`../musica/${index}.mp3`;
            portada_reproductor.src = `../images/portadas/${index}.jpg` ;
            /*---------------------------------------------------------*/
        musica.play();
        let titulo_cancion =canciones.filter((ele)=>{
            return ele.id == index;
        })

        titulo_cancion.forEach(ele => {
            let {titulocancion} = ele;
            titulo.innerHTML = titulocancion;
        })

        reproducirTodos()

        document.getElementById(`${index}`).classList.remove('bi-play-fill');
        document.getElementById(`${index}`).classList.add('bi-pause-fill');

        reproducirConFondo();
        Array.from(document.getElementsByClassName('cancion'))[`${index-1}`].style.background = "rgb (105,105,170, .1)";
    })





        /////////////////// SCROLL BOTONES( CANCIONES ) ////////////////////////

        let izquierda =document.getElementById('izquierda');
        let derecha =document.getElementById('derecha');
        let canciones_popu = document.getElementsByClassName('canciones_popu')[0];


         izquierda.addEventListener('click',()=>{
             canciones_popu.scrollLeft -=330;
         })

        derecha.addEventListener('click',()=>{
        canciones_popu.scrollLeft +=330;
        })


        // OTROS SCROLLS BOTONES
        let izquierdas =document.getElementById('izquierdas');
        let derechas =document.getElementById('derechas');
        let artista = document.getElementsByClassName('artista')[0];


         izquierdas.addEventListener('click',()=>{
             artista.scrollLeft -=330;
         })

        derechas.addEventListener('click',()=>{
            artista.scrollLeft +=330;
        })
    
        

