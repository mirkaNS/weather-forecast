import React, {Component, Fragment} from 'react';
import './Header.css'
import * as weatherService from '../../service/weatherService'
import { Link } from "react-router-dom";
class Header extends Component {

  constructor(props){
    super(props)
    this.state={
    search:"",
    }}
  searchCity  = (event) => {
  const { setWeather} = this.props;
  const cityName =   event.target.value;
  weatherService.fetchCity(cityName)
  .then(cityInfo => {
      console.log("City", cityInfo)
      setWeather(cityInfo)

  })
}

render() {
  return(
      <Fragment>
          <nav className="navbar navbar-dark bg-dark navbar-light bg-light">
 <div className="container">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#weatherMaps" role="tab" aria-controls="profile" aria-selected="false">Weather Maps</a>
  </li>

</ul>
<form className="form-inline">
    <input className="form-control mr-sm-2" onChange={this.searchCity} type="search" placeholder="Search" aria-label="Search"/>
    <Link to="/home"><button className="btn btn-outline-success my-2 my-sm-0"  type="submit">Search</button></Link>
  </form>
  </div> 
</nav>

</Fragment> 
    )
}
}
export {Header};