/* for (let i=0; i<4;i++){
    alert(i);
} */
/* for (let i=0; i<4;i++){
    alert('Van '+i+' Veces');
} */
//
/* const cantidad =prompt('Ingrese numer: ');

for (let i= 0;i<= cantidad; i++){
    console.log(i*10);1
} */

//EJEMPLO DE TURNOS


/* for (let i= 1; i<= 3; i++){
    const nombre =prompt('Ingrese nombre: ');

    if (nombre ==""){
        console.log('No se ingreso nombre. CHAU');
        //i = i+; si pongo esto, descuenta 1 y continua el conteo sin saltearse nungun valor
        break;//Si pongo "continue;" saltea este numero pero sigue entregando mumeros
    }

    console.log('Hola '+nombre+' tiene numero: '+i);
} */


//WHILE
/* let condition = true;
while(condition){
    console.log("la condicion es verdadera");
    //se ejecutaria ifiito salvo que la condicion se torne falsa
    condition = 10==20; //Da false y para el while
} */


let option = true;
while(option !=0 ){
    option = prompt("Opcion: \n 1. Ver saldo. \n 2.Extraer Saldo \n 0.Salir");
    //se ejecutaria ifiito salvo que la condicion se torne falsa
    condition = 10==20; //Da false y para el while
}