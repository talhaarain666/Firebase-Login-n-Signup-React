import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqp9AIPW3T8qyD80H5R-TgSdZdZhEO0cU",
  authDomain: "fir-signup-n-login-react.firebaseapp.com",
  projectId: "fir-signup-n-login-react",
  storageBucket: "fir-signup-n-login-react.appspot.com",
  messagingSenderId: "266975074905",
  appId: "1:266975074905:web:243521f09bfc809ed4ef48",
  measurementId: "G-0HKC7QH3F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;