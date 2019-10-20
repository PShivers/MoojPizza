import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const style = {
    width: '45%',
    height: '50%',
    borderRadius: "10%",
    border: "5px double white",
  }

export class MapContainer extends Component {
  render() {
    return (
      <Map 
        google={this.props.google}
        zoom={13} 
        style={style}
        initialCenter={{lat:33.759492, lng:-84.303531}}
      >

        <Marker
           location={{lat:33.759492, lng:-84.303531}}
            name={'Current location'}
        />

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)