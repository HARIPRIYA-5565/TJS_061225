import React from 'react';
import { SectionId } from '../constants';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Travel Blogger",
    content: "I've stayed in resorts all over the world, but The Jungle Story has a soul. The morning mist over the river is a memory I will cherish forever.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Architect",
    content: "The way the structures weave into the trees without disturbing them is a masterclass in sustainable design. Absolutely breathtaking.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena & David",
    role: "Honeymooners",
    content: "The perfect escape. Quiet, luxurious, and the staff made us feel like royalty. The private dinner by the waterfall was magical.",
    rating: 5
  }
];

export const Testimonials = () => {
  const styles = {
    section: {
      padding: '6rem 0',
      backgroundColor: '#14532d',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundPattern: {
      position: 'absolute',
      inset: 0,
      opacity: 0.1,
      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
      backgroundSize: '40px 40px'
    },
    container: {
      width: '90%',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10
    },
    header: { textAlign: 'center', marginBottom: '4rem' },
    title: { fontFamily: 'serif', fontWeight: 'bold', fontSize: '2rem', marginBottom: '1rem' },
    subtitle: { color: '#a7f3d0' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' },
    card: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(6px)',
      padding: '2rem',
      borderRadius: '1rem',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'background-color 0.3s',
      cursor: 'default'
    },
    cardHover: { backgroundColor: 'rgba(255,255,255,0.15)' },
    quoteIcon: { width: '2.5rem', height: '2.5rem', color: '#6ee7b7', marginBottom: '1.5rem', opacity: 0.5 },
    stars: { display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' },
    starIcon: { width: '1rem', height: '1rem', color: '#facc15', fill: '#facc15' },
    content: { fontSize: '1.125rem', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: 1.6, color: '#d1fae5' },
    footer: { },
    name: { fontWeight: 'bold', color: 'white' },
    role: { fontSize: '0.875rem', color: '#a7f3d0' }
  };

  return (
    <section id={SectionId.TESTIMONIALS} style={styles.section}>
      <div style={styles.backgroundPattern}></div>

      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Stories from the Wild</h2>
          <p style={styles.subtitle}>What our guests say about their stay.</p>
        </div>

        <div style={styles.grid}>
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              style={styles.card} 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
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
          ))}
        </div>
      </div>
    </section>
  );
};
