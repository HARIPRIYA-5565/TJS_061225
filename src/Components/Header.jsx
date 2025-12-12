

// Header.jsx
import React, { useState, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import { SectionId } from '../constants'; // Import SectionId

const navItems = [
  { label: "About", path: "/#about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Reviews", path: `/#${SectionId.TESTIMONIALS}` }, // Smooth scroll to testimonials
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverCTA, setHoverCTA] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Account for fixed header height (approx 100px)
      const headerHeight = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    // Close mobile menu after click
    setMenuOpen(false);
  };

  const headerOuter = {
    position: "fixed",
    top: "0",
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    zIndex: 50,
    transition: "transform 0.25s ease, opacity 0.25s ease",
    transform: isScrolled ? "scale(0.98)" : "scale(1)",
    opacity: isScrolled ? 0.97 : 1,
    padding: windowWidth < 640 ? "0.5rem" : "1rem",
  };

  const headerInner = {
    width: "100%",
    maxWidth: "1120px",
    background: "#fdf2f6",
    borderRadius: "999px",
    padding: windowWidth < 640 ? "0.5rem 1rem" : "0.75rem 1.4rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
    position: "relative",
  };

  const nav = {
    display: windowWidth < 640 ? (menuOpen ? "flex" : "none") : "flex",
    flexDirection: windowWidth < 640 ? "column" : "row",
    gap: windowWidth < 640 ? "1rem" : "1.75rem",
    alignItems: "center",
    fontSize: "0.95rem",
    position: windowWidth < 640 ? "absolute" : "static",
    top: windowWidth < 640 ? "100%" : "auto",
    right: windowWidth < 640 ? "0" : "auto",
    background: windowWidth < 640 ? "white" : "transparent",
    borderRadius: windowWidth < 640 ? "16px" : "0",
    padding: windowWidth < 640 ? "1rem 1.5rem" : "0",
    boxShadow:
      windowWidth < 640 && menuOpen ? "0 8px 20px rgba(0,0,0,0.15)" : "none",
  };

  const navItem = (active) => ({
    textDecoration: "none",
    color: active ? "white" : "#628141",
    fontWeight: 500,
    padding: "0.35rem 0.9rem",
    borderRadius: "999px",
    background: active ? "#628141" : "transparent",
    transition: "all 0.2s ease",
    width: windowWidth < 640 ? "100%" : "auto",
    textAlign: windowWidth < 640 ? "center" : "left",
    cursor: "pointer",
  });

  const cta = {
    padding: "0.6rem 1.4rem",
    borderRadius: "999px",
    background: hoverCTA ? "#628141" : "#628130",
    color: "white",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    transition: "background 0.2s ease, transform 0.2s ease",
    transform: hoverCTA ? "translateY(-1px)" : "translateY(0)",
    marginLeft: windowWidth < 640 ? "0" : "1rem",
    marginTop: windowWidth < 640 ? "0.5rem" : "0",
    width: windowWidth < 640 ? "100%" : "auto",
  };

  // Handle navigation click
  const handleNavClick = (e, item, index) => {
    // If it's a hash link (in-page navigation), handle smooth scroll
    if (item.path.startsWith("/#")) {
      e.preventDefault();
      const sectionId = item.path.replace("/#", "");
      scrollToSection(sectionId);
    }
    setHoveredNav(index);
  };

  return (
    <>
      <header style={headerOuter}>
        <div style={headerInner}>
          {/* Logo */}
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <span
              className="travel-heading"
              style={{
                fontWeight: 700,
                fontSize: windowWidth < 640 ? "15px" : "30px",
                letterSpacing: "0.03em",
                color: "#628141",
                textShadow:
                  windowWidth < 640
                    ? "0px 3px 0 #f7c6b5, 0px 3px 0 #f4a88f"
                    : "0px 3px 0 #f7c6b5, 0px 3px 0 #f4a88f ",
              }}
            >
              The Jungle Story By Headquarter
            </span>
          </Link>

          {/* Hamburger menu for mobile */}
          {windowWidth < 640 && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.25rem",
              }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}

          {/* Nav links */}
          <nav style={nav}>
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.path}
                style={navItem(hoveredNav === index)}
                onClick={(e) => handleNavClick(e, item, index)}
                onMouseEnter={() => setHoveredNav(index)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {item.label}
              </Link>
            ))}

            {/* CTA for mobile inside menu */}
            {windowWidth < 640 && (
              <button
                type="button"
                style={cta}
                onClick={() => setShowModal(true)}
                onMouseEnter={() => setHoverCTA(true)}
                onMouseLeave={() => setHoverCTA(false)}
              >
                Contact Us
              </button>
            )}
          </nav>

          {/* CTA for desktop */}
          {windowWidth >= 640 && (
            <button
              type="button"
              style={cta}
              onClick={() => setShowModal(true)}
              onMouseEnter={() => setHoverCTA(true)}
              onMouseLeave={() => setHoverCTA(false)}
            >
              Contact Us
            </button>
          )}
        </div>
      </header>

      <AuthModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};
