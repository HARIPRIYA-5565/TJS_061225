import { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import headerBg from "../assets/Images/header_bg_green.jpeg";
import page1 from "../assets/Images/The-Jungle-Story-By-HQ-Food-Menu_page-0001.jpg";
import page2 from "../assets/Images/The-Jungle-Story-By-HQ-Food-Menu_page-0002.jpg";
import page3 from "../assets/Images/The-Jungle-Story-By-HQ-Food-Menu_page-0003.jpg";
import page4 from "../assets/Images/The-Jungle-Story-By-HQ-Food-Menu_page-0004.jpg";
import page5 from "../assets/Images/The-Jungle-Story-By-HQ-Food-Menu_page-0005.jpg";
import page6 from "../assets/Images/The-Jungle-Story-By-HQ-Food-Menu_page-0006.jpg";
import page7 from "../assets/Images/The-Jungle-Story-By-HQ-Food-Menu_page-0007.jpg";
import page8 from "../assets/Images/The-Jungle-Story-By-HQ-Food-Menu_page-0008.jpg";

const MenuFlipBook = () => {
  const pages = [page1, page2, page3, page4, page5, page6, page7, page8];

  const FIXED_WIDTH = 540;
  const FIXED_HEIGHT = 680;
  const MOBILE_WIDTH = 320;
  const MOBILE_HEIGHT = 480;

  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const styles = {
    container: {
      minHeight: "20vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: isMobile ? "1rem" : "2rem",
      backgroundImage: `url(${headerBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed"
    },
    titleSection: {
      textAlign: "center",
      marginBottom: isMobile ? "1rem" : "1.5rem"
    },
    title: {
      fontSize: isMobile ? "1.8rem" : "2.6rem",
      fontWeight: "bold",
      color: "#FDE047",
      marginBottom: "0.5rem",
      textShadow: "0 4px 8px rgba(0,0,0,0.8)",
      letterSpacing: "0.05em"
    },
    subtitle: {
      fontSize: isMobile ? "1rem" : "1.2rem",
      color: "rgba(255,255,255,0.95)",
      fontWeight: "600",
      textShadow: "0 2px 4px rgba(0,0,0,0.7)"
    },
    flipbookWrapper: {
      width: isMobile ? MOBILE_WIDTH : FIXED_WIDTH,
      height: isMobile ? MOBILE_HEIGHT : FIXED_HEIGHT,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    },
    flipbook: {
      boxShadow: "0 25px 50px rgba(0,0,0,0.6)",
      borderRadius: isMobile ? "12px" : "16px",
      background: "linear-gradient(135deg, #E7F3E1, #C9DDBE)",
      backdropFilter: "blur(10px)",
      border: "4px solid #647328"
    },
    page: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#ffffff",
      boxShadow: "inset 0 1px 3px rgba(0,0,0,0.08)",
      borderRadius: isMobile ? "10px" : "12px",
      overflow: "hidden",
      padding: "0"
    },
    image: {
      width: "100%",
      height: "99.9%",
      objectFit: "contain",
      maxWidth: "100%",
      maxHeight: "99.9%",
      borderRadius: isMobile ? "8px" : "10px"
    },
    footer: {
      marginTop: isMobile ? "1rem" : "1.5rem",
      textAlign: "center",
      color: "rgba(255,255,255,0.9)",
      fontSize: isMobile ? "0.8rem" : "0.95rem",
      fontWeight: "500",
      textShadow: "0 1px 3px rgba(0,0,0,0.7)"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.titleSection}>
        <h1 style={styles.title}>Food Menu</h1>
        {/* <p style={styles.subtitle}>Interactive Food Menu</p> */}
      </div>

      <div style={styles.flipbookWrapper}>
        <HTMLFlipBook
          width={isMobile ? MOBILE_WIDTH : FIXED_WIDTH}
          height={isMobile ? MOBILE_HEIGHT : FIXED_HEIGHT}
          size="stretch"
          minWidth={isMobile ? MOBILE_WIDTH : FIXED_WIDTH}
          maxWidth={isMobile ? MOBILE_WIDTH : FIXED_WIDTH}
          minHeight={isMobile ? MOBILE_HEIGHT : FIXED_HEIGHT}
          maxHeight={isMobile ? MOBILE_HEIGHT : FIXED_HEIGHT}
          maxShadowOpacity={isMobile ? 0.4 : 0.3}
          showCover={true}
          mobileScrollSupport={true}
          swipeDistance={isMobile ? 20 : 0} // ✅ Mobile swipe sensitivity
          flippingTime={isMobile ? 1200 : 1000} // ✅ Slower mobile flip
          usePortrait={isMobile} // ✅ Portrait mode on mobile
          startPage={0}
          style={styles.flipbook}
        >
          {pages.map((page, index) => (
            <div key={`page-${index + 1}`} style={styles.page}>
              <img
                src={page}
                alt={`Jungle Story Menu - Page ${index + 1}`}
                style={styles.image}
                loading="lazy"
              />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      <div style={styles.footer}>Click • Drag • Swipe to explore</div>
    </div>
  );
};

export default MenuFlipBook;
