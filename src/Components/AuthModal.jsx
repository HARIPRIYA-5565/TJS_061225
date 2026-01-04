import React, { useState, useEffect, useRef } from "react";

const appId = process.env.REACT_APP_X_API_ID;
const appKey = process.env.REACT_APP_X_API_KEY;

const API_BASE = process.env.REACT_APP_API_BASE || "/api";
const endpoint = `${API_BASE.replace(/\/$/, "")}/visitor/entries/`;

const AuthModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact_number: "",
    address_line: "",
    age: "",
    state: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [hoverCTA, setHoverCTA] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // FIRST TIME -> SHOW IMMEDIATELY
  const [open, setOpen] = useState(true);

  // Track if modal was closed once
  const closedOnceRef = useRef(false);

  // 📌 AFTER FIRST CLOSE -> SHOW AGAIN AFTER 20 SECONDS
  useEffect(() => {
    if (!open && !closedOnceRef.current) {
      closedOnceRef.current = true;
      const timer = setTimeout(() => {
        setOpen(true); // reopen after 20 seconds
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [open]);

  // 📌 SECOND CLOSE -> DO NOT SHOW AGAIN
  const handleClose = () => {
    if (closedOnceRef.current) {
      setOpen(false); // stop showing forever (until reload)
      return;
    }
    setOpen(false);
  };

  // ❌ If closed, don't render
  if (!open) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!formData.contact_number) {
      setMessage("Please enter contact number.");
      setLoading(false);
      return;
    }
    if (!/^\d+$/.test(formData.contact_number)) {
      setMessage("Contact number must contain only numbers.");
      setLoading(false);
      return;
    }
    if (formData.contact_number.length < 10) {
      setMessage("Please enter 10 digits.");
      setLoading(false);
      return;
    }
    if (!formData.age || !/^\d+$/.test(formData.age)) {
      setMessage("Please enter a valid age.");
      setLoading(false);
      return;
    }

    const runtime =
      typeof window !== "undefined" && window.__TJS_RUNTIME
        ? window.__TJS_RUNTIME
        : {};
    const realAppId = appId || runtime.API_ID || "";
    const realAppKey = appKey || runtime.API_KEY || "";

    if (!realAppId || !realAppKey) {
      setMessage("Missing API credentials. Contact admin.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": realAppKey,
          "X-API-ID": realAppId,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setMessage("Visitor entry saved successfully!");
        setFormData({
          name: "",
          contact_number: "",
          address_line: "",
          age: "",
          state: "",
          city: "",
        });
      } else {
        setMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      setMessage("Network error! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (name) => ({
    ...baseInput,
    borderColor: focusedField === name ? "#628141" : "#ccc",
    boxShadow:
      focusedField === name ? "0 0 0 2px #aad194ff" : "none",
    outline: "none",
  });

  return (
    <div style={bottomWrapper}>
      <div style={modalBox}>
        <h2 style={title}>Send Request</h2>

        <form style={form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            style={inputStyle("name")}
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
          />

          <input
            type="text"
            name="contact_number"
            placeholder="Contact"
            maxLength="10"
            value={formData.contact_number}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "");
              setFormData({ ...formData, contact_number: val });
            }}
            style={inputStyle("contact_number")}
            onFocus={() => setFocusedField("contact_number")}
            onBlur={() => setFocusedField(null)}
          />

          <input
            type="text"
            name="address_line"
            placeholder="Address"
            style={inputStyle("address_line")}
            value={formData.address_line}
            onChange={handleChange}
            onFocus={() => setFocusedField("address_line")}
            onBlur={() => setFocusedField(null)}
          />

          <input
            type="text"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, "");
              setFormData({ ...formData, age: val });
            }}
            style={inputStyle("age")}
            onFocus={() => setFocusedField("age")}
            onBlur={() => setFocusedField(null)}
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            style={inputStyle("state")}
            value={formData.state}
            onChange={handleChange}
            onFocus={() => setFocusedField("state")}
            onBlur={() => setFocusedField(null)}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            style={inputStyle("city")}
            value={formData.city}
            onChange={handleChange}
            onFocus={() => setFocusedField("city")}
            onBlur={() => setFocusedField(null)}
          />

          <button
            style={{
              ...submitBtnBase,
              background: hoverCTA
                ? "linear-gradient(135deg, #628120, #628120)"
                : "linear-gradient(135deg, #628141, #628141)",
              boxShadow: hoverCTA
                ? "0 10px 25px #628141"
                : "0 6px 18px rgba(0,0,0,0.18)",
              transform: hoverCTA ? "translateY(-1px)" : "translateY(0)",
              opacity: loading ? 0.8 : 1,
              cursor: loading ? "wait" : "pointer",
            }}
            disabled={loading}
            onMouseEnter={() => setHoverCTA(true)}
            onMouseLeave={() => setHoverCTA(false)}
          >
            {loading ? "Submitting..." : "Send Request"}
          </button>
        </form>

        {message && (
          <p style={{ marginTop: "1rem", color: "#14532d" }}>{message}</p>
        )}

        {/* CLOSE BUTTON WITH NEW LOGIC */}
        <button onClick={handleClose} style={closeBtn} type="button">
          ✕
        </button>
      </div>
    </div>
  );
};

/* ------------------ STYLES ------------------ */

const bottomWrapper = {
  position: "fixed",
  right: "16px",
  bottom: "16px",
  zIndex: 9999,
};

const modalBox = {
  width: "320px",
  background: "white",
  borderRadius: "16px",
  padding: "1.5rem",
  textAlign: "center",
  position: "relative",
  boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
};

const title = {
  fontSize: "1.2rem",
  fontWeight: 700,
  marginBottom: "0.75rem",
  color: "#628141",
};

const form = { display: "flex", flexDirection: "column", gap: "0.75rem" };

const baseInput = {
  padding: "0.65rem",
  borderRadius: "10px",
  border: "1px solid #ccc",
  fontSize: "0.9rem",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
};

const submitBtnBase = {
  color: "white",
  padding: "0.75rem",
  borderRadius: "999px",
  fontWeight: 600,
  border: "none",
  transition: "all 0.25s ease",
};

const closeBtn = {
  position: "absolute",
  top: "8px",
  right: "8px",
  border: "none",
  fontSize: "1rem",
  background: "transparent",
  cursor: "pointer",
};

export default AuthModal;
