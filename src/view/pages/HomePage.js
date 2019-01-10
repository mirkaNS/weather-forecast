import React, {Component,Fragment} from 'react'
import { Link } from "react-router-dom";


class HomePage extends Component {
    constructor(props){
    super(props);
    console.log(props);
    this.state={
    // search:"",
    city:[]
  
    }
    }
 
//  fetchCityWeather = () => {
//     const {city}=this.target.value
//       weatherService.fetchCity(city)
//           .then(cityInfo => {
//               console.log("City", cityInfo)
//               this.setState({ city: cityInfo })

//           })
  
        
//   } 
//   handleSearch = (event) => {  
//     this.setState({
//         search: event.target.value
//     });

//     this.fetchCityWeather(event.target.value);
    
// }
// onSubmitHandler=()=>{
    
//     this.setState({ search:"" })
// }

 


    render(){
        // if (!this.state.city) {
        //     return <h1>Loading...</h1>
        // }
        const {weather}=this.props; 
    
        
        if(weather) {
            return(
                <Fragment>
                    <div>
                     
                     <div className="jumbotron">
                         <h3 className="display-4">City: {weather.name}</h3>
                         <p className="lead">Temp: {weather.main}</p>
                        
                         <p>Speed: {weather.wind}</p>
                         <p>Contrey: {weather.sys}</p>
                         <p>weather: {weather.weather}</p>
                         <Link to="/moreInfo"><button className="btn btn-primary btn-lg"  role="button">More Informatio</button></Link>
                         
                 </div>
                 
                 </div>
                 </Fragment>
             )
        }  
        
        return null;
       
    }
}
export {HomePage}