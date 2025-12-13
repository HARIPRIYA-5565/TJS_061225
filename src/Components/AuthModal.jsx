

import React, { useState } from 'react';

const appId = process.env.REACT_APP_X_API_ID;
const appKey = process.env.REACT_APP_X_API_KEY;

const API_BASE = process.env.REACT_APP_API_BASE || '/api';
const endpoint = `${API_BASE.replace(/\/$/, '')}/visitor/entries/`;

const AuthModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact_number: "",
    address_line: "",
    age:"",
    state: "",
    city: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [hoverCTA, setHoverCTA] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  if (!open) return null;

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

// Handle form submit
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  // ---- VALIDATIONS (unchanged) ----
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
  if (!formData.age) {
    setMessage("Please enter age.");
    setLoading(false);
    return;
  }
  if (!/^\d+$/.test(formData.age)) {
    setMessage("Age must be a valid number.");
    setLoading(false);
    return;
  }
  // ---- END VALIDATIONS ----

  // runtime-safe headers (fall back to window.__TJS_RUNTIME if env is empty)
  const runtime = (typeof window !== "undefined" && window.__TJS_RUNTIME) ? window.__TJS_RUNTIME : {};
  const realAppId = appId || runtime.API_ID || "";
  const realAppKey = appKey || runtime.API_KEY || "";

  // DEBUG: log what we're sending (will show in browser console)
  console.log("DEBUG: submit visitor", {
    endpoint,
    headers: { "X-API-ID": realAppId, "X-API-KEY": realAppKey },
    body: formData
  });

  if (!realAppId || !realAppKey) {
    // helpful error shown to user + console
    console.error("Missing API_ID or API_KEY (appId/appKey)", { appId, appKey, runtime });
    setMessage("Missing API credentials in the frontend. Contact admin or rebuild with correct env.");
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
      body: JSON.stringify(formData)
    });

    const data = await response.json().catch(()=>({}));

    if (response.ok) {
      setMessage("Visitor entry saved successfully!");
      setFormData({
        name: "",
        contact_number: "",
        address_line: "",
        age: "",
        state: "",
        city: ""
      });
    } else {
      // show backend message if present
      setMessage(data.message || `Error ${response.status}: ${response.statusText || "Something went wrong"}`);
      console.warn("Visitor API responded:", response.status, data);
    }
  } catch (error) {
    console.error("Network error while submitting visitor:", error);
    setMessage("Network error! Please try again.");
  } finally {
    setLoading(false);
  }
};
  // helper to style each input with pink focus ring
  const inputStyle = (name) => ({
    ...baseInput,
    borderColor: focusedField === name ? "#628141" : "#ccc",
    boxShadow:
      focusedField === name
        ? "0 0 0 2px #aad194ff"
        : "none",
    outline: "none",
  });

  return (
    <div style={backdrop}>
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
  placeholder="Contact "
  maxLength="10"
  value={formData.contact_number}
  onChange={(e) => {
    const val = e.target.value.replace(/\D/g, ""); // numbers only
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
    const val = e.target.value.replace(/\D/g, ""); // allow only digits
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

        <button onClick={onClose} style={closeBtn}>✕</button>
      </div>
    </div>
  );
};

// Styles
const backdrop = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.55)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
};

const modalBox = {
  width: '90%',
  maxWidth: '420px',
  background: 'white',
  borderRadius: '16px',
  padding: '2rem',
  textAlign: 'center',
  position: 'relative',
};

const title = { fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color:"#628141"};
const form = { display: 'flex', flexDirection: 'column', gap: '1rem' };

const baseInput = {
  padding: '0.75rem',
  borderRadius: '10px',
  border: '1px solid #ccc',
  fontSize: '0.9rem',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
};

const submitBtnBase = {
  color: 'white',
  padding: '0.75rem',
  borderRadius: '999px',
  fontWeight: 600,
  border: 'none',
  transition: 'all 0.25s ease',
};

const closeBtn = {
  position: 'absolute',
  top: '12px',
  right: '12px',
  border: 'none',
  fontSize: '1.2rem',
  background: 'transparent',
  cursor: 'pointer',
};

export default AuthModal;
