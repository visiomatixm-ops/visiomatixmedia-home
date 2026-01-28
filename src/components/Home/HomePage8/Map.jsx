import React from 'react'
import worldMap from "../../../assets/images/map_final.png";
import "./Map.css"


const Map = () => {
  return (
    <section className="global-stage">
      {/* Content Wrapper */}
      <div className="global-container">
        
        {/* Text Overlay */}
        <div className="global-text">
          <p className="subtitle">Representing Visiomatix Media on the</p>
          <h1 className="title">Global Stage!</h1>
        </div>

        {/* Map Image */}
        <div className="map-wrapper">
          <img
            src={worldMap}
            alt="Global Presence Map"
            className="global-map"
          />
        </div>
        
      </div>
    </section>
  );
}

export default Map