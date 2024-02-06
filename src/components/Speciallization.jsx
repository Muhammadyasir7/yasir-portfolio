import { FaBarsStaggered } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaBolt } from "react-icons/fa6";

import "./style.scss"

function Speciallization() {
  return (
    <div>
        <div className="my-20 w-3/4">
            <span className="flex items-center gap-1 border rounded-full w-fit px-3 py-1 span-sec">
               <FaBarsStaggered /> SERVICES
            </span>
            <div className="my-7">
                <h1 className="text-4xl leading-tight">My 
                <span className="color-prim"> Specializations</span></h1>
            </div>
          <div>
            <ul className="">
              <li className="border rounded-2xl p-8">
                <h1 className="flex justify-between items-center">Web Development <span className="color-prim text-3xl"><FaCode /></span></h1>
                <p className="span-sec color-grey">I build website with HTML, CSS, JavaScript, React</p>
                <p className="mt-5 span-sec">5 PROJECTS</p>
              </li>
              <li className="border rounded-2xl p-8 my-3">
                <h1 className="flex justify-between items-center">Web Development <span className="color-prim text-2xl"><FaBolt /></span></h1>
                <p className="span-sec color-grey">I build website with HTML, CSS, JavaScript, React</p>
                <p className="mt-5 span-sec">5 PROJECTS</p>
              </li>
              <li className="border rounded-2xl p-8">
                <h1 className="flex justify-between items-center">Web Development <span className="color-prim text-2xl"><FaBarsStaggered /></span></h1>
                <p className="span-sec color-grey">I build website with HTML, CSS, JavaScript, React</p>
                <p className="mt-5 span-sec">5 PROJECTS</p>

              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Speciallization