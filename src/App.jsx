import VIDEO from "../src/assets/bg-video.mp4"
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.scss"
function App(){
  return(
    <div>
      <video  autoPlay muted loop className="bg-video">
        <source src={VIDEO} />
      </video>
      <div className="h-full flex justify-between ">
      <aside className="">
          <Sidebar className="" />
        </aside>
        <div>
            <Home />
        </div>
        <div className="relative">
          <Navbar />
        </div>
      </div>
    </div>
  )
}

export default App;