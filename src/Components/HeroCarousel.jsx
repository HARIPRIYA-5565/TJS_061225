import React, { useState, useEffect, useRef } from "react";

const heroImages = [
  "/Images/imageThirtySixCrop.jpg",
  "/Images/imageThirtySixSunset.jpg",
  "/Images/imageTwentyOne.jpg",
  "/Images/imageFourteen.jpg",
  "/Images/imageThirtyThree.jpg",
];

const HeroCarousel = () => {
  const [active, setActive] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setOffsetY(Math.max(-rect.top, 0));
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(
      () => setActive((prev) => (prev + 1) % heroImages.length),
      3500
    );

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const getIndex = (offset) =>
    (active + offset + heroImages.length) % heroImages.length;

  const slideStyle = (position) => {
    const base = {
      position: "absolute",
      top: "50%",
      borderRadius: "20px",
      overflow: "hidden",
      transform: "translateY(-50%)",
      boxShadow:
        windowWidth < 640 ? "none" : "0 25px 60px rgba(0,0,0,0.25)",
      transition: "all 0.6s ease",
      cursor: "pointer",
      border: "4px solid #628141", // green border for all slides
    };

    const sectionHeight = windowWidth < 640 ? 400 : 600;

    // Mobile: only center
    if (windowWidth < 640) {
      if (position !== 0) return { display: "none" };
      return {
        ...base,
        left: "50%",
        width: "100%",
        height: `${sectionHeight}px`,
        transform: `translate(-50%, -50%) translateY(${offsetY * 0.1}px)`,
        zIndex: 2,
      };
    }

    // Desktop / Tablet side slides
    if (position === -1) {
      return {
        ...base,
        left: "5%",
        width: "24%",
        maxWidth: "24%",
        height: "80%",
        opacity: 0.7,
        transform: `translateY(-50%) rotate(-3deg) translateY(${offsetY * 0.2}px)`,
        zIndex: 1,
      };
    }

    if (position === 1) {
      return {
        ...base,
        right: "5%",
        width: "24%",
        maxWidth: "24%",
        height: "80%",
        opacity: 0.7,
        transform: `translateY(-50%) rotate(3deg) translateY(${offsetY * 0.2}px)`,
        zIndex: 1,
      };
    }

    // Center slide
    return {
      ...base,
      left: "50%",
      width: "54%",
      height: "85%",
      transform: `translate(-50%, -50%) translateY(${offsetY * 0.35}px)`,
      opacity: 1,
      zIndex: 5,
    };
  };

  return (
  <div
  ref={sectionRef}
  style={{
    height: windowWidth < 640 ? "400px" : "600px",
    position: "relative",
    margin: "0 auto",
    overflow: "hidden",
    padding: windowWidth < 640 ? "20px" : "0", // Apply 20px padding on all sides for small screens
  }}
>

      

      {/* Background blurred image with white translucent overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("/Images/imageFourtyThree.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(6px)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255,255,255,0.35)", // translucent white overlay
          backdropFilter: "blur(2px)", // soft blur effect on overlay
          zIndex: 1,
        }}
      />

      {/* Left slide */}
      <div style={slideStyle(-1)} onClick={() => setActive(getIndex(-1))}>
        <img
          src={heroImages[getIndex(-1)]}
          alt="Slide"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Center slide */}
      <div style={slideStyle(0)}>
        <img
          src={heroImages[active]}
          alt="Slide"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Right slide */}
      <div style={slideStyle(1)} onClick={() => setActive(getIndex(1))}>
        <img
          src={heroImages[getIndex(1)]}
          alt="Slide"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
