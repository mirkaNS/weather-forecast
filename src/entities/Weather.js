class Weather {
    constructor(weather,icon,main,humidity,temp_min,temp_max,visibility,wind,clouds,sys,id,name) {
        this.weather=weather;
        this.icon=icon;
        this.main=main;
        this.humidity=humidity;
        this.temp_min=temp_min;
        this.temp_max=temp_max;
        this.visibility=visibility;
        this.wind=wind;
        this.clouds=clouds;
        this.sys=sys;
        this.id=id;
        this.name=name;
    }
}
export default Weather;