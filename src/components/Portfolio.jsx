import { FaGripVertical } from "react-icons/fa";
import SALTNPAPER from "../assets/saltnpaper.png";
import CALCULATOR from "../assets/calculator.png";
import FIGMA from "../assets/figma.png";
import GAME from "../assets/game-clone.png";
import WEATHER from "../assets/weather-web.png"



function Portfolio() {
  return (
    <div className="my-10">
        <span className="flex items-center gap-1 border rounded-full w-fit px-3 py-1 span-sec">
        <FaGripVertical /> PORTFOLIO
      </span>
      <div className="my-7">
        <h1 className="text-4xl leading-tight">
        Featured 
          <span className="color-prim">Projects</span>
        </h1>
      </div>
      <div>
        <div>
        <figure className="">
        <img src={SALTNPAPER} alt="" />
            <figcaption className="py-5">Salt'n Paper Website</figcaption>
        </figure>
        </div>
        <div className="flex">
        <figure className="mr-3">
        <img src={CALCULATOR} className="img-size" alt="" />
            <figcaption className="py-5">JS CALCULATOR</figcaption>
        </figure>
        <figure className="">
        <img src={FIGMA} className="img-size" alt="" />
            <figcaption className="py-5">Figma to HTML</figcaption>
        </figure>
        </div>
        <div>
        <figure className="">
        <img src={GAME} alt="" />
            <figcaption className="py-5">Game Clone</figcaption>
        </figure>
        </div>
        <div>
        <figure className="">
        <img src={WEATHER} alt="" />
            <figcaption className="py-5">weather Web</figcaption>
        </figure>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;