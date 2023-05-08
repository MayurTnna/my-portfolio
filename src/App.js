import "./App.css";
import "./assets/scss/main.scss";
import IntroBanner from "./components/IntroBanner";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <IntroBanner />
      <Skills />
    </div>
  );
}

export default App;
