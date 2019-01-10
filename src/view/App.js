import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import {Header} from './common/Header'
import {Footer} from './common/Footer'
import {HomePage} from './pages/HomePage'
import MoreInfo from './pages/MoreInfo'

class App extends Component {
  state= {
    weather:"",
  }

  setWeather = (weather) => {
    console.log("Vreme",weather);
    this.setState({ weather });
  }
  render() {
    const { weather } = this.state;
    return (
      <Fragment>
        <Header setWeather={this.setWeather} />
        <main>
          <Switch>
          <Route path="/moreInfo" component={()=><MoreInfo weather={weather}/>} />
            <Route path="/"
              component={() => <HomePage weather={weather} />} />

          </Switch>
        </main>
        <Footer/>
      </Fragment>
   
    );
  }
}

export default App;
