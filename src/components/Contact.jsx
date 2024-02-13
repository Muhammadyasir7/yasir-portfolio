import { MdOutlineMailOutline } from "react-icons/md";
import ContactForm from "./react-hook-form";

function Contact() {
  return (
    <div>
      <span className="flex items-center gap-1 border rounded-full w-fit px-3 py-1 span-sec">
        <MdOutlineMailOutline /> CONTACT
      </span>
      <div className="my-7">
        <h1 className="text-4xl leading-tight">
          Let's Work
          <span className="color-prim"> Together</span>
        </h1>
      </div>
      <div>
        <p>optimisticyasir@outlook.com</p>
      </div>
    </div>
  );
}

export default Contact;
