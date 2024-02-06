import { IoMdPerson } from "react-icons/io";
import "./style.scss"

function About() {
  return (
    <div>
        <div className="span-sec">
            <span className="flex items-center gap-1 border rounded-full w-fit px-3 py-1">
               <IoMdPerson /> ABOUT
            </span>
            <div className="my-10">
            <h1 className="text-4xl leading-tight">Every great design begin with an <br /> even
            <span className="color-prim"> better story</span>,<br /></h1>
        </div>
        <p className="text-xs color-grey">
        Since beginning my journey as a software developer nearly 3 years ago, I've <br />
        done remote work for agencies, consulted for startups, and collaborated with <br />
        talented people to create digital products for both business and consumer use.<br />
        I'm quietly confident, naturally curious, and perpetually working on improving my <br />
        chopsone design problem at a time. Just simple like that</p>
        
        </div>
    </div>
  )
}

export default About