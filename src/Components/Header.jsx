import React, { useState, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import { SectionId } from "../constants";

const navItems = [
  { label: "About", path: "/#about" },
  { label: "Rooms", path: "/rooms" },
  { label: "Gallery", path: "/gallery" },
  { label: "Reviews", path: `/#${SectionId.TESTIMONIALS}` },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverCTA, setHoverCTA] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  const handleNavClick = (e, item, index) => {
    if (item.path.startsWith("/#")) {
      e.preventDefault();
      const sectionId = item.path.replace("/#", "");
      scrollToSection(sectionId);
    }
    setHoveredNav(index);
    setMenuOpen(false);
  };

  // Colors
  const primaryColor = "#2e3a21";
  const primaryHover = "#242b19";
  const bgColor = "#fdf2f6";
  const textColor = "#2e3a21";

  // ✅ WIDER HEADER - NO TEXT WRAPPING
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
    maxWidth: "1400px", // ✅ INCREASED from 1120px → 1400px
    background: bgColor,
    borderRadius: "999px",
    padding: windowWidth < 640 ? "0.5rem 2rem" : "0.75rem 2.5rem", // ✅ MORE padding
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 18px 45px rgba(0,0,0,0.18)",
    position: "relative",
  };

  const nav = {
    display: windowWidth < 640 ? (menuOpen ? "flex" : "none") : "flex",
    flexDirection: windowWidth < 640 ? "column" : "row",
    gap: windowWidth < 640 ? "1.5rem" : "2.5rem", // ✅ INCREASED gap
    alignItems: "center",
    fontSize: "1rem", // ✅ SLIGHTLY larger font
    position: windowWidth < 640 ? "absolute" : "static",
    top: windowWidth < 640 ? "100%" : "auto",
    right: windowWidth < 640 ? "0" : "auto",
    background: windowWidth < 640 ? "white" : "transparent",
    borderRadius: windowWidth < 640 ? "16px" : "0",
    padding: windowWidth < 640 ? "1.5rem 2rem" : "0", // ✅ MORE mobile padding
    boxShadow: windowWidth < 640 && menuOpen ? "0 8px 20px rgba(0,0,0,0.15)" : "none",
    minWidth: windowWidth < 640 ? "auto" : "500px", // ✅ MIN WIDTH for desktop nav
  };

  const navItem = (active) => ({
    textDecoration: "none",
    color: active ? "white" : textColor,
    fontWeight: 600, // ✅ BOLDER
    padding: "0.5rem 1.2rem", // ✅ MORE padding
    borderRadius: "999px",
    background: active ? primaryColor : "transparent",
    transition: "all 0.2s ease",
    width: windowWidth < 640 ? "100%" : "auto",
    textAlign: windowWidth < 640 ? "center" : "left",
    cursor: "pointer",
    border: `2px solid transparent`,
    whiteSpace: "nowrap", // ✅ PREVENTS TEXT WRAPPING
  });

  const cta = {
    padding: "0.85rem 2.2rem", // ✅ LARGER CTA
    borderRadius: "999px",
    background: hoverCTA ? primaryHover : primaryColor,
    color: "white",
    fontWeight: 700,
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
    transform: hoverCTA ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
    boxShadow: hoverCTA
      ? `0 12px 30px rgba(46,58,33,0.45)`
      : `0 6px 20px rgba(46,58,33,0.25)`,
    marginLeft: windowWidth < 640 ? "0" : "1.5rem", // ✅ MORE space
    marginTop: windowWidth < 640 ? "0.75rem" : "0",
    width: windowWidth < 640 ? "100%" : "auto",
    letterSpacing: "0.025em",
    position: "relative",
    overflow: "hidden",
    whiteSpace: "nowrap",
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
              gap: "0.5rem",
              flexShrink: 0, // ✅ Prevent logo shrinking
            }}
          >
            <span
              className="travel-heading"
              style={{
                fontWeight: 700,
                fontSize: windowWidth < 640 ? "16px" : "32px", // ✅ SLIGHTLY larger
                letterSpacing: "0.03em",
                color: primaryColor,
                textShadow:
                  windowWidth < 640
                    ? "0px 3px 0 #f7c6b5, 0px 3px 0 #f4a88f"
                    : "0px 3px 0 #f7c6b5, 0px 3px 0 #f4a88f",
                whiteSpace: "nowrap",
              }}
            >
              The Jungle Story By Headquarter
            </span>
          </Link>

          {/* Hamburger menu for mobile */}
          {windowWidth < 640 && (
            <button
              className="travel-heading"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                color: primaryColor,
                flexShrink: 0,
              }}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          )}

          {/* Nav links */}
          <nav style={nav}>
            {navItems.map((item, index) => (
              <Link
                className="travel-heading"
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

            {/* Mobile CTA */}
            {windowWidth < 640 && (
              <button
                className="travel-heading"
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

          {/* Desktop CTA */}
          {windowWidth >= 640 && (
            <button
              className="travel-heading"
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

export default Header;
