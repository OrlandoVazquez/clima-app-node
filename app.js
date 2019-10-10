const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log
//     )
// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async (dir) => {
    try{
    const {lat,lng,direccion} = await lugar.getLugarLatLng(dir);
    const temp = await clima.getClima(lat,lng);
    return `La temperatura de ${direccion} es ${temp} C°`
    }
    catch(e){
        console.log(`no se pudo determinar el clima de ${dir}`);
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);