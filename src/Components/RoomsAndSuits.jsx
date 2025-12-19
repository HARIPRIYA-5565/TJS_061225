import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, BedDouble, Bath, Mountain } from "lucide-react";
import { SectionId } from "../constants";

import room1 from "../assets/Images/imageFive.jpg";
import room2 from "../assets/Images/imageFour.jpg";
import room3 from "../assets/Images/imageFourteen.jpg";
import room4 from "../assets/Images/imageFifteen.jpg";
import room5 from "../assets/Images/imageFourty.jpg";
import headerBg from "../assets/Images/header_bg_green.jpeg";

const ROOMS = [
  {
    id: 1,
    title: "Standard Room with Private Walled Balcony",
    subtitle: "Starting ₹5500 / Night",
    image: room1,
    size: "260 sq.ft",
    bed: "Queen Bed",
    view: "Cozy forest-side balcony",
  },
  {
    id: 2,
    title: "Superior Room with Forest View Balcony",
    subtitle: "Starting ₹6000 / Night",
    image: room2,
    size: "280 sq.ft",
    bed: "King Bed",
    view: "Direct forest & valley view",
  },
  {
    id: 3,
    title: "Premium Room with Valley View Balcony",
    subtitle: "Starting ₹6500 / Night",
    image: room3,
    size: "300 sq.ft",
    bed: "King Bed + Lounge",
    view: "Sweeping valley panorama",
  },
  {
    id: 4,
    title: "Luxury Room with Valley View Balcony",
    subtitle: "Starting ₹7000 / Night",
    image: room4,
    size: "320 sq.ft",
    bed: "King Bed",
    view: "Sunrise over cedar hills",
  },
  {
    id: 5,
    title: "Family Suite with Two Connected Rooms",
    subtitle: "Starting ₹8600 / Night",
    image: room5,
    size: "420 sq.ft",
    bed: "2 King Beds",
    view: "Family‑friendly forest suite",
  },
];

const green = "#2e3a21";
const greenSoft = "#3b4a2a";

const RoomsAndSuites = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [hoveredId, setHoveredId] = useState(null);
  const containerRef = useRef(null);

  const isMobile = windowWidth < 768;
  const PER_SLIDE = 4;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + PER_SLIDE) % ROOMS.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const goNext = () => {
    setActiveIndex((prev) => (prev + PER_SLIDE) % ROOMS.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - PER_SLIDE + ROOMS.length) % ROOMS.length);
  };

  const currentRooms = [];
  for (let i = 0; i < PER_SLIDE && i < ROOMS.length; i++) {
    currentRooms.push(ROOMS[(activeIndex + i) % ROOMS.length]);
  }

  const styles = {
    outerWrapper: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      padding: "4rem 0 5rem",
    //   backgroundImage: `url(${headerBg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    section: {
      position: "relative",
      flex: "0 1 1200px",
      backgroundColor: "rgba(252,249,244,0.96)",
      borderRadius: "24px",
      overflow: "hidden",
      boxShadow:
        "0 26px 60px rgba(0,0,0,0.18), 0 0 42px rgba(98,129,65,0.28)",
    },
    sectionInner: {
      padding: "3.25rem 4vw 3rem",
    },
    headingBlock: {
      textAlign: "center",
      maxWidth: "720px",
      margin: "0 auto 2.75rem",
      color: green,
    },
    smallEyebrow: {
      textTransform: "uppercase",
      letterSpacing: "0.24em",
      fontSize: "0.75rem",
      color: "#9b6a3a",
      marginBottom: "0.6rem",
    },
    mainHeading: {
      fontSize: "2.4rem",
      fontWeight: 700,
      marginBottom: "0.9rem",
    },
    subText: {
      fontSize: "0.95rem",
      lineHeight: 1.7,
      color: "#4b5563",
    },
    carouselShell: {
      position: "relative",
      marginTop: "2rem",
    },
    grid: {
      display: "grid",
      gap: "1.25rem",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(12, 1fr)",
      gridAutoRows: "minmax(220px, auto)",
    },
    cardWrapper: (index) => {
      if (isMobile) return { gridColumn: "1 / -1" };
      if (index === 0) return { gridColumn: "1 / span 4" };
      if (index === 1) return { gridColumn: "5 / span 4" };
      if (index === 2) return { gridColumn: "9 / span 4" };
      if (index === 3) return { gridColumn: "1 / span 7" };
      if (index === 4) return { gridColumn: "8 / span 5" };
      return { gridColumn: "1 / span 4" };
    },
    card: (primary) => ({
      position: "relative",
      borderRadius: "18px",
      overflow: "hidden",
      minHeight: "220px",
      backgroundColor: "#111827",
      color: "white",
      boxShadow: primary
        ? "0 22px 50px rgba(0,0,0,0.4), 0 0 26px rgba(98,129,65,0.5)"
        : "0 18px 40px rgba(0,0,0,0.32), 0 0 18px rgba(98,129,65,0.35)",
      cursor: "pointer",
    }),
    cardImage: (hovered) => ({
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hovered ? "scale(1.06)" : "scale(1.03)",
      transition: "transform 0.5s ease",
    }),
    cardGradientOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(135deg, rgba(0,0,0,0.72) 10%, rgba(0,0,0,0.20) 60%, rgba(0,0,0,0.75) 100%)",
    },
    cardContent: {
      position: "absolute",
      inset: "0.9rem 1.6rem 1.3rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      overflow: "hidden",
    },
    cardTopText: {
      fontSize: "0.72rem",
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "#e5e7eb",
    },
    cardTitle: {
      marginTop: "0.4rem",
      fontSize: "1.1rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    // sliding blocks
    cardFront: (hovered) => ({
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      transform: hovered ? "translateY(-100%)" : "translateY(0)",
      transition: "transform 0.35s ease",
    }),
    cardBack: (hovered) => ({
      position: "absolute",
      left: 0,
      width: "100%",
      bottom: hovered ? 0 : "-100%",
      transform: hovered ? "translateY(0)" : "translateY(100%)",
      transition: "transform 0.35s ease",
    }),
    infoRow: {
      display: "flex",
      gap: "1.25rem",
      alignItems: "center",
      fontSize: "0.8rem",
      marginTop: "0.7rem",
      color: "#e5e7eb",
    },
    infoItem: {
      display: "flex",
      alignItems: "center",
      gap: "0.35rem",
      opacity: 0.92,
    },
    detailsRow: {
      marginTop: "0.9rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "0.82rem",
    },
    detailsBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.35rem",
      textTransform: "uppercase",
      letterSpacing: "0.16em",
      fontSize: "0.72rem",
      padding: "0.45rem 0.95rem",
      borderRadius: "999px",
      border: "1px solid rgba(243,244,246,0.8)",
      background:
        "linear-gradient(135deg, rgba(15,23,42,0.75), rgba(46,58,33,0.9))",
      cursor: "pointer",
    },
    priceTag: {
      fontSize: "0.8rem",
      color: "#f3f4f6",
      opacity: 0.9,
    },
    navButtons: {
      position: "absolute",
      top: "-2.4rem",
      right: 0,
      display: "flex",
      gap: "0.4rem",
    },
    navButton: {
      width: "32px",
      height: "32px",
      borderRadius: "999px",
      border: "1px solid rgba(148,163,184,0.6)",
      backgroundColor: "rgba(255,255,255,0.9)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: greenSoft,
      boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
    },
  };

  return (
    <div style={styles.outerWrapper}>
      <section id={SectionId.ROOMS} style={styles.section}>
        <div style={styles.sectionInner} ref={containerRef}>
          <div style={styles.headingBlock} className="travel-heading">
            <div style={styles.smallEyebrow}>Best place to stay in Shimla</div>
            <h2 style={styles.mainHeading}>
              The Jungle Story Rooms &amp; Suites
            </h2>
            <p style={styles.subText}>
              Discover thoughtfully designed rooms and suites that open out to
              pine‑clad valleys and soft morning light. Each category combines
              warm timber interiors with modern comforts for a slow, indulgent
              stay.
            </p>
          </div>

          <div style={styles.carouselShell}>
            <div style={styles.navButtons}>
              <button type="button" style={styles.navButton} onClick={goPrev}>
                ‹
              </button>
              <button type="button" style={styles.navButton} onClick={goNext}>
                ›
              </button>
            </div>

            <div style={styles.grid}>
              {currentRooms.map((room, index) => {
                const hovered = hoveredId === room.id;
                return (
                  <div key={room.id} style={styles.cardWrapper(index)}>
                    <div
                      style={styles.card(index === 1 || index === 3)}
                      onMouseEnter={() => setHoveredId(room.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <img
                        src={room.image}
                        alt={room.title}
                        style={styles.cardImage(hovered)}
                      />
                      <div style={styles.cardGradientOverlay} />

                      <div style={styles.cardContent}>
                        {/* FRONT state (non-hover) */}
                        <div style={styles.cardFront(hovered)}>
                          <div style={styles.cardTopText}>
                            {room.subtitle.toUpperCase()}
                          </div>
                          <h3
                            style={styles.cardTitle}
                            className="travel-heading"
                          >
                            {room.title}
                          </h3>
                        </div>

                        {/* BACK state (hover) */}
                        <div style={styles.cardBack(hovered)}>
                          <div>
                            <div style={styles.cardTopText}>
                              {room.subtitle.toUpperCase()}
                            </div>
                            <h3
                              style={styles.cardTitle}
                              className="travel-heading"
                            >
                              {room.title}
                            </h3>

                            <div style={styles.infoRow}>
                              <div style={styles.infoItem}>
                                <BedDouble size={15} />
                                <span>{room.bed}</span>
                              </div>
                              <div style={styles.infoItem}>
                                <Bath size={15} />
                                <span>{room.size}</span>
                              </div>
                              <div style={styles.infoItem}>
                                <Mountain size={15} />
                                <span>{room.view}</span>
                              </div>
                            </div>
                          </div>

                          <div style={styles.detailsRow}>
                            <span style={styles.priceTag}>
                              Taxes extra • Breakfast included
                            </span>
                            <button type="button" style={styles.detailsBtn}>
                              Details
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomsAndSuites;
