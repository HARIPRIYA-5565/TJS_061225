// EventModal.jsx
import React from "react";

export const EventModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      {/* Backdrop + image modal */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(4px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "90%",
            maxWidth: "520px",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
            backgroundImage: 'url("/Images/event_DjNight.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "80vh",
          }}
        >
          {/* overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.25))",
            }}
          />

          {/* top-right cross button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "12px",
              right: "16px",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              border: "none",
              background: "rgba(0,0,0,0.65)",
              color: "white",
              fontSize: "18px",
              lineHeight: "32px",
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </div>
      </div>

     <div
  style={{
    position: "fixed",
    insetInline: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    zIndex: 2000, // Put ABOVE blur layer
  }}
>
  <a
  className="btn-main"
  href="https://wa.me/919015483181?text=Hi,%20I%20am%20interested%20in%20the%20Shimla%20New%20Year%202026"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    margin: "1rem auto",
    padding: "0.7rem 1.8rem",
    borderRadius: "9999px",
    background: "#628141",
    color: "white",
    fontWeight: 600,
    fontSize: "0.95rem",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    cursor: "pointer",
  }}
>

  <span>Contact Us</span>
</a>
</div> 
    </>
  );
};
