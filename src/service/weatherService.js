import {weather_api_city} from '../shared/constants';
import Weather from '../entities/Weather'

const fetchCity = (city) => {
const apiKey='c5c62f18f95cdca7aaecd99002dc8f1a';
    const urlCity =weather_api_city+'APPID='+apiKey+'&q='+city;
   console.log(urlCity);
    return fetch(urlCity,{
        method: "GET",
    })
        .then(response => response.json())
        .then(cityInfo => {
     
            console.log("City", cityInfo)
          const {weather, main, wind, clouds, sys, id, name}=cityInfo;
          return new Weather(weather[0].main, weather[0].icon, main.temp, null, null, null, null, wind.speed, clouds.all, sys.country, id, name)
        }).catch(error => console.log(error));

        
}
const featchMoreInfo=(city)=>{
    const apiKey='c5c62f18f95cdca7aaecd99002dc8f1a';
    const urlCity =weather_api_city+'APPID='+apiKey+'&q='+city;
   console.log(urlCity);
    return fetch(urlCity,{
        method: "GET",
    })
        .then(response => response.json())
        .then(cityInfoMore => {
            console.log("City", cityInfoMore)
            const {weather, main, visibilit, wind, clouds, sys, id, name}=cityInfoMore;
            return new Weather(weather[0].main, weather[0].icon, main.temp, main.humidity, main.temp_min, main.temp_max, visibilit, wind.speed, clouds.all, sys.country, id, name)
          }).catch(error => console.log(error));
}
export {fetchCity,
        featchMoreInfo}
  
