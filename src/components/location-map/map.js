import React, {Component} from 'react';
import MapGL from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';



export default class Map extends Component {
  render() {
    const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiZm9sZXZvc3UiLCJhIjoiY2p5NzRneGwzMDc3ZTNubGNlODMzcGdtNiJ9.-QNE7uMRXsqlkkKfEmiC-A"
    return (
      <div>
      <MapGL
              style={{ width: '100%', height: '300px' }}
              mapStyle='mapbox://styles/mapbox/streets-v11'
              accessToken={MAPBOX_ACCESS_TOKEN}
              latitude={41.108474}
              longitude={29.034164}
              zoom={12}
            />
            <br></br>
            <br></br>
            </div>
        
    );
  }
}

