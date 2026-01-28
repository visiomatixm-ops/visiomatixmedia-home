// import { BrowserRouter,Routes,Route } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import "./App.css";
import Header from "./components/Header/Header"
import HomePage1 from "./components/Home/HomePage1/HomePage1";
import HomePage3 from "./components/Home/HomePage3/HomePage3";
import HomePage6 from "./components/Home/HomePage6/HomePage6";
import AboutUs2 from "./components/About/AboutUs2";
import AboutUs3 from "./components/About/AboutUs3";
// import HomePage8 from "./components/Home/HomePage8";
import HomePage2 from "./components/Home/HomePage2/HomePage2";
import HomePage9 from "./components/Home/HomePage9";
import AboutUs5 from "./components/About/AboutUs5";
import HomePage5 from "./components/Home/HomePage5";
import AboutUs1 from "./components/About/AboutUs1";
import HomePage4 from "./components/Home/HomePage4";
import AboutUs4 from "./components/About/AboutUs4";
import HomePgae78 from "./components/Home/HomePage8/HomePgae78";
import ContactUs_header from "./components/ContactUs/Contact/ContactUs_header";
import Contact from "./components/Home/HomePage8/Contact";
import EcommerceSolutions from "./components/Services/EcommerceSolutions/EcommerceSolutions";
import BusinessSoftwareSolutions from "./components/Services/BusinessSoftwareSolutions/BusinessSoftwareSolutions";
import DigitalMarketingService from "./components/Services/DigitalMarketingService/DigitalMarketingService";
import DesignCreativeService from "./components/Services/DesignCreativeService/DesignCreativeService";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import BrandingStrategy from "./components/Services/BrandingStrategy/BrandingStrategy";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <ScrollToTop/>
      <Header className="main-header"/>

      <Routes>
         <Route path="/" element={<><HomePage1/><HomePage2/><HomePage3/><HomePage4/><HomePage5/><HomePage6/><HomePgae78/><HomePage9/></>}/>
         <Route path="/about" element={<><AboutUs1/><AboutUs2/><AboutUs3/><AboutUs4/><AboutUs5/></>}/>
         <Route path="/contact" element={<><ContactUs_header/><Contact/><HomePage9/></>}/>
         <Route path="/services/ecommerce-solutions" element={<><EcommerceSolutions/></>}/>
         <Route path="/services/business-software-solutions" element={<><BusinessSoftwareSolutions/></>}/>
         <Route path="/services/digital-marketing" element={<><DigitalMarketingService/></>} />
         <Route path="/services/design-Creative-Services" element={<><DesignCreativeService/></>} />
         <Route path="/services/branding-strategy" element={<><BrandingStrategy/></>}/>
      </Routes>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
