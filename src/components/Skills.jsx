import { RiShapesFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";

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
                <div className="p-10 border">
                    <div className="flex flex-col p-10 border">
                        <FaReact />
                        80%
                    </div>
                    <p>React</p>
                </div>
                <div className="p-10 border">
                    <div className="flex flex-col p-10 border">
                        <FaReact />
                        80%
                    </div>
                    <p>React</p>
                </div>
                <div className="p-10 border">
                    <div className="flex flex-col p-10 border">
                        <FaReact />
                        80%
                    </div>
                    <p>React</p>
                </div>
                <div className="p-10 border">
                    <div className="flex flex-col p-10 border">
                        <FaReact />
                        80%
                    </div>
                    <p>React</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills