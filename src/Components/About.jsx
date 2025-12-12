

import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SectionId } from '../constants';
import AuthModal from './AuthModal';

const aboutImages = [
  '/Images/imageFourtyOne.jpg',
  '/Images/imageThirtyFour.jpg',
  '/Images/imageFour.jpg',
  '/Images/imageTwentyFour.jpg',
];

export const About = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  // auto‑slide carousel
  useEffect(() => {
    if (!aboutImages.length) return;
    const interval = setInterval(
      () => setActiveSlide((prev) => (prev + 1) % aboutImages.length),
      3500
    );
    return () => clearInterval(interval);
  }, []);

  const fadeSlideLeft = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : 'translateX(-60px)',
    transition: 'all 0.9s ease-out',
  };

  const fadeSlideRight = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : 'translateX(60px)',
    transition: 'all 0.9s ease-out',
  };

  const styles = {
    section: {
      position: 'relative',
      backgroundImage: `url('/Images/imageFourtyThree.jpg')`, // updated bg image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden',
      padding: '4rem 0',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255,255,255,0.85)', // translucent white overlay
      zIndex: 1,
    },
    container: {
      position: 'relative',
      zIndex: 2, // content above overlay
      width: '80%',
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      color: '#628141', // green text
    },
    tag: {
      display: 'inline-block',
      padding: '0.375rem 1.1rem',
      backgroundColor: '#628141',
      color: '#ffffff',
      borderRadius: '9999px',
      fontSize: '0.8rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      width: 'fit-content',
    },
    heading: {
      fontWeight: 'bold',
      fontSize: '2.5rem',
      lineHeight: '1.2',
      color: '#628141',
      textShadow: '3px 3px 0 #fbe3c3',
    },
    prose: {
      color: '#628141',
      fontSize: '1rem',
      lineHeight: '1.75rem',
    },
    contentRow: {
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'stretch',
      flexWrap: 'wrap',
    },
    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: '0 0 320px',
      maxWidth: '340px',
      gap: '0.75rem',
    },
    infoBox: {
      position: 'relative',
      padding: '12px 16px 16px',
      borderRadius: '1rem',
      border: '1px solid rgba(148,163,184,0.4)',
      backgroundColor: 'white',
      boxShadow: '0 18px 45px rgba(0,0,0,0.15)',
      overflow: 'hidden',
      color: '#628141',
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    secondaryHeading: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      color: '#628141',
      textTransform: 'uppercase',
    },
    carouselWrapper: {
      flex: '1 1 auto',
      minWidth: '0',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 18px 45px rgba(0,0,0,0.15)',
      backgroundColor: '#fefcfb',
      position: 'relative',
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      maxHeight: '320px',
      objectFit: 'cover',
      display: 'block',
    },
    dots: {
      position: 'absolute',
      bottom: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '6px',
    },
    dot: (active) => ({
      width: '8px',
      height: '8px',
      borderRadius: '9999px',
      backgroundColor: active ? '#628141' : 'rgba(255,255,255,0.7)',
      border: '1px solid rgba(0,0,0,0.1)',
      cursor: 'pointer',
    }),
  };

  return (
    <>
      <section id={SectionId.ABOUT} style={styles.section}>
        {/* Translucent white overlay */}
        <div style={styles.overlay} />

        <div style={styles.container}>
          <div ref={headingRef} style={fadeSlideLeft}>
            <span className="travel-heading" style={styles.tag}>
              Eco-Luxury Retreat
            </span>

            <h1 className="travel-heading" style={styles.heading}>
              Welcome to Jungle Story – A Hidden Gem in the Forests of Shimla
              <br />
              <span>NATURE-INSPIRED STAY &amp; ADVENTURE-FILLED EXPERIENCES</span>
            </h1>
          </div>

          <div ref={contentRef} style={fadeSlideRight}>
            <div style={styles.prose}>
              <p>
                Escape to <strong>Jungle Story</strong> — a tranquil retreat
                tucked amidst the lush forests of Shimla. Experience eco-friendly
                stays, cozy cabins, bonfire nights, and mountain adventures all in
                one destination.
              </p>
            </div>

            <div style={styles.contentRow}>
              {/* Left column */}
              <div style={styles.leftColumn}>
                <div style={styles.infoBox}>
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      opacity: 0.1,
                    }}
                  >
                    <Sparkles size={64} />
                  </div>

                  <h3 className="travel-heading" style={styles.secondaryHeading}>
                    <Sparkles size={16} /> Jungle Whisper
                  </h3>

                  <p style={{ fontStyle: 'italic', marginBottom: '0.75rem' }}>
                    "Where nature speaks in silence, and every sunrise feels like
                    a story."
                  </p>
                </div>

                <div style={styles.buttonsContainer}>
                  <button
                    style={{
                      padding: '0.7rem 1.9rem',
                      borderRadius: '9999px',
                      border: 'none',
                      cursor: 'pointer',
                      background: hoverPrimary
                        ? 'linear-gradient(135deg, #628130, #628130)'
                        : 'linear-gradient(135deg, #628141, #628141)',
                      color: 'white',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transform: hoverPrimary ? 'translateY(-1px)' : 'translateY(0)',
                      transition: 'all 0.25s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={() => setHoverPrimary(true)}
                    onMouseLeave={() => setHoverPrimary(false)}
                    onClick={() => setShowModal(true)}
                  >
                    Know More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              {/* Right: carousel */}
              <div style={styles.carouselWrapper}>
                <img
                  src={aboutImages[activeSlide]}
                  alt="Jungle Story scene"
                  style={styles.carouselImage}
                />
                <div style={styles.dots}>
                  {aboutImages.map((_, i) => (
                    <div
                      key={i}
                      style={styles.dot(i === activeSlide)}
                      onClick={() => setActiveSlide(i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};
