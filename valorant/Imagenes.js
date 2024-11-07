//CREAMOS LA CLASE DE LAS TARJETAS
class Imagen {

    // CONSTRUCTOR DE LA CLASE CON SUS ATRIBUTOS
    constructor(pregunta,respuesta,imagen){
        this.pregunta=pregunta;
        this.respuesta=respuesta;
        this.imagen=imagen;
    }

    // GETTER DE LOS ATRIBUTOS QUE VAMOS A UTILIZAR
    get Pregunta(){
        return this.pregunta
    }

    get Respuesta(){
        return this.respuesta;
    }

    get Imagen(){
        return this.imagen;
    }

}

// CREAMOS LOS OBJETOS
let imagen1 = new Imagen("¿Cuanto duran los humos de Bristome?","12","img/img01.jpg");
let imagen2 = new Imagen("¿Cuantas estrellas tiene Astra?","5","img/img02.jpg");
let imagen3 = new Imagen("Orbes necesarios para la ulti de Kj","6","img/img03.jpg");
let imagen4 = new Imagen("Tiempo en defusar la spike","4","img/img04.jpg");
let imagen5 = new Imagen("Personaje con más edad","reyna","img/img5.jpg");
let imagen6 = new Imagen("Rol de chamber","centinela","img/img6.jpg");
let imagen7 = new Imagen("Ciudad de Origen de Ascent","italia","img/img7.jpg");
let imagen8 = new Imagen("Nacionalidad de Omen","desconocida","img/img08.jpg");
let imagen9 = new Imagen("¿Quién peleó contra Reyna?","kay/o","img/img09.jpg");
let imagen10 = new Imagen("¿Vuelve Phoenix con el arma recargada tras su ulti?","si","img/img10.jpg");
let imagen11 = new Imagen("Cooldown de la curación de Sage","40","img/sage.jpg");

// CREAMOS EL ARRAY QUE CONTIENE LOS OBJETOS DE CLASE IMAGEN
let img=[imagen1,imagen2,imagen3,imagen4,imagen5,imagen6,imagen7,imagen8,imagen9,imagen10, imagen11];

//CREAMOS LAS VARIABLES QUE VAMOS A UTILIZAR MÁS ADELANTE
let aciertos=0;
let fallos=0;
let intentos=0;
let segundos=0;
let minutos=0;
let newArray;
let aleatorio;
let acabado=false;
let pararImg=true;

//VARIABLES CON EL DOCUMENT GET ELEMENT
verReloj=document.getElementById("time");
let respuest=document.getElementById("ventana1");

// VARIABLES QUE SE REPITEN CADA X SEGUNDOS
let contaReloj = setInterval(reloj,1000);
let barajarImagenes=setInterval(mostrarImagen,150);

//FUNCION QUE MUESTRARA POR PANTALLA LA IMAGEN Y LA PREGUNTA
function mostrarImagen(){
    if(pararImg){
        aleatorio=Math.floor(Math.random()*img.length);
        newArray=img[aleatorio];
        document.getElementById("pregunta").innerHTML=newArray.Pregunta;
        document.getElementById("im").src=newArray.Imagen;
    }
}

//FUNCION QUE SE ENCARGA DE MOSTRAR EL TIEMPO EN LA PANTALLA
function reloj(){
    //MIENTRAS QUE SIGAN HABIENDO TARJETAS EL RELOJ SIGUE SUMANDO TIEMPO
    if(!acabado){
        segundos=segundos+1;
        if(segundos>59){
            minutos++;
            segundos=0;
        }
        if(segundos<10){
            verReloj.innerHTML=minutos+":0"+segundos;
        }else{
            verReloj.innerHTML=minutos+":"+segundos;
        } 
    }
    // UNA VEZ QUE HAYA ACABADO EL RELOJ PARARA
    else{
        if(segundos>59){
            minutos++;
            segundos=0;
        }
        if(segundos<10){
            verReloj.innerHTML=minutos+":0"+segundos;
        }else{
            verReloj.innerHTML=min+":"+segundos;
        } 
    }
}

// FUNCION QUE PARARA LA SELECCION DE IMAGEN Y DEJARA UNA POR PANTALLA
function pararImagen(){
    pararImg=false;
    console.log(newArray.Respuesta);
}

// FUNCION QUE REANUDA LAS IMAGENES
function continuarImagen(){
    pararImg=true;
    if(img.length==0){
        acabado=true;
        terminarJuego();
    }
    console.log("");
}

// FUNCION QUE COMPRUEBA EL DATO INTRODUCIDO POR PANTALLA RESPECTO A LA RESPUESTA DE LA TARJETA
function comprobarRespuesta(){
    // COMPROBAMOS LA RESPUESTA INDEPENDIENDO DE QUE SEA MAYÚSCULA O NO 
    if(respuest.value.toLowerCase()==newArray.Respuesta){
        pararImg=false;
        document.getElementById("im").src="img/acierto.jpg";
        document.getElementById("pregunta").innerHTML = "¡Enhorabuena! Es correcto";
        img.splice(aleatorio, 1);
        aciertos++;
    }else{
        pararImg=false;
        document.getElementById("im").src="img/incorrecto.jpg";
        document.getElementById("pregunta").innerHTML = "Lo siento! No es correcto";
        fallos++;
    }
    intentos++;
    document.getElementById("ventana1").value="";
}

// FUNCION QUE CUANDO NO QUEDEN IMAGENES EN EL ARRAY MOSTRARA EL NUMERO DE FALLOS, ACIERTOS E INTENTOS DEL USUARIO ASI COMO UNA IMAGEN DE VICTORIA
function terminarJuego(){
    if(acabado){
        clearInterval(barajarImagenes);
        document.getElementById("pregunta").innerHTML = "Nº de aciertos: "+ aciertos + "&nbsp;" + "&nbsp;" + "&nbsp;" + "Nº de fallos: " + fallos;
        document.getElementById("pregunta1").innerHTML = "Nº de intentos totales: " + intentos;
        document.getElementById("im").src="img/victoria.jpg";
    }
}

// INICIAMOS LAS FUNCIONES
mostrarImagen();
reloj();