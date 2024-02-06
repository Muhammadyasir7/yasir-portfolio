import { TbBriefcaseFilled } from "react-icons/tb";
import "./style.scss"

function Resume() {
  return (
    <div>
        <div className="my-20">
            <span className="flex items-center gap-1 border rounded-full w-fit px-3 py-1 span-sec">
               <TbBriefcaseFilled /> RESUME
            </span>
            <div className="my-10">
                <h1 className="text-4xl leading-tight">Education & 
                <span className="color-prim"> Experience</span></h1>
            </div>
          <div>
            <ul className="">
              <li className="pb-5 pl-12 border-l">
                <p className="color-grey">2024 - Present</p>
                <h2 className="pt-5">Frontend Developer - Intern</h2>
                <p className="color-grey span-sec">Saylani Foundation</p>
              </li>
              <li className="py-5 pl-12 border-l">
                <p className="color-grey">2023 - Present</p>
                <h2>Web and App Development</h2>
                <p className="color-grey span-sec">Saylani Mass IT Training Program</p>
              </li>
              <li className="py-5 pl-12 border-l">
                <p className="color-grey">2017 - 2019</p>
                <h2>Master of Public Administration</h2>
                <p className="color-grey span-sec">University of Karachi</p>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Resume