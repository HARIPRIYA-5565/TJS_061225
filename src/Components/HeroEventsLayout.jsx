// // HeroEventsLayout.jsx
// import React from "react";
// import { HeroSection } from "./Hero";
// import { EventsRight } from "./Event";

// export const HeroEventsLayout = () => {
//   return (
//     <div
//       style={{
//         width: "92%",
//         maxWidth: "1400px",
//         margin: "120px auto 40px",
//         background: "white",
//         borderRadius: "40px",
//         padding: "3rem 3rem",
//         display: "flex",
//         gap: "3rem",
//         boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
//       }}
//     >
//       {/* LEFT HERO */}
//       <div style={{ width: "60%", display: "flex", flexDirection: "column" }}>
//         <HeroSection />
//       </div>

//       {/* RIGHT EVENT IMAGE */}
//       <div style={{ width: "40%" }}>
//         <EventsRight />
//       </div>
//     </div>
//   );
// };


// HeroLayout.jsx
// import React from "react";
// import { Header } from "./Header";

// const HeroEventsLayout = () => {
//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundImage: "url('/Images/event_DjNight.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         position: "relative",
//         padding: "1.5rem 0 3rem 0",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}
//     >
//       <Header />

//       {/* Hero content over image */}
//       <div
//         style={{
//           marginTop: "5rem",
//           width: "100%",
//           maxWidth: "1200px",
//           position: "relative",
//         }}
//       >
//         {/* Floating text bubble like “There are no limits” */}
//         <div
//           style={{
//             position: "absolute",
//             top: "20%",
//             left: "15%",
//             background: "white",
//             padding: "0.75rem 1.5rem",
//             borderRadius: "18px",
//             fontWeight: 500,
//             fontSize: "0.95rem",
//             boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
//           }}
//         >
//           There are no Limits
//         </div>

//         {/* Optional “14 Languages” style bubble bottom-left */}
//         <div
//           style={{
//             position: "absolute",
//             bottom: "12%",
//             left: "3%",
//             background: "white",
//             padding: "0.5rem 1rem",
//             borderRadius: "999px",
//             fontSize: "0.85rem",
//             display: "flex",
//             alignItems: "center",
//             gap: "0.45rem",
//             boxShadow: "0 8px 24px rgba(0,0,0,0.16)",
//           }}
//         >
//           <span
//             style={{
//               width: "28px",
//               height: "28px",
//               borderRadius: "999px",
//               background: "#eff6ff",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               fontSize: "0.85rem",
//             }}
//           >
//             💬
//           </span>
//           <span>14 Languages</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroEventsLayout;



// HeroEventsLayout.jsx
// HeroEventsLayout.jsx
import React, { useEffect, useState } from "react";
import { HeroSection } from "./Hero";
// import { EventsRight } from "./Event";
import { EventModal } from "./EventModal";

const HeroEventsLayout = () => {
  const [showEventModal, setShowEventModal] = useState(false);

  useEffect(() => {
    setShowEventModal(true); // open on first load
  }, []);

  return (
    <><div >
      {/* Inner card with bg image */}

      {/* LEFT HERO */}
      <div
        style={{
          flex: "1 1 60%",
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HeroSection />
      </div>

      {/* RIGHT EVENT IMAGE */}
    </div><EventModal
        open={showEventModal}
        onClose={() => setShowEventModal(false)} /></>
    
  );
};

export default HeroEventsLayout;
