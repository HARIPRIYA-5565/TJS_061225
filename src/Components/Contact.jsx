import React from 'react';
import { SectionId } from '../constants';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

export const Contact = () => {
  const styles = {
    section: {
      padding: '6rem 0',
      backgroundColor: '#ffffff',
    },
    container: {
      width: '90%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    flex: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
    },
    flexLg: {
      flexDirection: 'row',
    },
    leftPanel: {
      backgroundColor: '#064e3b', // jungle-900
      color: 'white',
      padding: '3rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
    },
    leftPanelLg: {
      width: '40%',
    },
    rightPanel: {
      backgroundColor: 'white',
      padding: '3rem',
      width: '100%',
    },
    rightPanelLg: {
      width: '60%',
    },
    title: {
      fontFamily: 'serif',
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
    },
    paragraph: {
      color: '#a7f3d0', // jungle-200
      marginBottom: '3rem',
    },
    infoItem: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1.5rem',
      alignItems: 'flex-start',
    },
    infoText: {
      fontWeight: '600',
      marginBottom: '0.25rem',
    },
    infoSubtext: {
      color: '#e0f2f1', // jungle-100
      margin: 0,
      lineHeight: '1.25rem',
    },
    mapWrapper: {
      width: '100%',
      height: '12rem',
      backgroundColor: '#065f46', // jungle-800
      borderRadius: '1rem',
      overflow: 'hidden',
      position: 'relative',
    },
    mapImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.5,
    },
    mapButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      color: '#064e3b',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
      cursor: 'pointer',
    },
    formLabel: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#3f3f46', // earth-800
      display: 'block',
      marginBottom: '0.25rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '0.75rem',
      border: '1px solid #e5e7eb', // stone-200
      outline: 'none',
      transition: 'all 0.3s',
    },
    button: {
      width: '100%',
      backgroundColor: '#16a34a', // jungle-600
      color: 'white',
      fontWeight: 'bold',
      padding: '1rem',
      borderRadius: '1rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      border: 'none',
      transition: 'all 0.3s',
    },
    buttonHover: {
      backgroundColor: '#15803d', // jungle-700
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    },
    grid: {
      display: 'grid',
      gap: '1.5rem',
    },
    gridCols2: {
      gridTemplateColumns: '1fr',
    },
    gridCols2Md: {
      gridTemplateColumns: '1fr 1fr',
    },
    textarea: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '0.75rem',
      border: '1px solid #e5e7eb',
      resize: 'none',
      height: '8rem',
      outline: 'none',
      transition: 'all 0.3s',
    },
  };

  // Optional: add hover effect dynamically
  const [hovered, setHovered] = React.useState(false);

  return (
    <section id={SectionId.CONTACT} style={styles.section}>
      <div style={styles.container}>
        <div
          style={{
            ...styles.flex,
            ...(window.innerWidth >= 1024 ? styles.flexLg : {}),
          }}
        >
          {/* Left Panel */}
          <div
            style={{
              ...styles.leftPanel,
              ...(window.innerWidth >= 1024 ? styles.leftPanelLg : {}),
            }}
          >
            <div>
              <h2 style={styles.title}>Get in Touch</h2>
              <p style={styles.paragraph}>
                Have questions about your upcoming stay? Our concierge team is ready to assist you in planning your perfect jungle adventure.
              </p>

              <div>
                <div style={styles.infoItem}>
                  <Phone size={24} color="#86efac" />
                  <div>
                    <h3 style={styles.infoText}>Phone</h3>
                    <p style={styles.infoSubtext}>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div style={styles.infoItem}>
                  <Mail size={24} color="#86efac" />
                  <div>
                    <h3 style={styles.infoText}>Email</h3>
                    <p style={styles.infoSubtext}>reservations@thejunglestory.com</p>
                  </div>
                </div>

                <div style={styles.infoItem}>
                  <MapPin size={24} color="#86efac" />
                  <div>
                    <h3 style={styles.infoText}>Location</h3>
                    <p style={styles.infoSubtext}>
                      Rainforest Sector 4,<br />Amazon Basin, Brazil
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <div style={styles.mapWrapper}>
                <img
                  src="https://picsum.photos/id/10/400/200"
                  alt="Map Location"
                  style={styles.mapImage}
                />
                <button style={styles.mapButton}>Open in Maps</button>
              </div>
            </div>
          </div>

          {/* Right Panel (Form) */}
          <div
            style={{
              ...styles.rightPanel,
              ...(window.innerWidth >= 1024 ? styles.rightPanelLg : {}),
            }}
            id="book-now"
          >
            <h2 style={{ ...styles.title, color: '#3f3f46' }}>Book Your Stay</h2>
            <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Begin your story today.</p>

            <form
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name Grid */}
              <div
                style={{
                  ...styles.grid,
                  ...(window.innerWidth >= 768 ? styles.gridCols2Md : styles.gridCols2),
                }}
              >
                <div>
                  <label style={styles.formLabel}>First Name</label>
                  <input type="text" placeholder="John" style={styles.input} />
                </div>
                <div>
                  <label style={styles.formLabel}>Last Name</label>
                  <input type="text" placeholder="Doe" style={styles.input} />
                </div>
              </div>

              <div>
                <label style={styles.formLabel}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={styles.input} />
              </div>

              {/* Check-in & Guests */}
              <div
                style={{
                  ...styles.grid,
                  ...(window.innerWidth >= 768 ? styles.gridCols2Md : styles.gridCols2),
                }}
              >
                <div>
                  <label style={styles.formLabel}>Check-in</label>
                  <input type="date" style={styles.input} />
                </div>
                <div>
                  <label style={styles.formLabel}>Guests</label>
                  <select style={styles.input}>
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={styles.formLabel}>Special Requests</label>
                <textarea placeholder="Dietary restrictions, anniversary celebration, etc." style={styles.textarea}></textarea>
              </div>

              <button
                type="submit"
                style={{
                  ...styles.button,
                  ...(hovered ? styles.buttonHover : {}),
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <Calendar size={20} /> Check Availability
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
