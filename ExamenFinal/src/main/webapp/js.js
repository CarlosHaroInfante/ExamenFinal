/**
 * 
 */

	
	var clientesNuevos = [];
	 
	function aniadirClientes(){
    var id = prompt("id usuario"); // pido id
    
    var user = prompt("Nombre Usuario"); // pido nombreUsu
    
    var coste = prompt("Coste"); // pido Coste
    
    var fechaEntradaDia = prompt("Fecha entrada Día"); // pido dia
    
    var fechaEntradaMes = prompt("Fecha entrada Mes"); // pido mes
    
    var fechaEntradaAnyo = prompt("Fecha entrada Año"); // pido año
    
    var fechaEntrada = fechaEntradaDia + "/" + fechaEntradaMes + "/" + fechaEntradaAnyo; //Lo uno en una string la fecha
    var diaSumado = parseInt(fechaEntradaDia); // lo paso a int los dias;
    
    var fechaSalida = (diaSumado + 5) + "/" + fechaEntradaMes + "/" + fechaEntradaAnyo; //sumo 5 y el la fecha salida

    var cliente = [id, user, coste, fechaEntrada, fechaSalida]; //creo cliente y sus campos

    
    clientesNuevos.push(cliente); // le añado a clientes nuevos los campos del cliente

		
	 var clienteNuevo = "ID: " + cliente[0] + " Nombre: " +cliente[1] + " Coste:"+ cliente[2] + " FchEntrada"+ cliente[3] + " FchSalida"+ cliente[4] + "<br>";
    
     document.getElementById("clientes").innerHTML += clienteNuevo;  // Lo mando al html
	 }
	 

function eliminar() {
    var idBorrar = prompt("Dame el id del cliente a borrar"); // pido id
    for (var i = 0; i < clientesNuevos.length; i++) { // hago bucle para buscar id
        if (clientesNuevos[i][0] === idBorrar) { // lo comparo como id pedido
            clientesNuevos.splice(i, 1); // lo sustituyo
            break; 
            
           }
           var cliente = [id, user, coste, fechaEntrada, fechaSalida]
           
           var clienteNuevo = "ID: " + cliente[0] + " Nombre: " +cliente[1] + " Coste:"+ cliente[2] + " FchEntrada"+ cliente[3] + " FchSalida"+ cliente[4] + "<br>";
    
           document.getElementById("clientesNuevo").innerHTML += clienteNuevo;
       
    }
}
	

  
	
