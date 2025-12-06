import React, { useState } from 'react';

const AuthModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact_number: "",
    address_line: "",
    state: "",
    city: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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

    try {
      const response = await fetch("http://127.0.0.1:8000/api/visitor/entries/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "TJS-API-KEYMAINAUTH",  // must match middleware
          "X-API-ID": "TJS-001"                // must match middleware
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Visitor entry saved successfully!");

        setFormData({
          name: "",
          contact_number: "",
          address_line: "",
          state: "",
          city: ""
        });
      } else {
        setMessage(data.message || "Something went wrong");
      }
    } catch (error) {
      setMessage("Network error! Please try again.");
    }

    setLoading(false);
  };

  return (
    <div style={backdrop}>
      <div style={modalBox}>
        <h2 style={title}>Sign Up</h2>

        <form style={form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            style={input}
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="contact_number"
            placeholder="Contact"
            style={input}
            value={formData.contact_number}
            onChange={handleChange}
          />

          <input
            type="text"
            name="address_line"
            placeholder="Address"
            style={input}
            value={formData.address_line}
            onChange={handleChange}
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            style={input}
            value={formData.state}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            style={input}
            value={formData.city}
            onChange={handleChange}
          />

          <button style={submitBtn} disabled={loading}>
            {loading ? "Submitting..." : "Sign Up"}
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
  borderRadius: '12px',
  padding: '2rem',
  textAlign: 'center',
  position: 'relative',
};

const title = { fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' };
const form = { display: 'flex', flexDirection: 'column', gap: '1rem' };
const input = { padding: '0.75rem', borderRadius: '8px', border: '1px solid #ccc' };
const submitBtn = {
  background: '#14532d',
  color: 'white',
  padding: '0.75rem',
  borderRadius: '8px',
  fontWeight: 600,
  cursor: 'pointer',
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
