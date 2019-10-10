const axios = require('axios');

const getLugarLatLng = async (dir) => {
    const encodedURI = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURI}`,
        headers: { "x-rapidapi-key": "424e276e2fmshc06bc571f254a82p14b950jsnacf825889309" }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0){
        throw new Error(`No hay resultados para la direccion : ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}