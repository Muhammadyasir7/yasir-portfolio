import VIDEO from "../src/assets/bg-video.mp4"
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import "./App.scss"
import Resume from "./components/Resume";
import Speciallization from "./components/Speciallization";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
function App(){
  return(
    <div>
      <video  autoPlay muted loop className="bg-video">
        <source src={VIDEO} />
      </video>
      <div className="h-full flex justify-between ">
      <aside className="fixed">
          <Sidebar className="" />
        </aside>
        <div className="width-half">
            <Home />
            <About />
            <Resume />
            <Speciallization />
            <Skills />
            <Portfolio />
            <Pricing />
            {/* <Contact /> */}

        </div>
        <div className="navbar">
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default App;