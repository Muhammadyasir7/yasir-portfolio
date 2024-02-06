import { TiHome } from "react-icons/ti";
import "./style.scss"

function Home() {
  return (
    <div className="home-sec">
        <div className="my-10 span-sec">
            <span className="flex items-center gap-1 border rounded-full w-fit px-3 py-1">
               <TiHome /> INTRODUCE
            </span>
        </div>
        <div className="my-10">
            <h1 className="text-6xl leading-tight">Say Hi from <span className="color-prim">Yasir</span>,<br /> Web Developer,<br /> App Developer </h1>
        </div>
        <p className="text-xs color-grey">I design and code beautifully simple things and I love what I do. <br />Just simple like that</p>
        <div className="my-10 flex gap-4">
            <div className="flex flex-col w-fit">
                <span className="color-prim text-5xl">1+</span>
                <span className="color-grey span-sec my-6">YEARS OF EXPERIENCE</span>
            </div>
            <div>
                <span className="color-prim text-5xl">10+</span>
                <p className="color-grey span-sec my-5">PROJECTS COMPLETED OF<br /> DIFFERENT TYPES</p>
            </div>
        </div>
    </div>
  )
}

export default Home;