import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';
import {Flat} from './components/Flat';
import {Marker} from './components/Marker';
import './components/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      center: {lat: 48.884211, lng: 2.34689},
      zoom: 14
    }
  }

  componentDidMount() {
    const url = 'https://react-arirbnb.firebaseio.com/.json';
    fetch(url)
     .then(response => response.json())
     .then(date => this.setState({flats: date}))
  }


  render() {
    return(
     <div className='app'>

      <div className='main'>
       <div className='search'></div>
       <div className='flats'>
         {this.state.flats.map(
             (flat, i) => <Flat key={i} flat={flat} />
          )
         }
       </div>
      </div>

      <div className='map'>
       <GoogleMapReact center={this.state.center} zoom={this.state.zoom}>
       {this.state.flats.map(
           (flat, i) => <Marker key={i} lat={flat.lat} lng={flat.lng} text={flat.price}/>
        )
       }
       </GoogleMapReact>
      </div>
     </div>
   )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
