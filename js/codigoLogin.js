
function validar(){
    
    var usuario = document.getElementById("user").value;
    var contraseña = document.getElementById("pass").value;

    var expRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if( expRe.test(usuario) & expRe.test(contraseña)){

        if(usuario == "Admin001" & contraseña == "Password444"){
            location.href='Bienvenido.html';
        }
        else{
            document.getElementsByClassName("respuestaFormulario")[0].innerHTML = "Usuario no Encontrado";
        }
    }
    else{
        document.getElementsByClassName("respuestaFormulario")[0].innerHTML = "Datos incorrectos" + "\n" + "Debe tener al menos una letra Mayuscula, una Minuscula y un número";
    }
}
