import "./style.scss"
import { FaBars } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { IoMdPerson } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { TbBriefcaseFilled } from "react-icons/tb";
import { RiShapesFill } from "react-icons/ri";
import { FaGripVertical } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { SiMinutemailer } from "react-icons/si";


function Navbar(){
    return (
      <div className="border rounded-full nav-list">
        <ul className="flex flex-col justify-between gap-4 px-2 py-4">

        <a href=""><li><TiHome /></li></a>
        <a href=""><li><IoMdPerson /></li></a>
        <a href=""><li><TbBriefcaseFilled /></li></a>
        <a href=""><li><FaBarsStaggered /></li></a>
        <a href=""><li><RiShapesFill /></li></a>
        <a href=""><li><FaGripVertical /></li></a>
        <a href=""><li><BiDollar /></li></a>
        <a href=""><li><SiMinutemailer /></li></a>

        </ul>
      </div>
    )
}

export default Navbar;