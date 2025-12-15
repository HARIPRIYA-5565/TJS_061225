import React, { useCallback, useEffect, useRef, useState } from 'react';
import { SectionId } from '../constants';
import { Star, Quote } from 'lucide-react';

// Import required background image explicitly
import imageFive from '../assets/Images/imageFive.jpg';

const testimonials = [
  {
    id: 1,
    name: 'M. Tarique',
    role: 'Local Guide',
    content:
      "Recently had a pleasure of staying at The Jungle Story by Headquarter. The location is breath taking, surrounded by lush greenery and the soothing sound of nature, a perfect escape from city life. It was comfortable with well maintained rooms with Free Wifi. Waking up to the sight of trees, river and birds was truly refreshing. Food served was delicious, offering a great variety of fresh and flavorful options that complemented serene setting. Overall, this Resort in the heart of the forest exceeded all my expectations, a prefect blend of tranquility, comfort, and excellent service. I would highly recommend it to all looking for a peaceful gateway surrounded by nature.",
    rating: 5,
  },
  {
    id: 2,
    name: 'Sehnaj Khan',
    role: 'Local Guide',
    content:
      'I had a wonderful experience at this place in the hills. The location is simply amazing — surrounded by breathtaking views and beautiful natural scenery. The atmosphere is peaceful and refreshing. The hotel service was excellent; the staff were warm, helpful, and made the stay truly comfortable. Highly recommended for anyone looking to relax and enjoy nature!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ankit Kumar',
    role: 'Local Guide Level 2',
    content:
      'Located in a subtropical high-altitude zone, the weather is refreshing all year round. Breezy summer days and snowy winters make it a perfect escape anytime you want to reset and rejuvenate',
    rating: 5,
  },
  {
    id: 4,
    name: 'Rohan MehtPushpendra Awasthi',
    role: 'Local Guide Level 2',
    content:
      'Royal experience during stay with neat and clean spacious rooms, staff behaviour  very supportive, warm welcome during check in. Recommended for family and friends..',
    rating: 5,
  },
];

export const Testimonials = () => {
  const styles = {
    section: {
      padding: '6rem 0',
      position: 'relative',
      margin: '1rem',
      backgroundImage: `url(${imageFive})`, // Fixed background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: '2rem',
      overflow: 'hidden',
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.55)', // more translucent
      backdropFilter: 'blur(8px)', // keeps the blur effect
      zIndex: 1,
    },
    container: {
      margin: '0 auto',
      position: 'relative',
      zIndex: 10,
      padding: '0 2rem',
    },
    header: { textAlign: 'center', marginBottom: '3rem' },
    title: {
      fontWeight: 'bold',
      fontSize: '2rem',
      color: '#628141',
      textShadow: '2px 2px 0 #add781ff ',
    },
    subtitle: { color: '#628141', fontWeight: 'bold' },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      willChange: 'transform',
      transition: 'transform 0.15s ease-out',
    },
    cardBase: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '1.25rem',
      border: '2px solid #628141',
      boxShadow: '0 18px 45px rgba(15,23,42,0.12)',
      cursor: 'default',
      transition:
        'transform 0.45s ease, box-shadow 0.45s ease, opacity 0.45s ease',
      transformStyle: 'preserve-3d',
      willChange: 'transform, opacity',
      opacity: 0,
      transform: 'translateY(40px)',
      color: '#628141',
    },
    cardBaseShadow: '0 18px 45px rgba(15,23,42,0.12)',
    cardHoverShadow: '0 28px 70px rgba(15,23,42,0.16)',
    quoteIcon: {
      width: '2.25rem',
      height: '2.25rem',
      color: '#628141',
      marginBottom: '1.25rem',
      opacity: 0.7,
    },
    stars: { display: 'flex', gap: '0.25rem', marginBottom: '1rem' },
    starIcon: { width: '1rem', height: '1rem', color: '#facc15', fill: '#facc15' },
    content: {
      fontSize: '1.05rem',
      fontStyle: 'italic',
      marginBottom: '1.25rem',
      lineHeight: 1.6,
      color: '#628141',
    },
    footer: {},
    name: { fontWeight: 'bold', color: '#628141' },
    role: { fontSize: '0.875rem', color: '#628141' },
  };

  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const [visibleMap, setVisibleMap] = useState({});
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Scroll-based parallax
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight || 0;
      const total = rect.height + windowH;
      if (total <= 0) return;

      const progress = 1 - (rect.top + rect.height) / total;
      const clamped = Math.min(1, Math.max(0, progress));
      const maxOffset = 60;
      const offset = (clamped - 0.5) * 2 * maxOffset;
      setParallaxOffset(offset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Reveal-on-scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const indexAttr = entry.target.getAttribute('data-index');
          if (indexAttr === null) return;
          if (entry.isIntersecting) {
            const index = Number(indexAttr);
            setVisibleMap((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.35 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 3D tilt hover
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateMax = 8;
    const rotateY = ((x - midX) / midX) * rotateMax * -1;
    const rotateX = ((y - midY) / midY) * rotateMax;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    card.style.boxShadow = styles.cardHoverShadow;
  }, [styles.cardHoverShadow]);

  const handleMouseLeave = useCallback((e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
    card.style.boxShadow = styles.cardBaseShadow;
  }, [styles.cardBaseShadow]);

  return (
    <section
      id={SectionId.TESTIMONIALS}
      style={styles.section}
      ref={sectionRef}
    >
      {/* White translucent overlay with blur */}
      <div style={styles.overlay} />

      <div style={styles.container}>
        <div style={styles.header}>
          <h2 className="travel-heading" style={styles.title}>
            Stories from the Wild
          </h2>
          <p style={styles.subtitle} className='travel-heading'>What our guests say about their stay.</p>
        </div>

        <div
          style={{
            ...styles.grid,
            transform: `translateY(${parallaxOffset}px)`,
          }}
        >
          {testimonials.map((t, index) => {
            const isVisible = visibleMap[index];

            return (
              <div
                key={t.id}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                style={{
                  ...styles.cardBase,
                  opacity: isVisible ? 1 : styles.cardBase.opacity,
                  transform: isVisible ? 'translateY(0)' : styles.cardBase.transform,
                  boxShadow: styles.cardBaseShadow,
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <Quote style={styles.quoteIcon} />
                <div style={styles.stars}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} style={styles.starIcon} />
                  ))}
                </div>
                <p style={styles.content}>"{t.content}"</p>
                <div style={styles.footer}>
                  <h4 style={styles.name}>{t.name}</h4>
                  <span style={styles.role}>{t.role}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
