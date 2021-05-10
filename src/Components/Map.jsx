import "./Map.css"
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const Pointer = ({ src }) => <img src={src} />;

//Sets the center point of the map
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 50.739430,
      lng: -1.933440
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      
      <div className="mapBoard">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDzvALTIFYIovExdBy5aXecLbLin0nhHbI" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {//Set the pointers in the map accordingly to the parameters received
          this.props.data.map((item) => {
            return (
              <Pointer
                lat={item.latitude}
                lng={item.longitude}
                src="https://trello-attachments.s3.amazonaws.com/5f194a8116192d6f13039477/5f194de15f62c475bd9d3d4f/5ec38c6dc8ffb133f95f6d7d1db26cc5/pointer.png"
              />
            );
          })}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;