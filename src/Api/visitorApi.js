// src/api/visitorApi.js
const API_BASE = process.env.REACT_APP_API_BASE || '/api'; // e.g. /api in production
const API_URL = `${API_BASE.replace(/\/$/, '')}/visitor/entries/`; // ensures single slash
const API_KEY = process.env.REACT_APP_X_API_KEY;
const API_ID = process.env.REACT_APP_X_API_ID;

export const createVisitor = async (visitorData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
        "X-API-ID": API_ID
      },
      body: JSON.stringify(visitorData),
    });

    const data = await response.json();

    return {
      ok: response.ok,
      data,
    };
  } catch (error) {
    return {
      ok: false,
      error: "Network error",
    };
  }
};
