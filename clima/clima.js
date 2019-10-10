const axios = require('axios'); 

const getClima = async (lat, lon) => {
    const resp =await axios.get(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&appid=dbae8a9ca2fb2fcca5ace928ee52587e&units=metric`)
    return resp.data.main.temp
}
module.exports = {
    getClima
}