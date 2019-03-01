import React, { Component } from "react"
import GoogleMapReact from "google-map-react"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class Gmap extends Component {
  static defaultProps = {
      center: {
          lat: 59.95,
          lng: 30.33
      },
      zoom: 11
  };

render() {
    const API_KEY = process.env.REACT_APP_MAPS_API_KEY
  return (
      <div style={{ height: "100vh", width: "100%"}}>
          <GoogleMapReact
              apiKey={API_KEY}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
          >
              <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text={"Kreyser"}
              />
          </GoogleMapReact>
      </div>
  )
}
}

export default Gmap;