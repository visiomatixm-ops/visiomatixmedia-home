import "./index.css"
import worldMap from "../../../assets/images/map_final.png";

const AboutUs4 =()=>{
     return <div className="page-about4">  <section className="global-stage-about4">
           {/* Content Wrapper */}
           <div className="global-container-about4">
             
             {/* Text Overlay */}
             <div className="global-text-about4">
               <p className="subtitle-about4">Representing Visiomatix Media on the</p>
               <h1 className="title-about4">Global Stage!</h1>
             </div>
     
             {/* Map Image */}
             <div className="map-wrapper-about4">
               <img
                 src={worldMap}
                 alt="Global Presence Map"
                 className="global-map-about4"
               />
             </div>
             
           </div>
         </section>
         </div>


}

export default AboutUs4;
