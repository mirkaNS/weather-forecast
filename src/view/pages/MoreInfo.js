import React, {Component,Fragment} from 'react'
import * as weatherService from '../../service/weatherService'
import {withRouter} from "react-router-dom"

class MoreInfo extends Component{
    constructor(props){
        super(props);
        this.state={
        city:[]
      
        }

} 
componentWillMount(){
    const {name}=this.props.weather;
    if(!name){
        this.props.history.push("/home");
    }else{
    console.log(this.props,"Ime grada")
    weatherService.featchMoreInfo(name)
  .then(cityInfoMore => {
      console.log("City", cityInfoMore)
      this.setState({ city: cityInfoMore })
    })
}}
render(){
    const {city}=this.state;
  
    return(
        <Fragment>
  <div>
                     
                     <div className="jumbotron">
                         <h3 className="display-4">City: {city.name}</h3>
                         <p className="lead">Temp: {city.main}</p>
                        <p>Min Temp: {city.temp_min}</p>
                        <p>Max Temp: {city.temp_max}</p>
                        <p>Humidity: {city.humidity}</p>
                        <p>Visibilit: {city.visibilit}</p>
                         <p>Speed: {city.wind}</p>
                         <p>Contrey: {city.sys}</p>
                         <p>weather: {city.weather}</p>
                         </div>
                         </div>
        </Fragment>
    )
}
}
export default withRouter(MoreInfo)