function tiempo(){

    // conseguimos todos los datos de la fecha
    let fecha=new Date();
    //extraemos los valor que requerimos de fecha
    let diaSemana=fecha.getDay();
    let diaMes=fecha.getDate();
    let mes=fecha.getMonth();
    let año=fecha.getFullYear();
    let hora=fecha.getHours();
    let min=fecha.getMinutes();
    let seg=fecha.getSeconds();
    
    switch(diaSemana){
        case 1: diaSemana="Lunes";break;
        case 2: diaSemana="Martes";break;
        case 3: diaSemana="Miercoles";break;
        case 4: diaSemana="Jueves";break;
        case 5: diaSemana="Viernes";break;
        case 6: diaSemana="Sabado";break;
        default: diaSemana="Domingo";break;
    }
    switch(mes){
        case 1: mes="Enero";break;
        case 2: mes="Febrero";break;
        case 3: mes="Marzo";break;
        case 4: mes="Abril";break;
        case 5: mes="Mayo";break;
        case 6: mes="Junio";break;
        case 7: mes="Julio";break;
        case 8: mes="Agosto";break;
        case 9: mes="Septiembre";break;
        case 10: mes="Octubre";break;
        case 11: mes="Noviembre";break;
        default: mes="Diciembre";break;
    }
    
    var meridiano
    if(hora>=12) meridiano="P.M."
    else meridiano="A.M."
    
    
    document.getElementsByClassName("fecha")[0].innerHTML= hora + ":" + min + ":" + seg + " " + meridiano;
    
    setTimeout("tiempo()",1000)
    }
    //document.body.setAttribute("onload", "tiempo()");

    /* ------------------------------------------------------ */

    function ampliar1(){
        document.getElementsByClassName("imag")[0].style.transform = "scale(1.2)";
    }
    function original1(){
        document.getElementsByClassName("imag")[0].style.transform = "scale(1)";
    }
    function ampliar2(){
        document.getElementsByClassName("imag")[1].style.transform = "scale(1.2)";
    }
    function original2(){
        document.getElementsByClassName("imag")[1].style.transform = "scale(1)";
    }
    function ampliar3(){
        document.getElementsByClassName("imag")[2].style.transform = "scale(1.2";
    }
    function original3(){
        document.getElementsByClassName("imag")[2].style.transform = "scale(1)";
    }
    function ampliar4(){
        document.getElementsByClassName("imag")[3].style.transform = "scale(1.2";
    }
    function original4(){
        document.getElementsByClassName("imag")[3].style.transform = "scale(1)";
    }



/* MOVIMIENTO AUTOMATICO DE LOS COMENTARIOS */
var x=0
var y=1
function rotar(){
    var valor = ["block","none"];
    
    if(x==2){x=0}
    if(y==-1){y=1}

    document.getElementsByClassName("comentario_uno")[0].style.display = valor[x];
    document.getElementsByClassName("comentario_dos")[0].style.display = valor[y];
    //document.getElementsByClassName("comentario_tres")[0].style.display = valor[x-1];
    x++;
    y--;
    setTimeout("rotar()",2000);
}
document.body.setAttribute("onload", "rotar(); tiempo()");






function respuesta(){
    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var consulta = document.getElementById("consulta").value;

    if(nombre != "" & telefono != "" & correo != "" & consulta != ""){
        document.getElementsByClassName("respuestaFormulario")[0].innerHTML = "Gracias por mandar su consulta, Pronto le enviaresmos la respuesta a correo"
    }
    else{
        document.getElementsByClassName("respuestaFormulario")[0].innerHTML = "Por favor Rellene todos los Campos"
    }
}

    
