

// HeroSection.jsx
import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { SectionId } from "../constants";
import AuthModal from "./AuthModal";

export const HeroSection = () => {
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [animate, setAnimate] = useState(false);

  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <>
      {/* Inject your animation CSS */}
      <style>{`
        .animated-container {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
        }

        .showup {
          animation: showup 7s infinite;
        }

        .reveal {
          width: 0px;
          display:inline-block;
          overflow:hidden;
          white-space:nowrap;
          animation: reveal 7s infinite;
        }

        .slidein {
          margin-left: -355px;
          display:inline-block;
          animation: slidein 7s infinite;
        }

        /* Add delay classes for sync */
        .delay-1 .reveal,
        .delay-1 .slidein {
          animation-delay: 1s;
        }

        .delay-2 .reveal,
        .delay-2 .slidein {
          animation-delay: 2s;
        }

        .delay-3 .reveal,
        .delay-3 .slidein {
          animation-delay: 3.5s;
        }

        @keyframes showup {
          0% { opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }

        @keyframes slidein {
          0% { margin-left: -800px; }
          20% { margin-left: -800px; }
          35% { margin-left: 0px; }
          100% { margin-left: 0px; }
        }

        @keyframes reveal {
          0% { opacity:0; width:0px; }
          20% { opacity:1; width:0px; }
          30% { width:355px; }
          80% { opacity:1; }
          100% { opacity:0; width:100%; }
        }

        /* Responsive fonts */
        
/* Allow text wrap on smaller screens */
@media (max-width: 768px) {
  .reveal {
    white-space: normal !important; /* allows line wrap */
  }
  h1 {
    font-size: clamp(22px, 6vw, 40px);
  }
  p {
    font-size: clamp(0.8rem, 1.2vw, 0.95rem);
  }
}

@media (max-width: 480px) {
  .reveal {
    white-space: normal !important; /* ensures text wraps properly */
  }
  h1 {
    font-size: clamp(20px, 7vw, 32px);
  }
  p {
    font-size: clamp(0.75rem, 3.5vw, 0.9rem);
  }
  button {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
  }
        }
      `}</style>

      <section
        id={SectionId.HERO}
        style={{
          width: "100%",
          margin: "0 auto",
          backgroundImage: 'url("/Images/imageThirtySixSunset.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 20px",
          boxSizing: "border-box",
        }}
      >
        <div
          ref={textRef}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: "900px",
          }}
        >
          {/* MAIN HEADING */}
          <div className={animate ? "delay-1" : ""}>
            <div className={animate ? "reveal" : ""}>
              <div className={animate ? "slidein" : ""}>
                <h1
                 className="travel-heading"
                  style={{
                    fontSize: "clamp(28px, 6vw, 50px)",
                    fontWeight: 700,
                    color: "white",
                    textShadow: `
                      0px 0px 6px rgba(98,129,65,0.9),
                      0px 0px 12px rgba(98,129,65,0.7),
                      2px 2px 4px rgba(0,0,0,0.2)
                    `,
                    width: "100%",
                    marginBottom: 0,
                  }}
                >
                  Live In Asia's Densest Forest
                </h1>
              </div>
            </div>
          </div>

          {/* SUB HEADING 1 */}
          <div className={animate ? "delay-2" : ""}>
            <div className={animate ? "reveal" : ""}>
              <div className={animate ? "slidein" : ""}>
                <p
                 className="travel-heading"
                  style={{
                    color: "white",
                    textShadow: `
                      0px 0px 6px rgba(98,129,65,0.9),
                      0px 0px 12px rgba(98,129,65,0.7),
                      2px 2px 4px rgba(0,0,0,0.2)
                    `,
                    fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
                    lineHeight: "1.7",
                    fontWeight: 900,
                    marginBottom: 0,
                  }}
                >
                  Disconnect from the noise & reconnect with nature.
                </p>
              </div>
            </div>
          </div>

          {/* SUB HEADING 2 */}
          <div className={animate ? "delay-3" : ""}>
            <div className={animate ? "reveal" : ""}>
              <div className={animate ? "slidein" : ""}>
                <p
                 className="travel-heading"
                  style={{
                    color: "white",
                    textShadow: `
                      0px 0px 6px rgba(98,129,65,0.9),
                      0px 0px 12px rgba(98,129,65,0.7),
                      2px 2px 4px rgba(0,0,0,0.2)
                    `,
                    fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)",
                    lineHeight: "1.7",
                    fontWeight: 900,
                    marginBottom: 0,
                  }}
                >
                  Experience eco-luxury living amidst untouched Himalayan forests.
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button
            style={{
              padding: "0.8rem 2rem",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              background: "#628141",
              color: "white",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              transition: "all 0.25s ease",
              marginTop: "1rem",
            }}
            onMouseEnter={() => setHoverPrimary(true)}
            onMouseLeave={() => setHoverPrimary(false)}
            onClick={() => setShowModal(true)}
          >
            Book Now <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <AuthModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};
