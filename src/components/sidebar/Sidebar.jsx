import "./style.scss";
import PROFILEIMG from "../../assets/profile-img.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

function Sidebar(){
    return(
        <div className="sider-main">
            <div className="sider-div">
                <div className="name-div">
                    <h3>Muhammad Yasir</h3>
                    <p>Developer</p>
                </div>
                <div>
                    <img src={PROFILEIMG} alt="" />
                </div>
                <div className="sider-footer">
                    <p>optimisticyasir@outlook.com</p>
                    <p>Karachi, Pakistan</p>
                    <span>© 2024 Yasir. All Rights Reserved</span>
                    <ul className="icon-list">
                        <li><FaGithub /></li>
                        <li><FaLinkedinIn /></li>
                        <li><FaFacebookF /></li>
                        <li><FaXTwitter /></li>
                        <li><FaInstagram /></li>
                    </ul>
                    <button><MdOutlineMailOutline /> HIRE ME!</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;