import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SectionId } from '../constants';
import AuthModal from './AuthModal';
import { PhoneIcon, ChatBubbleLeftRightIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

import imageFourtyOne from '../assets/Images/imageFourtyOne.jpg';
import imageThirtyFour from '../assets/Images/imageThirtyFour.jpg';
import imageFour from '../assets/Images/imageFour.jpg';
import imageTwentyFour from '../assets/Images/imageTwentyFour.jpg';
import imageFourtyThree from '../assets/Images/imageFourtyThree.jpg';
import headerBg from '../assets/Images/header_bg_green.jpeg';

const aboutImages = [imageFourtyOne, imageThirtyFour, imageFour, imageTwentyFour];

export const About = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  const green = '#2e3a21';
  const greenHover = '#242b19';

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/919015483181?text=Hi,%20I%20am%20interested%20in%20the%20Shimla%20New%20Year%202026',
      '_blank',
      'noopener,noreferrer'
    );
  };

  const isMobile = windowWidth < 768;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!aboutImages.length) return;
    const interval = setInterval(
      () => setActiveSlide(prev => (prev + 1) % aboutImages.length),
      3500
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    outerWrapper: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      padding: '4rem 0',
      backgroundImage: `url(${headerBg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: '#fdfbf7',
    },
    sideBarsWrapper: {
      position: 'fixed',
      top: '40%',
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.25rem',
      zIndex: 40,
    },
    sideBar: bg => ({
      writingMode: 'vertical-rl',
      textOrientation: 'mixed',
      padding: '0.75rem 0.45rem',
      backgroundColor: bg,
      color: '#ffffff',
      fontSize: '0.78rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      cursor: 'pointer',
      borderRadius: '4px 0 0 4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    section: {
      position: 'relative',
      backgroundImage: `url(${imageFourtyThree})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      overflow: 'hidden',
      padding: '3.5rem 0',
      flex: '0 1 1200px',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255,255,255,0.85)',
      zIndex: 1,
    },
    container: {
      position: 'relative',
      zIndex: 2,
      width: '80%',
      maxWidth: '1100px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      color: green,
    },
    tag: {
      display: 'inline-block',
      padding: '0.375rem 1.1rem',
      backgroundColor: green,
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
      color: green,
      textShadow: '3px 3px 0 #fbe3c3',
    },
    prose: {
      color: green,
      fontSize: '1rem',
      lineHeight: '1.75rem',
      marginBottom: '1rem',
    },
    contentRow: {
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'stretch',
      flexWrap: 'nowrap',
    },
    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: '0 0 340px',
      maxWidth: '340px',
      gap: '0.75rem',
    },
    infoBox: {
      position: 'relative',
      padding: '12px 16px 16px',
      borderRadius: '1rem',
      border: '1px solid rgba(148,163,184,0.4)',
      backgroundColor: 'white',
      // green glow
      boxShadow:
        '0 10px 30px rgba(0,0,0,0.12), 0 0 18px rgba(98,129,65,0.45)',
      overflow: 'hidden',
      color: green,
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    secondaryHeading: {
      fontWeight: 'bold',
      fontSize: '20px',
      color: green,
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      marginBottom: '0.6rem',
    },
    carouselWrapper: {
      flex: '1 1 0',
      minWidth: '0',
      borderRadius: '1rem',
      overflow: 'hidden',
      // green glow
      boxShadow:
        '0 10px 30px rgba(0,0,0,0.12), 0 0 22px rgba(98,129,65,0.5)',
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
    dot: active => ({
      width: '8px',
      height: '8px',
      borderRadius: '9999px',
      backgroundColor: active ? green : 'rgba(255,255,255,0.7)',
      border: '1px solid rgba(0,0,0,0.1)',
      cursor: 'pointer',
    }),
    cardBody: {
      padding: '1.3rem 1.8rem 1.1rem',
      color: '#234746',
      fontSize: '0.95rem',
      lineHeight: 1.6,
      backgroundColor: '#ffffff',
    },
    highlight: {
      fontWeight: 500,
      marginTop: '0.5rem',
    },
    contactRow: {
      marginTop: '1rem',
      display: 'flex',
      justifyContent: 'strat',
      gap: '2.2rem',
      fontSize: '0.8rem',
      color: '#555555',
      flexWrap: 'wrap',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'start',
      gap: '0.5rem',
      paddingBottom: '6px ',
    },
    contactLabel: {
      display: 'block',
      fontSize: '0.78rem',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
    },
    contactNumber: {
      fontWeight: 600,
      color: '#234746',
    },
  };

  return (
    <>
      <style>{`
        @keyframes jungleWhisperVertical {
          0%   { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
      `}</style>

      <div style={styles.outerWrapper}>
        <section id={SectionId.ABOUT} style={styles.section}>
          <div style={styles.overlay} />

          <div style={styles.container}>
            <div ref={headingRef} style={fadeSlideLeft}>
              <span className="travel-heading" style={styles.tag}>
                Eco-Luxury Retreat
              </span>

              <h1 className="travel-heading" style={styles.heading}>
                The Jungle Story – Forest Retreat In Shimla
              </h1>
            </div>

            <div ref={contentRef} style={fadeSlideRight}>
              <div style={styles.prose} className="travel-heading">
                <p>
                  This unique property offers a perfect blend of modern comfort and natural serenity,
                  making it an ideal destination for a weekend retreat or a long‑term stay. The valley
                  extends from Dhalli, Kufri and Mundaghat to Chan, encompassing a rich and diverse
                  forest ecosystem.
                </p>
              </div>

              <div style={styles.contentRow}>
                {/* Left: Jungle Whisper card */}
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
                      <Sparkles size={35} />
                    </div>

                    <h3 className="travel-heading" style={styles.secondaryHeading}>
                      <Sparkles size={16} /> Jungle Whisper
                    </h3>

                    <div
                      style={{
                        position: 'relative',
                        height: isMobile ? '11rem' : '18rem',
                        overflow: 'hidden',
                        marginBottom: '0.75rem',
                      }}
                    >
                      <div
                        className="travel-heading"
                        style={{
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          top: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.25rem',
                          animation: 'jungleWhisperVertical 70s linear infinite',
                          fontSize: '0.8rem',
                          lineHeight: 1.45,
                          fontWeight: 500,
                          color: green,
                        }}
                      >
                        <span>Live inside Asia&apos;s densest forest.</span>
                        <span>Just 11 km from Shimla, Himachal Pradesh.</span>
                        <span>Adjacent to the Shimla Forest Sanctuary.</span>
                        <span>Perfect for eco‑stays, wellness retreats and adventure.</span>
                        <span>Spread over lush cedar hills and deep valleys.</span>
                        <span>Panoramic views, bonfire nights and jungle trails.</span>

                        <span>Live inside Asia&apos;s densest forest.</span>
                        <span>Just 11 km from Shimla, Himachal Pradesh.</span>
                        <span>Adjacent to the Shimla Forest Sanctuary.</span>
                        <span>Perfect for eco‑stays, wellness retreats and adventure.</span>
                        <span>Spread over lush cedar hills and deep valleys.</span>
                        <span>Panoramic views, bonfire nights and jungle trails.</span>
                      </div>
                    </div>
                  </div>

                  <div style={styles.buttonsContainer}>
                    <button
                      className="travel-heading"
                      style={{
                        padding: '0.7rem 1.9rem',
                        borderRadius: '9999px',
                        border: 'none',
                        cursor: 'pointer',
                        background: hoverPrimary
                          ? `linear-gradient(135deg, ${greenHover}, ${greenHover})`
                          : `linear-gradient(135deg, ${green}, ${green})`,
                        color: 'white',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transform: hoverPrimary ? 'translateY(-1px)' : 'translateY(0)',
                        transition: 'all 0.25s ease',
                        whiteSpace: 'nowrap',
                        boxShadow: hoverPrimary
                          ? '0 10px 26px rgba(46,58,33,0.5)'
                          : '0 6px 18px rgba(46,58,33,0.35)',
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

                {/* Right: carousel card */}
                <div style={styles.carouselWrapper}>
                  <img
                    src={aboutImages[activeSlide]}
                    alt={`Jungle Story scene ${activeSlide + 1}`}
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

                  <div style={styles.cardBody} className="travel-heading">
                    <p>
                      It&apos;s not just a stay — it&apos;s a true nature experience where peace,
                      forests and mountain views come together.
                    </p>
                    <p style={styles.highlight}>
                     Book your forest retreat at The Jungle Story &amp; experience eco‑luxury!
                    </p>

                    <div style={styles.contactRow}>
                      {/* Phone */}
                      <div style={styles.contactItem}>
                        <PhoneIcon
                          style={{
                            width: 20,
                            height: 20,
                            color: green,
                          }}
                        />
                        <div>
                          <span style={styles.contactLabel}>Reservation</span>
                          <span style={styles.contactNumber}>+91‑9218315636</span>
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <div
                        style={{ ...styles.contactItem, cursor: 'pointer' }}
                        onClick={openWhatsApp}
                      >
                        <ChatBubbleLeftRightIcon
                          style={{
                            width: 20,
                            height: 20,
                            color: '#628141',
                          }}
                        />
                        <div>
                          <span style={styles.contactLabel}>Whatsapp</span>
                          <span style={styles.contactNumber}>+91‑9015483181</span>
                        </div>
                      </div>

                      {/* Email */}
                      <div style={styles.contactItem}>
                        <EnvelopeIcon
                          style={{
                            width: 20,
                            height: 20,
                            color: '#628141',
                          }}
                        />
                        <div>
                          <span style={styles.contactLabel}>Email</span>
                          <span style={styles.contactNumber}>
                            reservations@thejunglestory.com
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <AuthModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default About;
