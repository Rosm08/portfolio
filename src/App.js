import './App.css';
import Header from "./components/header"
import AboutMe from "./components/aboutMe"
import Projects from "./components/projects"
import Skills from "./components/skills"
import Education from "./components/education"
import Footer from "./components/footer"

function App() {
  return (
    <div className="App">
     <Header/>
     <AboutMe/>
     <Projects/>
     <Skills/>
     <Education/>
     <Footer/>
    </div>
  );
}

export default App;
