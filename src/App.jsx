import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Header } from './Components/Header';
import HeroEventsLayout from './Components/HeroEventsLayout';
import { About } from './Components/About';
import { Testimonials } from './Components/Testimonials';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Gallery } from './Page/Gallery';
import RoomsPage from './Components/RoomPage';  // ✅ Add this import
import "./App.css"; 
import HeroCarousel from './Components/HeroCarousel';

const App = () => {
  return (
    <ReactRouterDOM.BrowserRouter basename="/lander">
      <Header />
      <ReactRouterDOM.Routes>
        <ReactRouterDOM.Route
          path="/"
          element={
            <>
              <HeroEventsLayout />
              <HeroCarousel/>
              <About />
              <Testimonials />
              <Contact />
            </>
          }
        />
        <ReactRouterDOM.Route path="/gallery" element={<Gallery />} />
        <ReactRouterDOM.Route path="/rooms" element={<RoomsPage />} />  {/* ✅ ROOMS ROUTE ADDED */}
      </ReactRouterDOM.Routes>
      <Footer />
    </ReactRouterDOM.BrowserRouter>
  );
};

export default App;
