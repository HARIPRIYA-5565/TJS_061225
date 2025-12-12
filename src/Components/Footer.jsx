import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from "react-router-dom";
import { SectionId } from '../constants'; // Import SectionId for consistency

export const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const forestGreen = "#628141";

  const isDesktop = windowWidth >= 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const styles = {
    footer: {
      background: "linear-gradient(135deg, #7A9A5A 0%, #628141 55%, #4C6932 100%)",
      color: forestGreen,
      padding: "3.5rem 0",
      fontSize: "0.875rem",
      borderTop: `3px solid ${forestGreen}`,
    },
    container: {
      width: "90%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "2.5rem",
      marginBottom: "2.5rem",
    },
    gridMd: {
      gridTemplateColumns: "2fr 1fr 1.4fr",
    },
    sectionTitle: {
      color: "#ffffff",
      fontWeight: "bold",
      marginBottom: "1.25rem",
      textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    },
    socialIcons: {
      display: "flex",
      gap: "0.75rem",
    },
    socialIcon: (hovered) => ({
      cursor: "pointer",
      transition: "color 0.3s",
      color: hovered ? "#d9e8cf" : "#ffffff",
    }),
    paragraph: {
      fontSize: "0.85rem",
      lineHeight: "1.6rem",
      color: "#ffffff",
      opacity: 0.95,
      textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    },
    link: (hovered) => ({
      cursor: "pointer",
      transition: "color 0.3s",
      color: hovered ? "#d9e8cf" : "#ffffff",
      textDecoration: "none",
      fontWeight: 500,
    }),
    bottomText: {
      borderTop: `1px solid rgba(255,255,255,0.35)`,
      paddingTop: "1.5rem",
      textAlign: "center",
      fontSize: "0.8rem",
      color: "#ffffff",
      opacity: 0.85,
    },
  };

  // ✅ SAME navItems structure as Header for consistency
  const navItems = [
    { label: "About", path: "/#about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Reviews", path: `/#${SectionId.TESTIMONIALS}` }, // 🟢 Smooth scroll to testimonials (matches Header)
  ];

  // 🟢 Handle navigation click (same logic as Header)
  const handleNavClick = (e, item, index) => {
    // If it's a hash link (in-page navigation), handle smooth scroll
    if (item.path.startsWith("/#")) {
      e.preventDefault();
      const sectionId = item.path.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        // Account for fixed header height
        const headerHeight = 100;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    // For page routes like "/gallery", React Router will handle navigation
    setHoveredLink(index);
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div
          style={{
            ...styles.grid,
            ...(isDesktop ? styles.gridMd : {}),
          }}
        >
          {/* Logo + Description + Social */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div>
              <img
                src="/Images/TJS_logo.png"
                alt="The Jungle Story Logo"
                style={{
                  height: windowWidth < 640 ? "200px" : "200px",
                  width: "auto",
                }}
              />
            </div>

            <p style={styles.paragraph}>
              A hidden eco-luxury retreat where forest trails, starlit skies,
              and quiet mornings weave into unforgettable stories.
            </p>

            <div style={styles.socialIcons}>
              <Instagram
                size={20}
                style={styles.socialIcon(hoveredLink === "instagram")}
                onMouseEnter={() => setHoveredLink("instagram")}
                onMouseLeave={() => setHoveredLink(null)}
              />
              <Facebook
                size={20}
                style={styles.socialIcon(hoveredLink === "facebook")}
                onMouseEnter={() => setHoveredLink("facebook")}
                onMouseLeave={() => setHoveredLink(null)}
              />
              <Twitter
                size={20}
                style={styles.socialIcon(hoveredLink === "twitter")}
                onMouseEnter={() => setHoveredLink("twitter")}
                onMouseLeave={() => setHoveredLink(null)}
              />
            </div>
          </div>

          {/* ✅ Header-style Navigation with React Router Links */}
          <div>
            <h4 style={styles.sectionTitle}>Navigate</h4>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    style={styles.link(hoveredLink === index)}
                    onClick={(e) => handleNavClick(e, item, index)}
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
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

 