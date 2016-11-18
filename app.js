var express = require("express");
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'cosaca',
    password : '',
    database : 'usuarios',
});

app.get('/usuarios',function(req,res){
    var data = {
    "error":1,
    "Usuario":" "
};

/*app.get('/registros',function(req,res){
    
    console.log(req.query.r_nombre);
    var post = {
        Nombre: req.query.r_nombre,
        Apellidos: req.query.r_apellidos,
        Correo: req.query.r_correo,
        Comentario_adicionales: req.query.r_comentarios_adicionales
    };

    connection.query('INSERT INTO registros SET ?', post, function(error) {
        if (error) {
            console.log(error.message);
        } 
        else 
        {
            console.log('success');    
        }
    });
});*/


console.log(req.query.trayecto);

connection.query("SELECT * FROM usuarios WHERE Rutina_viajes ='"+ req.query.trayecto +"'",function(err, rows, fields){
    if(err)  throw err;
    
    console.log(rows);
    if(rows.length != 0){
        data["error"] = 0;
        data["Usuarios"] = rows;
        res.json(rows);
    }
    else
    {
		console.log(data);
        data["Usuarios"] = 'No books Found..';
        res.json(data);
    }
});
});

app.use(express.static(__dirname + '/public'));

app.listen(8080);