import React, { useState } from 'react';
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  const [hoveredButton, setHoveredButton] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const styles = {
    footer: {
      backgroundColor: '#1f2937', // earth-900
      color: '#d1d5db', // stone-400
      padding: '4rem 0',
      fontSize: '0.875rem',
    },
    container: {
      width: '90%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '3rem',
      marginBottom: '3rem',
    },
    gridMd: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    sectionTitle: {
      color: '#ffffff',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
    },
    socialIcons: {
      display: 'flex',
      gap: '1rem',
    },
    socialIcon: (hovered) => ({
      cursor: 'pointer',
      transition: 'color 0.3s',
      color: hovered ? '#4ade80' : '#d1d5db', // jungle-400 hover
    }),
    input: {
      backgroundColor: '#374151', // stone-800
      border: '1px solid #374151',
      borderRadius: '0.5rem',
      padding: '0.5rem 1rem',
      color: 'white',
      outline: 'none',
      width: '100%',
      transition: 'border-color 0.3s',
    },
    inputFocus: {
      borderColor: '#16a34a', // jungle-500
    },
    button: (hovered) => ({
      backgroundColor: hovered ? '#15803d' : '#166534', // jungle-700 / jungle-600
      color: 'white',
      fontWeight: '600',
      padding: '0.5rem 0',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s',
    }),
    bottomText: {
      borderTop: '1px solid #374151',
      paddingTop: '2rem',
      textAlign: 'center',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: 'white',
      fontSize: '1.25rem',
      fontFamily: 'serif',
      fontWeight: 'bold',
    },
    paragraph: {
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
    },
    link: (hovered) => ({
      cursor: 'pointer',
      transition: 'color 0.3s',
      color: hovered ? '#4ade80' : '#d1d5db',
      textDecoration: 'none',
    }),
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div
          style={{
            ...styles.grid,
            ...(window.innerWidth >= 768 ? styles.gridMd : {}),
          }}
        >
          {/* Logo & Description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={styles.logo}>
              <Leaf size={24} color="#22c55e" />
              <span>The Jungle Story</span>
            </div>
            <p style={styles.paragraph}>
              An immersive eco-luxury sanctuary nestled deep in the heart of the rainforest. Reconnect with nature in its purest form.
            </p>
            <div style={styles.socialIcons}>
              <Instagram
                size={20}
                style={styles.socialIcon(hoveredLink === 'instagram')}
                onMouseEnter={() => setHoveredLink('instagram')}
                onMouseLeave={() => setHoveredLink(null)}
              />
              <Facebook
                size={20}
                style={styles.socialIcon(hoveredLink === 'facebook')}
                onMouseEnter={() => setHoveredLink('facebook')}
                onMouseLeave={() => setHoveredLink(null)}
              />
              <Twitter
                size={20}
                style={styles.socialIcon(hoveredLink === 'twitter')}
                onMouseEnter={() => setHoveredLink('twitter')}
                onMouseLeave={() => setHoveredLink(null)}
              />
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 style={styles.sectionTitle}>Explore</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Our Story', 'Villas & Suites', 'Dining', 'Experiences', 'Wellness'].map((text, i) => (
                <li key={i}>
                  <a
                    href="#"
                    style={styles.link(hoveredLink === i)}
                    onMouseEnter={() => setHoveredLink(i)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 style={styles.sectionTitle}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Privacy Policy', 'Terms of Service', 'Cancellation Policy', 'Sustainability'].map((text, i) => (
                <li key={i}>
                  <a
                    href="#"
                    style={styles.link(hoveredLink === i + 10)}
                    onMouseEnter={() => setHoveredLink(i + 10)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={styles.sectionTitle}>Newsletter</h4>
            <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
              Subscribe to receive exclusive offers and jungle tales.
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                style={styles.input}
                onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
                onBlur={(e) => (e.target.style.borderColor = '#374151')}
              />
              <button
                style={styles.button(hoveredButton)}
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div style={styles.bottomText}>
          <p>&copy; {new Date().getFullYear()} The Jungle Story. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
