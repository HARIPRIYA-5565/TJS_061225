// import React from 'react';
// import { SectionId } from '../constants';

// const images = [
//    '/Images/imageEight.jpg',
//   '/Images/imageTen.jpg',
//   '/Images/imageFourteen.jpg',
//   '/Images/imageFifteen.jpg',
//   '/Images/imageSixteen.jpg',
//   '/Images/imageSeventeen.jpg',
//   '/Images/imageEighteen.jpg',
//   '/Images/imageNineteen.jpg',
//   '/Images/imageTwenty.jpg',
// '/Images/imageTwentyOne.jpg',
//  '/Images/imageTwentyTwo.jpg',
//  '/Images/imageTwentyThree.jpg',
//  '/Images/imageTwentyFour.jpg',
//  '/Images/imageTwentyFive.jpg',
// ];

// export const Gallery = () => {
//   const styles = {
//     section: {
//       padding: '6rem 0',
//       backgroundColor: '#f3f4f6', // stone-100
//     },
//     container: {
//       width: '90%',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '0 1rem',
//     },
//     header: {
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-between',
//       alignItems: 'flex-end',
//       marginBottom: '3rem',
//     },
//     headerContent: {
//       maxWidth: '36rem',
//     },
//     label: {
//       color: '#16a34a', // jungle-600
//       fontWeight: 'bold',
//       textTransform: 'uppercase',
//       letterSpacing: '0.1em',
//       fontSize: '0.75rem',
//     },
//     title: {
//       fontFamily: 'serif',
//       fontWeight: 'bold',
//       fontSize: '2rem',
//       color: '#1e293b', // earth-900
//       marginTop: '0.5rem',
//     },
//     button: (hovered) => ({
//       display: 'inline-block',
//       padding: '0.5rem 1.5rem',
//       borderRadius: '9999px',
//       border: '1px solid #1e293b',
//       backgroundColor: hovered ? '#1e293b' : 'transparent',
//       color: hovered ? '#ffffff' : '#1e293b',
//       cursor: 'pointer',
//       transition: 'all 0.3s',
//       fontWeight: '500',
//     }),
//     galleryGrid: {
//       columnCount: window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1,
//       columnGap: '1.5rem',
//     },
//     galleryItem: {
//       breakInside: 'avoid',
//       marginBottom: '1.5rem',
//       borderRadius: '1rem',
//       overflow: 'hidden',
//       cursor: 'zoom-in',
//       position: 'relative',
//       transition: 'transform 0.7s',
//     },
//     galleryImg: {
//       width: '100%',
//       height: 'auto',
//       display: 'block',
//       transition: 'transform 0.7s',
//     },
//     overlay: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0,0,0,0.2)',
//       opacity: 0,
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       transition: 'opacity 0.3s',
//     },
//     overlayText: {
//       color: '#ffffff',
//       fontSize: '1.125rem',
//       fontFamily: 'serif',
//       fontStyle: 'italic',
//     },
//     mobileButtonWrapper: {
//       marginTop: '2rem',
//       textAlign: 'center',
//     },
//   };

//   // Hover state handling for buttons and gallery images
//   const [hoveredButton, setHoveredButton] = React.useState(false);
//   const [hoveredIndex, setHoveredIndex] = React.useState(null);

//   return (
//     <section id={SectionId.GALLERY} style={styles.section}>
//       <div style={styles.container}>
//         <div style={styles.header}>
//           <div style={styles.headerContent}>
//             <span style={styles.label}>Visual Journey</span>
//             <h2 style={styles.title}>Captured Moments</h2>
//           </div>
//           <div className="desktop-button" style={{ display: window.innerWidth >= 768 ? 'block' : 'none' }}>
//             <button
//               style={styles.button(hoveredButton)}
//               onMouseEnter={() => setHoveredButton(true)}
//               onMouseLeave={() => setHoveredButton(false)}
//             >
//               Follow on Instagram
//             </button>
//           </div>
//         </div>

//         <div style={styles.galleryGrid}>
//           {images.map((src, idx) => (
//             <div
//               key={idx}
//               style={{
//                 ...styles.galleryItem,
//                 transform: hoveredIndex === idx ? 'scale(1.05)' : 'scale(1)',
//               }}
//               onMouseEnter={() => setHoveredIndex(idx)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <img src={src} alt={`Gallery image ${idx + 1}`} style={styles.galleryImg} />
//               <div
//                 style={{
//                   ...styles.overlay,
//                   opacity: hoveredIndex === idx ? 1 : 0,
//                 }}
//               >
//                 <span style={styles.overlayText}>Discover</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div style={styles.mobileButtonWrapper}>
//           {window.innerWidth < 768 && (
//             <button
//               style={styles.button(hoveredButton)}
//               onMouseEnter={() => setHoveredButton(true)}
//               onMouseLeave={() => setHoveredButton(false)}
//             >
//               View All Photos
//             </button>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };


// import React from 'react';
// import { SectionId } from '../constants';

// const images = [
//   '/Images/imageEight.jpg',
//   '/Images/imageFourteen.jpg',
//   '/Images/imageFifteen.jpg',
//   '/Images/imageSixteen.jpg',
//   '/Images/imageSeventeen.jpg',
//   '/Images/imageEighteen.jpg',
//   '/Images/imageNineteen.jpg',
//   '/Images/imageTwenty.jpg',
//   '/Images/imageTwentyOne.jpg',
//   '/Images/imageTwentyTwo.jpg',
//   '/Images/imageTwentyThree.jpg',
//   '/Images/imageTwentyFive.jpg',
//   '/Images/imageTwentySix.jpg',
//   '/Images/imageTwentySeven.jpg',
//   '/Images/imageTwentyEight.jpg',
//   '/Images/imageThirty.jpg',
//   '/Images/imageThirtyOne.jpg',
//   '/Images/imageThirtyTwo.jpg',
//   '/Images/imageThirtyThree.jpg',
//   '/Images/imageThirtyFour.jpg',
//   '/Images/imageThirtyFive.jpg',
//   '/Images/imageThirtySix.jpg',
//   '/Images/imageThirtySeven.jpg',
//   '/Images/imageFourty.jpg',
//   '/Images/imageFourtyOne.jpg',
//   '/Images/imageFourtyTwo.jpg',
//   '/Images/imageFourtyThree.jpg',
//   '/Images/imageFourtyFour.jpg',
//   '/Images/imageFourtyFive.jpg',
// ];

// // Add your video sources here
// const videos = [
//   '/Videos/TJS_VideoOne.mp4',
//    '/Videos/TJS_VideoFour.mp4',
//   '/Videos/TJS_VideoFive.mp4'
// ];

// export const Gallery = () => {
//   const styles = {
//     section: {
//       padding: '6rem 0',
//       backgroundColor: '#f3f4f6',
//     },
//     container: {
//       width: '90%',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '0 1rem',
//     },
//     header: {
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-between',
//       alignItems: 'flex-end',
//       marginBottom: '3rem',
//     },
//     headerContent: {
//       maxWidth: '36rem',
//     },
//     label: {
//       color: '#16a34a',
//       fontWeight: 'bold',
//       textTransform: 'uppercase',
//       letterSpacing: '0.1em',
//       fontSize: '0.75rem',
//     },
//     title: {
//       fontFamily: 'serif',
//       fontWeight: 'bold',
//       fontSize: '2rem',
//       color: '#1e293b',
//       marginTop: '0.5rem',
//     },
//     galleryGrid: {
//       columnCount:
//         window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1,
//       columnGap: '1.5rem',
//     },
//     galleryItem: {
//       breakInside: 'avoid',
//       marginBottom: '1.5rem',
//       borderRadius: '1rem',
//       overflow: 'hidden',
//       cursor: 'zoom-in',
//       position: 'relative',
//       transition: 'transform 0.7s',
//     },
//     galleryImg: {
//       width: '100%',
//       height: 'auto',
//       display: 'block',
//       transition: 'transform 0.7s',
//     },
//     overlay: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(0,0,0,0.2)',
//       opacity: 0,
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       transition: 'opacity 0.3s',
//     },
//     overlayText: {
//       color: '#ffffff',
//       fontSize: '1.125rem',
//       fontFamily: 'serif',
//       fontStyle: 'italic',
//     },
//     video: {
//       width: '100%',
//       borderRadius: '1rem',
//     },
//   };

//   const [hoveredIndex, setHoveredIndex] = React.useState(null);

//   return (
//     <>
//       {/* ------------------------- IMAGE GALLERY ------------------------- */}
//       <section id={SectionId.GALLERY} style={styles.section}>
//         <div style={styles.container}>
//           <div style={styles.header}>
//             <div style={styles.headerContent}>
//               <span style={styles.label}>Visual Journey</span>
//               <h2 style={styles.title}>Captured Moments</h2>
//             </div>
//           </div>

//           <div style={styles.galleryGrid}>
//             {images.map((src, idx) => (
//               <div
//                 key={idx}
//                 style={{
//                   ...styles.galleryItem,
//                   transform:
//                     hoveredIndex === `img-${idx}` ? 'scale(1.05)' : 'scale(1)',
//                 }}
//                 onMouseEnter={() => setHoveredIndex(`img-${idx}`)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <img
//                   src={src}
//                   alt={`Gallery image ${idx + 1}`}
//                   style={styles.galleryImg}
//                 />
//                 <div
//                   style={{
//                     ...styles.overlay,
//                     opacity: hoveredIndex === `img-${idx}` ? 1 : 0,
//                   }}
//                 >
//                   <span style={styles.overlayText}>The Jungle Story By Headquarters</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ------------------------- VIDEO SECTION ------------------------- */}
//       <section style={{ ...styles.section, backgroundColor: '#ffffff' }}>
//         <div style={styles.container}>
//           <div style={styles.header}>
//             <div style={styles.headerContent}>
//               <span style={styles.label}>Experience</span>
//               <h2 style={styles.title}>Video Highlights</h2>
//             </div>
//           </div>

//           <div style={styles.galleryGrid}>
//             {videos.map((src, idx) => (
//               <div
//                 key={idx}
//                 style={{
//                   ...styles.galleryItem,
//                   transform:
//                     hoveredIndex === `vid-${idx}` ? 'scale(1.05)' : 'scale(1)',
//                 }}
//                 onMouseEnter={() => setHoveredIndex(`vid-${idx}`)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <video
//                   src={src}
//                   controls
//                   style={styles.video}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };




import React from 'react';
import { SectionId } from '../constants';

const images = [
  '/Images/imageEight.jpg',
  '/Images/imageFourteen.jpg',
  '/Images/imageFifteen.jpg',
  '/Images/imageSixteen.jpg',
  '/Images/imageSeventeen.jpg',
  '/Images/imageEighteen.jpg',
  '/Images/imageNineteen.jpg',
  '/Images/imageTwenty.jpg',
];

const videos = [
  '/Videos/TJS_VideoOne.mp4',
  '/Videos/TJS_VideoFour.mp4',
  '/Videos/TJS_VideoFive.mp4',
];

export const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const styles = {
    section: { padding: '6rem 0', backgroundColor: '#f3f4f6' },
    container: { width: '90%', maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' },
    header: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' },
    headerContent: { maxWidth: '36rem' },
    label: { color: '#16a34a', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' },
    title: { fontFamily: 'serif', fontWeight: 'bold', fontSize: '2rem', color: '#1e293b', marginTop: '0.5rem' },
    galleryGrid: { columnCount: window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1, columnGap: '1.5rem' },
    galleryItem: { breakInside: 'avoid', marginBottom: '1.5rem', borderRadius: '1rem', overflow: 'hidden', cursor: 'zoom-in', position: 'relative', transition: 'transform 0.7s' },
    galleryImg: { width: '100%', height: 'auto', display: 'block', transition: 'transform 0.7s' },
    overlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.2)', opacity: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.3s' },
    overlayText: { color: '#ffffff', fontSize: '1.125rem', fontFamily: 'serif', fontStyle: 'italic' },
    video: { width: '100%', borderRadius: '1rem' },
  };

  return (
    <>
      <section id={SectionId.GALLERY} style={styles.section}>
        <div style={styles.container}>
          <div style={styles.header}>
            <div style={styles.headerContent}>
              <span style={styles.label}>Visual Journey</span>
              <h2 style={styles.title}>Captured Moments</h2>
            </div>
          </div>
          <div style={styles.galleryGrid}>
            {images.map((src, idx) => (
              <div key={idx} style={{ ...styles.galleryItem, transform: hoveredIndex === `img-${idx}` ? 'scale(1.05)' : 'scale(1)' }}
                onMouseEnter={() => setHoveredIndex(`img-${idx}`)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <img src={src} alt={`Gallery ${idx}`} style={styles.galleryImg} />
                <div style={{ ...styles.overlay, opacity: hoveredIndex === `img-${idx}` ? 1 : 0 }}>
                  <span style={styles.overlayText}>The Jungle Story By Headquarters</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ ...styles.galleryGrid, marginTop: '3rem' }}>
            {videos.map((src, idx) => (
              <div key={idx} style={{ ...styles.galleryItem, transform: hoveredIndex === `vid-${idx}` ? 'scale(1.05)' : 'scale(1)' }}
                onMouseEnter={() => setHoveredIndex(`vid-${idx}`)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <video src={src} controls style={styles.video} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
