<!-- firebase.js -->
<script type="module">
  // Import Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

  // 🔑 Configuration de ton projet Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyAUzLQK-ueXOslGncKrmqAXpwFtisMdyGI",
    authDomain: "recompense-du-jour.firebaseapp.com",
    projectId: "recompense-du-jour",
    storageBucket: "recompense-du-jour.firebasestorage.app",
    messagingSenderId: "67482964719",
    appId: "1:67482964719:web:0c735a559493b1d4ae011a"
  };

  // 🚀 Initialiser Firebase
  const app = initializeApp(firebaseConfig);

  // 📦 Initialiser Firestore
  const db = getFirestore(app);

  // Exporter la base de données pour admin.html et eleve.html
  export { db };
</script>
