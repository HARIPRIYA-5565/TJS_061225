import React, { useRef, useEffect, useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SectionId } from '../constants';

export const About = () => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.4 });
    if (headingRef.current) observer.observe(headingRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
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
    container: {
      width: '80%',
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '4rem 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      color: '#0f172a',
    },
    tag: {
      display: 'inline-block',
      padding: '0.375rem 1rem',
      backgroundColor: '#bbf7d0',
      color: '#14532d',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      width: 'fit-content',
    },
    heading: {
      fontFamily: 'serif',
      fontWeight: 'bold',
      fontSize: '2.5rem',
      lineHeight: '1.2',
      color: '#1e293b',
    },
    headingItalic: { color: '#16a34a', fontStyle: 'italic' },
    prose: { color: '#1e293b', fontSize: '1rem', lineHeight: '1.75rem' },
    infoBox: {
      position: 'relative',
      padding: '1.5rem',
      borderRadius: '1rem',
      border: '1px solid rgba(148,163,184,0.4)',
      backgroundColor: 'white',
      boxShadow: '0 18px 45px rgba(0,0,0,0.15)',
      overflow: 'hidden',
      marginTop: '1.5rem',
    },
    buttonsContainer: { display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' },
  };

  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [hoverSecondary, setHoverSecondary] = useState(false);

  return (
    <section id={SectionId.ABOUT} style={{ backgroundColor: '#f7f7f7' }}>
      <div style={styles.container}>

        <div ref={headingRef} style={fadeSlideLeft}>
          <span style={styles.tag}>Eco-Luxury Retreat</span>

          <h1 style={styles.heading}>
            <span style={styles.headingItalic}>Welcome to Jungle Story – A Hidden Gem in the Forests of Shimla</span>
            <br />
            NATURE-INSPIRED STAY & ADVENTURE-FILLED EXPERIENCES
          </h1>
        </div>

        <div ref={contentRef} style={fadeSlideRight}>
          <div style={styles.prose}>
            <p>
              Escape to <strong>Jungle Story</strong> — a tranquil retreat tucked amidst the lush forests of Shimla.
              Experience eco-friendly stays, cozy cabins, bonfire nights, and mountain adventures all in one destination.
            </p>
          </div>

          <div style={styles.infoBox}>
            <div style={{ position: 'absolute', top: 0, right: 0, opacity: 0.1 }}>
              <Sparkles size={64} />
            </div>

            <h3 style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
              <Sparkles size={16} /> Jungle Whisper
            </h3>

            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
              “Where nature speaks in silence, and every sunrise feels like a story.”
            </p>

            <div style={styles.buttonsContainer}>
              <button
                style={{
                  padding: '1rem 2rem',
                  backgroundColor: hoverPrimary ? '#16a34a' : '#14532d',
                  color: 'white',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: '0.3s',
                }}
                onMouseEnter={() => setHoverPrimary(true)}
                onMouseLeave={() => setHoverPrimary(false)}
              >
                Book Your Stay <ArrowRight size={18} style={{ marginLeft: 8 }} />
              </button>

              <button
                style={{
                  padding: '1rem 2rem',
                  border: `1px solid ${hoverSecondary ? '#14532d' : '#64748b'}`,
                  backgroundColor: hoverSecondary ? '#14532d' : 'transparent',
                  color: hoverSecondary ? 'white' : '#1e293b',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  transition: '0.3s',
                }}
                onMouseEnter={() => setHoverSecondary(true)}
                onMouseLeave={() => setHoverSecondary(false)}
              >
                Explore Rooms
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
