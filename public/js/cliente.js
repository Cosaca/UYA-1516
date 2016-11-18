$( document ).ready(function() {
    $('.button-collapse').sideNav({
      menuWidth: 240, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );
    
    //$("#boton_registro").click(function()){
        
    //}
    
    $("#boton_busqueda").click(function(){
        console.log($("#trayecto").val());
        $.get("/usuarios", {
            "trayecto": $("#trayecto").val()
            
        },function(data){
            console.log(data[0]);
            var info;
            for(var i= 0; i < data.length; i++)
            { 
                info = "<tr><td>"+ data[i].Modelo + "</td><td>" + data[i].Conductor + "</td><td>" + data[i].Rutina_viajes + "</td><td>" + data[i].Otros_viajeros + "</td><td>" + data[i].Zonas_de_accion +"</td></tr>";
                $("#resultados").append(info);
                console.log(info);
            }
            
        });
    });
});