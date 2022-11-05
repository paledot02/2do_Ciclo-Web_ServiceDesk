function Registrar(){
    var nombre = document.getElementById("name").value;
    var dni = document.getElementById("Dni").value;
    var ruc = document.getElementById("ruc").value;
    var atencion = document.getElementById("Atencion").value;
    var numTicket = document.getElementById("numTicket").value;
    var fecha = document.getElementById("fecha").value;
    var estado = document.getElementById("estado").value;
    var descripcion = document.getElementById("descripcion").value;

    document.getElementsByClassName("datosRegistrados")[0].innerHTML = "Nombre:................. " + nombre + "<br>" + "Dni:.................... " + dni + "<br>" + "RUC:.................... " + ruc + "<br>" + "Tipo de Atención:....... " + atencion + "<br>" + "Numero de Ticket:....... " + numTicket + "<br>" + "Fecha de Solicitud:..... " + fecha + "<br>" + "Estado de Solicitud:.... " + estado + "<br>" + "Detalles de Solicitud:.. " + descripcion + "<br>";
}