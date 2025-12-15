import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SectionId } from '../constants';
import AuthModal from './AuthModal';

// Import all about images explicitly
import imageFourtyOne from '../assets/Images/imageFourtyOne.jpg';
import imageThirtyFour from '../assets/Images/imageThirtyFour.jpg';
import imageFour from '../assets/Images/imageFour.jpg';
import imageTwentyFour from '../assets/Images/imageTwentyFour.jpg';
import imageFourtyThree from '../assets/Images/imageFourtyThree.jpg';

const aboutImages = [imageFourtyOne, imageThirtyFour, imageFour, imageTwentyFour];

export const About = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // logo green
  const green = "#2e3a21";
  const greenHover = "#242b19";

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

  // auto-slide carousel
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
      backgroundImage: `url(${imageFourtyThree})`,
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
      backgroundColor: active ? green : 'rgba(255,255,255,0.7)',
      border: '1px solid rgba(0,0,0,0.1)',
      cursor: 'pointer',
    }),
  };

  return (
    <>
      <style>{`
        @keyframes jungleWhisperVertical {
          0%   { transform: translateY(0%); }
          100% { transform: translateY(-50%); } /* one full copy height */
        }
      `}</style>

      <section id={SectionId.ABOUT} style={styles.section}>
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
            <div style={styles.prose} className='travel-heading'>
               <p>
    This unique property offers a perfect blend of modern comfort and natural serenity — an ideal destination for a weekend retreat or a long term stay. The valley extends from Dhalli, Kufri, and Mundaghat to Chan, encompassing a diverse ecosystem.
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
                    <Sparkles size={35} />
                  </div>

                  <h3 className="travel-heading" style={styles.secondaryHeading}>
                    <Sparkles size={16} /> Jungle Whisper
                  </h3>

                  {/* Vertical moving text – duplicated for seamless loop */}
                  <div
                    style={{
                      position: 'relative',
                      height: '9rem', // visible window
                      overflow: 'hidden',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <div
                      className='travel-heading'
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
                      {/* COPY 1 */}
                      <span>Live Inside Asia&apos;s Densest Forest</span>
                      <span>· Situated just 11 km from Shimla, Himachal Pradesh</span>
                      <span>· Adjacent to Asia&apos;s densest forest, the Shimla Forest Sanctuary</span>
                      <span>· Easily accessible from Shimla (approx. 16 km) Mall Road</span>
                      <span>· Secondary access from Chail via Mundaghat Patgehar</span>

                      <span>· The Jungle Story – By Headquarter, nestled in the pristine Shimla Forest Sanctuary</span>
                      <span>· Spreads over 75 bighas, surrounded by thousands of bighas of lush green cedar forest</span>
                      <span>· Offers scope for eco‑farming, camping, health &amp; wellness retreats and adventure tourism</span>

                      <span>About This Property</span>
                      <span>· Set in Shimla, about 15 km from Mall Road, on the southern hill range of Kufri</span>
                      <span>· Offers access to the valley and the densest conical forest in Asia</span>
                      <span>· Blends modern comfort with natural serenity for weekend retreats or long stays</span>
                      <span>· Valley extends from Dhalli, Kufri and Mundaghat to Chan with diverse ecosystems</span>
                      <span>· Includes reserve forest, wildlife sanctuary and Shimla Water Supply Catchment Forest</span>
                      <span>· Sub‑tropical climate with heavy winter snowfall supporting unique high‑altitude flora and fauna</span>

                      <span>Why choose The Jungle Story</span>
                      <span>A GATEWAY TO TRANQUILITY</span>
                      <span>· Serene atmosphere away from city bustle, with forest‑clad mountain views</span>

                      <span>NATURE&apos;S PARADISE</span>
                      <span>· Spectacular mountain backdrops, lush cedar forests and gushing streams</span>
                      <span>· Surging waterfalls and vibrant sunsets</span>

                      <span>UNIQUE AROMATIC ATMOSPHERE</span>
                      <span>· Air perfumed with Himalayan plants, jungle flowers and fresh forest greenery</span>

                      <span>BIODIVERSITY HAVEN</span>
                      <span>· Home to a diverse array of plants and animals – ideal for nature and wildlife lovers</span>

                      {/* COPY 2 (duplicate for seamless infinite loop) */}
                      <span>Live Inside Asia&apos;s Densest Forest</span>
                      <span>· Situated just 11 km from Shimla, Himachal Pradesh</span>
                      <span>· Adjacent to Asia&apos;s densest forest, the Shimla Forest Sanctuary</span>
                      <span>· Easily accessible from Shimla (approx. 16 km) Mall Road</span>
                      <span>· Secondary access from Chail via Mundaghat Patgehar</span>

                      <span>· The Jungle Story – By Headquarter, nestled in the pristine Shimla Forest Sanctuary</span>
                      <span>· Spreads over 75 bighas, surrounded by thousands of bighas of lush green cedar forest</span>
                      <span>· Offers scope for eco‑farming, camping, health &amp; wellness retreats and adventure tourism</span>

                      <span>About This Property</span>
                      <span>· Set in Shimla, about 15 km from Mall Road, on the southern hill range of Kufri</span>
                      <span>· Offers access to the valley and the densest conical forest in Asia</span>
                      <span>· Blends modern comfort with natural serenity for weekend retreats or long stays</span>
                      <span>· Valley extends from Dhalli, Kufri and Mundaghat to Chan with diverse ecosystems</span>
                      <span>· Includes reserve forest, wildlife sanctuary and Shimla Water Supply Catchment Forest</span>
                      <span>· Sub‑tropical climate with heavy winter snowfall supporting unique high‑altitude flora and fauna</span>

                      <span>Why choose The Jungle Story</span>
                      <span>A GATEWAY TO TRANQUILITY</span>
                      <span>· Serene atmosphere away from city bustle, with forest‑clad mountain views</span>

                      <span>NATURE&apos;S PARADISE</span>
                      <span>· Spectacular mountain backdrops, lush cedar forests and gushing streams</span>
                      <span>· Surging waterfalls and vibrant sunsets</span>

                      <span>UNIQUE AROMATIC ATMOSPHERE</span>
                      <span>· Air perfumed with Himalayan plants, jungle flowers and fresh forest greenery</span>

                      <span>BIODIVERSITY HAVEN</span>
                      <span>· Home to a diverse array of plants and animals – ideal for nature and wildlife lovers</span>
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

              {/* Right: carousel */}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default About;
