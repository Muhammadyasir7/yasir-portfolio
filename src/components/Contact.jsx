import { MdOutlineMailOutline } from "react-icons/md";
import ContactForm from "./react-hook-form";

function Contact() {
  return (
    <div className="my-10">
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
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <label htmlFor="input">full Name</label>
          <input type="text" maxLength={50} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="input">Email</label>
          <input type="email" maxLength={50} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="input">Phone</label>
          <input type="email" maxLength={50} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="input">Subject</label>
          <input type="email" maxLength={50} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
