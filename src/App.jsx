
// // // import React from 'react';
// // // import { Header } from './Components/Header';
// // // import { Hero } from './Components/Hero';
// // // import { Rooms } from './Components/Rooms';
// // // import { Gallery } from './Page/Gallery';
// // // import { Testimonials } from './Components/Testimonials';
// // // import { About } from './Components/About';
// // // import { Contact } from './Components/Contact';
// // // import { Footer } from './Components/Footer';

// // // const App = () => {
// // //   return (
// // //     <div className="min-h-screen">
// // //       <Header />
// // //       <main>
// // //         <Hero />
// // //         <Rooms />
// // //         <About />
// // //         <Gallery />
// // //         <Testimonials />
// // //         <Contact />
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default App;



// // import React from 'react';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import { Header } from './Components/Header';
// // import { Hero } from './Components/Hero';
// // import { Rooms } from './Components/Rooms';
// // import { Testimonials } from './Components/Testimonials';
// // import { About } from './Components/About';
// // import { Contact } from './Components/Contact';
// // import { Footer } from './Components/Footer';
// // import { GalleryPage } from '../src/Page/Gallery'; // new import



// // const App = () => {
// //   return (
// //     <BrowserRouter>
// //       <div className="min-h-screen">
// //         <Header />
// //         <Routes>
// //           <Route
// //             path="/"
// //             element={
// //               <>
// //                 <Hero />
// //                 <Rooms />
// //                 <About />
// //                 <Testimonials />
// //                 <Contact />
// //               </>
// //             }
// //           />
// //           <Route path="/gallery" element={<GalleryPage />} />
// //         </Routes>
// //         <Footer />
// //       </div>
// //     </BrowserRouter>
// //   );
// // };

// // export default App;


// import React from 'react';
// import * as ReactRouterDOM from 'react-router-dom';
// import { Header } from './Components/Header';
// import { Hero } from './Components/Hero';
// import { Events } from './Components/Event';
// // import { Events } from './Components/Rooms';
// import { About } from './Components/About';
// import { Testimonials } from './Components/Testimonials';
// import { Contact } from './Components/Contact';
// import { Footer } from './Components/Footer';
// import { Gallery } from '../src/Page/Gallery';

// const App = () => {
//   return (
//     <ReactRouterDOM.BrowserRouter>
//       <Header />
//       <ReactRouterDOM.Routes>
//         <ReactRouterDOM.Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <Events />
//               <About />
//               <Testimonials />
//               <Contact />
//             </>
//           }
//         />
//         <ReactRouterDOM.Route path="/gallery" element={<Gallery />} />
//       </ReactRouterDOM.Routes>
//       <Footer />
//     </ReactRouterDOM.BrowserRouter>
//   );
// };

// export default App;


import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { Events } from './Components/Event';
import { About } from './Components/About';
import { Testimonials } from './Components/Testimonials';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Gallery } from './Page/Gallery';

const App = () => {
  return (
    <ReactRouterDOM.BrowserRouter>
      <Header />
      <ReactRouterDOM.Routes>
        <ReactRouterDOM.Route
          path="/"
          element={
            <>
              <Hero />
              <Events />
              <About />
              <Testimonials />
              <Contact />
            </>
          }
        />
        <ReactRouterDOM.Route path="/gallery" element={<Gallery />} />
      </ReactRouterDOM.Routes>
      <Footer />
    </ReactRouterDOM.BrowserRouter>
  );
};

export default App;
