import React, { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import { SectionId } from "../constants";
import TJSLogo from "../assets/Images/TJS_logo.png";
import headerBg from "../assets/Images/header_bg.png";

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

  // only one sticky tab on the right
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // show WhatsApp tab once after 2 seconds
    const timeoutId = setTimeout(() => {
      setShowWhatsApp(true);
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
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

  const primaryColor = "#2e3a21";
  const primaryHover = "#242b19";
  const textColor = "#2e3a21";
  const quickTabColor = "#b18449";

  const headerOuter = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 60,
    backgroundImage: `url(${headerBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    boxShadow: isScrolled
      ? "0 4px 15px rgba(0,0,0,0.18)"
      : "0 2px 8px rgba(0,0,0,0.12)",
    transition: "box-shadow 0.25s ease, background 0.25s ease",
  };

  const headerInner = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "1rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const leftBlock = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    flexShrink: 0,
  };

  const centerBlock = {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "3rem",
    fontSize: "0.85rem",
    color: textColor,
  };

  const centerItemLabel = {
    display: "block",
    fontSize: "0.78rem",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    color: "#777777",
  };

  const centerItemValue = {
    fontWeight: 600,
    color: textColor,
    whiteSpace: "nowrap",
  };

  const rightBlock = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    flexShrink: 0,
  };

  const cta = {
    padding: "0.45rem 1.2rem",
    borderRadius: "20px",
    background: hoverCTA ? primaryHover : primaryColor,
    color: "white",
    fontWeight: 600,
    fontSize: "0.85rem",
    border: "none",
    cursor: "pointer",
    transition: "background 0.2s ease, transform 0.2s ease",
    transform: hoverCTA ? "translateY(-1px)" : "translateY(0)",
    boxShadow: hoverCTA
      ? "0 6px 16px rgba(0,0,0,0.25)"
      : "0 3px 10px rgba(0,0,0,0.18)",
    whiteSpace: "nowrap",
  };

  const HEADER_HEIGHT = 70;

  const sideMenu = {
    position: "fixed",
    top: HEADER_HEIGHT,
    right: 0,
    width: windowWidth < 768 ? "75%" : "320px",
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    background: "#ffffff",
    boxShadow: "-4px 0 20px rgba(0,0,0,0.2)",
    transform: menuOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.3s ease",
    zIndex: 70,
    display: "flex",
    flexDirection: "column",
  };

  const sideMenuHeader = {
    padding: "1rem 1.5rem",
    borderBottom: "1px solid #e5e5e5",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: 600,
    fontSize: "0.9rem",
    color: textColor,
  };

  const sideMenuList = {
    flex: 1,
    overflowY: "auto",
    padding: "1rem 1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  };

  const sideMenuItem = (active, hovered) => ({
    padding: "0.7rem 0.4rem",
    borderBottom: "1px solid #f0f0f0",
    fontSize: "0.9rem",
    fontWeight: active ? 600 : 500,
    color: hovered || active ? "#ffffff" : "#444444",
    textDecoration: "none",
    cursor: "pointer",
    borderRadius: "4px",
    background: hovered || active ? quickTabColor : "transparent",
    transition: "background 0.2s ease, color 0.2s ease",
  });

  return (
    <>
      <header style={headerOuter}>
        <div style={headerInner}>
          {/* LEFT: Logo image + text */}
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={leftBlock}>
              <div
                style={{
                  width: 80,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={TJSLogo}
                  alt="The Jungle Story Logo"
                  style={{
                    objectFit: "contain",
                    display: "block",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  className="travel-heading"
                  style={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "0.10em",
                    color: primaryColor,
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                  }}
                >
                  THE JUNGLE STORY
                </span>
                <span
                  className="travel-heading"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#777777",
                    whiteSpace: "nowrap",
                  }}
                >
                  BY HEADQUARTER
                </span>
                <span
                  className="travel-heading"
                  style={{
                    marginTop: "0.15rem",
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#999999",
                    whiteSpace: "nowrap",
                  }}
                >
                  A LUXURY FOREST RETREAT
                </span>
              </div>
            </div>
          </Link>

          {/* CENTER: Reservation / Email (desktop only) */}
          {windowWidth > 768 && (
            <div style={centerBlock}>
              <div>
                <span style={centerItemLabel}>Reservation</span>
                <span style={centerItemValue}>+91-9015483181</span>
              </div>
              <div>
                <span style={centerItemLabel}>Email</span>
                <span style={centerItemValue}>
                  reservations@thejunglestory.com
                </span>
              </div>
            </div>
          )}

          {/* RIGHT: burger + CTA */}
          <div style={rightBlock}>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.25rem",
                color: primaryColor,
              }}
            >
              <Menu size={22} />
            </button>

            {windowWidth > 640 && (
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
        </div>
      </header>

      {/* RIGHT-SIDE VERTICAL MENU BELOW HEADER */}
      <aside style={sideMenu}>
        <div style={sideMenuHeader}>
          <span>Menu</span>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <X size={20} color="#777777" />
          </button>
        </div>

        <div style={sideMenuList}>
          {navItems.map((item, index) => {
            const hovered = hoveredNav === index;
            return (
              <Link
                key={item.label}
                to={item.path}
                className="travel-heading"
                style={sideMenuItem(hovered, hovered)}
                onClick={(e) => handleNavClick(e, item, index)}
                onMouseEnter={() => setHoveredNav(index)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {item.label}
              </Link>
            );
          })}

          {windowWidth <= 640 && (
            <button
              type="button"
              className="travel-heading"
              style={{
                ...sideMenuItem(hoveredNav === -1, hoveredNav === -1),
                marginTop: "0.9rem",
                border: "none",
                textAlign: "left",
              }}
              onClick={() => {
                setMenuOpen(false);
                setShowModal(true);
              }}
              onMouseEnter={() => setHoveredNav(-1)}
              onMouseLeave={() => setHoveredNav(null)}
            >
              CONTACT US
            </button>
          )}
        </div>
      </aside>

      {/* WHATSAPP SIDE TAB – RIGHT, appears after 2s and stays */}
      <div
        style={{
          position: "fixed",
          top: "35%",
          right: showWhatsApp ? 0 : "-140px",
          transform: "translateY(-50%)",
          zIndex: 100,
          transition: "right 0.4s ease-out",
        }}
      >
        <button
          type="button"
          onClick={() =>
            window.open("https://wa.me/919015483181", "_blank")
          }
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            background: "#628141",
            color: "#ffffff",
            border: "none",
            padding: "0.75rem 0.4rem",
            borderRadius: "8px 0 0 8px",
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "0.12em",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
          }}
        >
          WHATSAPP
        </button>
      </div>

      <AuthModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Header;
