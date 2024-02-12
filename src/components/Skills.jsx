import { RiShapesFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { SiAntdesign } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

import "./style.scss"

function Skills() {
  return (
    <div>
        <div className="my-20">
            <span className="flex items-center gap-1 border rounded-full w-fit px-3 py-1 span-sec">
               <RiShapesFill /> SKILLS
            </span>
            <div className="my-7">
                <h1 className="text-4xl leading-tight">My 
                <span className="color-prim"> Advantages</span></h1>
            </div>
            <div className="flex flex-wrap">
                <div className="icon-size">
                    <div>
                        <FaReact />
                        <span className="percent">80% </span>
                    </div>
                    <p>React</p>
                </div>
                <div className="icon-size">
                    <div>
                        <IoLogoJavascript />
                        <span className="percent">80% </span>

                    </div>
                    <p>JavaScript</p>
                </div>
                <div className="icon-size">
                    <div>
                        <FaBootstrap />
                        <span className="percent">80% </span>
                    </div>
                    <p>Bootstrap</p>
                </div>
                <div className="icon-size">
                    <div>
                        <IoLogoGithub />
                        <span className="percent">80% </span>
                    </div>
                    <p>GitHub</p>
                </div>
                <div className="icon-size">
                    <div>
                        <SiAntdesign     />
                        <span className="percent">80% </span>
                    </div>
                    <p>Ant Design</p>
                </div>
                <div className="icon-size">
                    <div>
                    <FaDocker />
                        <span className="percent">80% </span>
                    </div>
                    <p>Docker</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills