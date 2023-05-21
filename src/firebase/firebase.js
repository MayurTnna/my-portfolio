import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCZLWSfOLy8lMVywu12XUAIqwN0l7UKP5U",
  authDomain: "my-portfolio-40b72.firebaseapp.com",
  projectId: "my-portfolio-40b72",
  storageBucket: "my-portfolio-40b72.appspot.com",
  messagingSenderId: "795771940625",
  appId: "1:795771940625:web:381e2167fb50a907f466b0",
  databaseURL: "https://my-portfolio-40b72-default-rtdb.firebaseio.com/",

};

const app = initializeApp(firebaseConfig);
const fireDb = getDatabase(app);

export { fireDb };