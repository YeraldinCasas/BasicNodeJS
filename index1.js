/* const os = require('os');


console.log(os.platform());
console.log(os.release());
console.log('Memoria libre: ', os.freemem(), 'bytes');//Lo da en bites porque la unidad básica son los bytes 
console.log('Total memoria: ', os.totalmem(), 'bytes');
 */

 //Esto es código asincrono 
 
 const fs = require ('fs'); 
 fs.writeFile('./texto.txt', 'linea uno',function (error) {
     if (error) {
         console.log(error);
     }
     console.log('Archivo creado')
 })

 console.log('última línea de código');

/*  Node delga tareas, en el ejemplo anterior el método writeFile de crear un archivo nuevo
 es tarea del sistema operativo y no de Node, entonces con el callaback lo que le dice que después
 de crear el archivo pinte en consola "archivo creado", pero el console log de "última línea de código"
 se ejecuta primero porque si es tarea de node por lo tanto en la consola primero pinta "ultima línea"
 y después "archivo creado"
 */

fs.readFile('./texto.txt', function (error,data) {
    if (error) {
        console.log(error)
    }
    console.log (data.toString())
})