export default async function getCurrentWeather(locationCoords){
    const axios = require('axios').default
    const lat = locationCoords.latitude
    const lon = locationCoords.longitude
    var result = []
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ad8cce59c79a5a4e9d97ba56784e074a`)
    .then((response)=>{
        const data = response.data
        const locationName = (data.sys.country + ', ' + data.name)
        const MinTemp = data.main.temp_min
        const MaxTemp = data.main.temp_max
        const wind = data.wind.speed
        const humidity = data.main.humidity
        const currenTemperature = data.main.temp
        result = [currenTemperature,MinTemp,MaxTemp,locationName,wind,humidity]
    })
    .catch((error)=>{
        console.log(error)
    })
    return result;
}