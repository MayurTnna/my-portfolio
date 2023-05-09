import "./App.css";
import "./assets/scss/main.scss";
import IntroBanner from "./components/IntroBanner";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <IntroBanner />
      <Skills />
      <Projects />
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
