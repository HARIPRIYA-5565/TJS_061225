import React, { useEffect, useRef, useState, useCallback } from 'react';
import { SectionId } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

// Import all required images explicitly
import imageFourtyThree from '../assets/Images/imageFourtyThree.jpg';
import imageEighteen from '../assets/Images/imageEighteen.jpg';

export const Contact = () => {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 768 : false
  );

  // slide / fade in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // update isDesktop on resize
  useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return;
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // tilt on hover
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const max = 6;
    const rotateY = ((x - midX) / midX) * -max;
    const rotateX = ((y - midY) / midY) * max;
    setTilt({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const forestGreen = "#628141";

  const styles = {
    section: {
      padding: '5rem 0',
      position: 'relative',
      backgroundImage: `url(${imageFourtyThree})`, // Fixed background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(255,255,255,0.55)', // translucent layer
      backdropFilter: 'blur(4px)',
      zIndex: 1,
    },
    container: {
      width: '90%',
      maxWidth: '960px',
      margin: '0 auto',
      padding: '0 1rem',
      position: 'relative',
      zIndex: 5,
    },
    card: {
      background: 'linear-gradient(135deg, #E7F3E1, #C9DDBE)', // GREEN GRADIENT
      borderRadius: '1.75rem',
      padding: '2rem 2rem',
      boxShadow: '0 24px 60px rgba(15,23,42,0.16)',
      color: forestGreen,
      display: 'grid',
      gridTemplateColumns: isDesktop
        ? 'minmax(0, 1.6fr) minmax(0, 1fr)'
        : '1fr',
      gap: '1.75rem',
      alignItems: 'center',
      transform: visible
        ? `translateY(0) perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        : 'translateY(30px)',
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      willChange: 'transform, opacity',
    },
    imageWrapper: {
      display: isDesktop ? 'block' : 'none',
      borderRadius: '1.4rem',
      overflow: 'hidden',
      boxShadow: '0 18px 45px rgba(15,23,42,0.25)',
      backgroundColor: '#000',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    columnRight: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.9rem',
      justifyContent: 'center',
      maxWidth: isDesktop ? '480px' : '100%',
      color: forestGreen,
    },
    title: {
      fontSize: '1.6rem',
      fontWeight: 'bold',
      color: forestGreen,
      textShadow: '1px 1px 0 #ffffff',
      lineHeight: 1.2,
    },
    highlight: {
      display: 'inline-block',
      padding: '0.2rem 0.8rem',
      borderRadius: '9999px',
      backgroundColor: forestGreen,
      color: '#ffffff',
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      width: 'fit-content',
      marginBottom: '0.3rem',
    },
    paragraph: {
      color: forestGreen,
      fontWeight: 500,
      lineHeight: 1.5,
      margin: 0,
    },
    infoList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.8rem',
      marginTop: '0.4rem',
    },
    infoItem: {
      display: 'flex',
      gap: '0.6rem',
      alignItems: 'center',
      color: forestGreen,
    },
    infoHeading: {
      fontWeight: 700,
      margin: 0,
      color: forestGreen,
      fontSize: '0.95rem',
    },
    infoSub: {
      margin: 0,
      lineHeight: 1.35,
      fontSize: '0.9rem',
      color: forestGreen,
    },
  };

  return (
    <section id={SectionId.CONTACT} style={styles.section}>
      <div style={styles.overlay}></div>

      <div style={styles.container}>
        <div
          ref={cardRef}
          style={styles.card}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left: image */}
          <div style={styles.imageWrapper}>
            <img
              src={imageEighteen}
              alt="Pathway to The Jungle Story"
              style={styles.image}
            />
          </div>

          {/* Right: text */}
          <div style={styles.columnRight}>
            <span className="travel-heading" style={styles.highlight}>
              Plan Your Escape
            </span>

            <h2 className="travel-heading" style={styles.title}>
              Reach The Jungle Story
            </h2>

            <p style={styles.paragraph}>
              Share your travel dates, and the team will help arrange stays,
              transfers, and curated jungle experiences tailored to your pace.
            </p>

            <div style={styles.infoList}>
              <div style={styles.infoItem}>
                <Phone size={22} color={forestGreen} />
                <div>
                  <h3 style={styles.infoHeading}>Phone</h3>
                  <p style={styles.infoSub}>+91 9015483181</p>
                </div>
              </div>

              <div style={styles.infoItem}>
                <Mail size={22} color={forestGreen} />
                <div>
                  <h3 style={styles.infoHeading}>Email</h3>
                  <p style={styles.infoSub}>reservations@thejunglestory.com</p>
                </div>
              </div>

              <div style={styles.infoItem}>
                <MapPin size={22} color={forestGreen} />
                <div>
                  <h3 style={styles.infoHeading}>Address</h3>
                  <p style={styles.infoSub}>
                    Village Gawai, Patgehar Road
                    <br />
                    Shimla, Himachal Pradesh-171012
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
