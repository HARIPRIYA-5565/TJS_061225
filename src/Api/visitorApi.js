// src/api/visitorApi.js

const API_URL = "http://127.0.0.1:8000/api/visitor/entries/";
const API_KEY = "TJS-API-KEYMAINAUTH";   // your allowed key
const API_ID = "TJS-001"; 

export const createVisitor = async (visitorData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "API_KEY": "TJS-API-KEYMAINAUTH",  
          "API_ID": "TJS-001"        // ⬅ IMPORTANT custom header
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
