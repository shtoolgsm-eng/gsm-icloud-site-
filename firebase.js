// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const app = initializeApp({
  projectId: "gsm-icloud-site",
  appId: "1:722465166110:web:2924065072d54e3cf06f0f"
});

export const db = getFirestore(app);
