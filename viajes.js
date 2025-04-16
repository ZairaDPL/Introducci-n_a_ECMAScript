/* Archivo de solución para mejorar el código de archivo
CoodigoBase-Proyecto-Lectura01.md, haciendo uso de las característica de ES6.
Contiene la solución para el módulo para el apartado de viajes*/

//Array que guardara los destinos usando const
const destinos = [];

function registrarDestino(destino, fecha, transporte) {
    let nuevoViaje = {
        destino: destino,
        fechaViaje: fecha,
        transporteViaje: transporte,
        costo: calcularCosto(destino,transporte)
    };

    destinos.push(nuevoViaje);
}

function calcularCosto(destino, transporte) {
    let costoBase = 0;

    //Costo base por destino
    if (destino === 'Paris') {
        costoBase = 500;
    } 
    else if (destino === 'Londres') {
        costoBase = 400;
    }
    else if (destino === 'New York'){
        costoBase = 600;
    }

    //Costo adicional por tipo de transporte
    if (transporte === 'Avión') {
        costoBase += 200;
    } else if (transporte === 'Tren') {
        costoBase += 100;
    }

    return costoBase;
}

//Esta función puede cambiar
function  mostrarItinerario() {
    for (let i = 0; i < destinos.length; i++) {
        let viaje = destinos[i];
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Costo: $${viaje.costo}`);
        console.log('*******************************');
    }
}