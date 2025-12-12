
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
  '/Images/imageTwentyOne.jpg',
  '/Images/imageTwentyTwo.jpg',
  '/Images/imageTwentyThree.jpg',
  '/Images/imageTwentyFive.jpg',
  '/Images/imageTwentySix.jpg',
  '/Images/imageTwentySeven.jpg',
  '/Images/imageTwentyEight.jpg',
  '/Images/imageThirty.jpg',
  '/Images/imageThirtyOne.jpg',
  '/Images/imageThirtyTwo.jpg',
  '/Images/imageThirtyThree.jpg',
  '/Images/imageThirtyFour.jpg',
  '/Images/imageThirtyFive.jpg',
  '/Images/imageThirtySix.jpg',
  '/Images/imageThirtySeven.jpg',
  '/Images/imageFourty.jpg',
  '/Images/imageFourtyOne.jpg',
  '/Images/imageFourtyTwo.jpg',
  '/Images/imageFourtyThree.jpg',
  '/Images/imageFourtyFour.jpg',
  '/Images/imageFourtyFive.jpg',
];

const videos = [
  '/Videos/TJS_VideoOne.mp4',
  '/Videos/TJS_VideoFour.mp4',
  '/Videos/TJS_VideoFive.mp4',
];

export const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const isLg = typeof window !== 'undefined' && window.innerWidth >= 1024;
  const isMd = typeof window !== 'undefined' && window.innerWidth >= 768;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  const styles = {
    section: {
      padding: '5rem 0',
      background:
        'radial-gradient(circle at top left, #FBE3C3 0, #f3f4f6 40%, #f3f4f6 100%)',
    },
    container: {
      width: '90%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '2.5rem',
    },
    headerContent: { maxWidth: '36rem' },
    label: {
      color: '#628141',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
      letterSpacing: '0.18em',
      padding: '0.22rem 0.9rem',
      borderRadius: '9999px',
      backgroundColor: '#FDF2F4',
      display: 'inline-block',
      marginTop:'50px'
    },
    title: {
      fontWeight: 'bold',
      fontSize: '2.1rem',
      color: '#628141',
      marginTop: '0.7rem',
      textShadow: '2px 2px 0 #fbe3c3',
    },
    subText: {
      marginTop: '0.4rem',
      color: '#4b5563',
      fontSize: '0.95rem',
      fontWeight:'600',
    },
    galleryGrid: {
      columnCount: isLg ? 3 : isMd ? 2 : 1,
      columnGap: '1.5rem',
    },
    galleryItem: {
      breakInside: 'avoid',
      marginBottom: '1.5rem',
      borderRadius: '1.1rem',
      overflow: 'hidden',
      cursor: 'zoom-in',
      position: 'relative',
      transition: 'transform 0.5s ease, box-shadow 0.5s ease',
      boxShadow: '0 10px 25px rgba(15,23,42,0.18)',
      backgroundColor: '#0f172a',
    },
    galleryImg: {
      width: '100%',
      height: isMobile ? '260px' : 'auto',
      objectFit: isMobile ? 'cover' : 'contain',
      display: 'block',
      transition: 'transform 0.6s ease',
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      background:
        'linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.15), transparent)',
      opacity: 0,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      padding: '1rem 1.1rem',
      transition: 'opacity 0.3s ease',
    },
    overlayText: {
      color: '#ffffff',
      fontSize: '1rem',
      fontFamily: 'serif',
      fontStyle: 'italic',
    },
    video: {
      width: '100%',
      borderRadius: '1.1rem',
      display: 'block',
      height: isMobile ? '260px' : 'auto',
      objectFit: isMobile ? 'cover' : 'contain',
    },
  };

  return (
    <section id={SectionId.GALLERY} style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.headerContent}>
            <span className="travel-heading" style={styles.label}>
              Visual Journey
            </span>
            <h2 className="travel-heading" style={styles.title}>
              Captured Moments in the Wild
            </h2>
            <p style={styles.subText}>
              A glimpse of cabins, bonfire nights, forest trails, and starlit
              skies that shape every stay at The Jungle Story.
            </p>
          </div>
        </div>

        {/* Images masonry */}
        <div style={styles.galleryGrid}>
          {images.map((src, idx) => {
            const isHover = hoveredIndex === `img-${idx}`;
            return (
              <div
                key={idx}
                style={{
                  ...styles.galleryItem,
                  transform: isHover ? 'translateY(-6px) scale(1.02)' : 'scale(1)',
                  boxShadow: isHover
                    ? '0 18px 40px rgba(15,23,42,0.32)'
                    : styles.galleryItem.boxShadow,
                }}
                onMouseEnter={() => setHoveredIndex(`img-${idx}`)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={src} alt={`Gallery ${idx}`} style={styles.galleryImg} />
                <div
                  style={{
                    ...styles.overlay,
                    opacity: isHover ? 1 : 0,
                  }}
                >
                  <span style={styles.overlayText}>
                    The Jungle Story · Shimla
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Videos row */}
        <div style={{ ...styles.galleryGrid, marginTop: '3rem' }}>
          {videos.map((src, idx) => {
            const isHover = hoveredIndex === `vid-${idx}`;
            return (
              <div
                key={idx}
                style={{
                  ...styles.galleryItem,
                  transform: isHover ? 'translateY(-6px) scale(1.02)' : 'scale(1)',
                  boxShadow: isHover
                    ? '0 18px 40px rgba(15,23,42,0.32)'
                    : styles.galleryItem.boxShadow,
                }}
                onMouseEnter={() => setHoveredIndex(`vid-${idx}`)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <video src={src} controls style={styles.video} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
