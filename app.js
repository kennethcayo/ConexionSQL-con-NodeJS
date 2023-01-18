var mysql =  require ('mysql')


var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'login',
    user: 'root',
    password: ''
})


conexion.connect(function(error){
    if(error){
        // console.log('Error al conectar con la base de datos')
        throw error; //Captuta el error
    }else{
        console.log('Conectado a la base de datos')
    }
});

// Consulta
conexion.query('SELECT * FROM empleado', function(error, resultados, fields){
    if(error){
        throw error; 

    }else{
        // var data = JSON.parse(JSON.stringify(resultados));
        resultados.forEach((resultado) => {
            console.log(resultado)
        });
    }
});

conexion.end();