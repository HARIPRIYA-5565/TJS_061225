import React, { useEffect, useRef, useState } from 'react';
import { SectionId } from '../constants';

const events = [
  {
    id: 1,
    title: "DJ Night",
    description: "An enchanting evening with live music surrounded by the lush forests.",
    image: "/Images/event_DjNight.jpg",
  },
];

export const Events = () => {
  const [visible, setVisible] = useState({});
  const containerRefs = useRef([]);

  useEffect(() => {
    containerRefs.current = containerRefs.current.slice(0, events.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(prev => ({ ...prev, [entry.target.dataset.id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    containerRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const styles = {
    section: {
      padding: '4rem 0',                  // reduced space
      backgroundColor: '#f7f7f7',
    },
    container: {
      width: '90%',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: { textAlign: 'center', marginBottom: '2.5rem' },
    title: { fontFamily: 'serif', fontWeight: 'bold', fontSize: '2rem', color: '#14532d', marginBottom: '0.5rem' },
    subtitle: { fontSize: '1.05rem', color: '#52525b' },

    card: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      backgroundColor: 'white',
      borderRadius: '1rem',
      overflow: 'hidden',
      border: '1px solid #e5e7eb',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      cursor: 'pointer',
      transition: 'all 0.55s ease',
      minHeight: '320px',
      marginBottom: '2rem',            // reduced space under card
    },

    content: {
      flex: 1,
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    eventTitle: {
      fontFamily: 'serif',
      fontWeight: 'bold',
      fontSize: '1.6rem',
      color: '#1e293b',
      marginBottom: '0.75rem',
    },
    description: {
      color: '#52525b',
      fontSize: '1rem',
      lineHeight: 1.6,
    },

    imageWrapper: {
      flex: '1',
      overflow: 'hidden',
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.45s ease',
    },
  };

  // Animation trigger
  const fadeSlideScale = (isVisible) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? 'translateY(0) scale(1)'
      : 'translateY(45px) scale(0.96)',
  });

  return (
    <section id={SectionId.EVENTS} style={styles.section}>
      <div style={styles.container}>

        <div style={styles.header}>
          <h2 style={styles.title}>Upcoming & Ongoing Events</h2>
          <p style={styles.subtitle}>
            Join our curated experiences designed to connect you with nature, culture, and adventure.
          </p>
        </div>

        {events.map((event, idx) => (
          <article
            key={event.id}
            data-id={event.id}
            ref={(el) => (containerRefs.current[idx] = el)}
            style={{ ...styles.card, ...fadeSlideScale(visible[event.id]) }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 18px 45px rgba(0,0,0,0.12)';
              e.currentTarget.lastChild.firstChild.style.transform = 'scale(1.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
              e.currentTarget.lastChild.firstChild.style.transform = 'scale(1)';
            }}
          >
            {/* LEFT TEXT */}
            <div style={styles.content}>
              <h3 style={styles.eventTitle}>{event.title}</h3>
              <p style={styles.description}>{event.description}</p>
            </div>

            {/* RIGHT IMAGE */}
            <div style={styles.imageWrapper}>
              <img src={event.image} alt={event.title} style={styles.image} />
            </div>
          </article>
        ))}

      </div>
    </section>
  );
};
