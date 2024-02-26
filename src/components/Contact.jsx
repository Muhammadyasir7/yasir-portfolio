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
      <div className="grid grid-cols-2 gap-7 my-10">
        <div className="flex flex-col">
          <label htmlFor="input" className="input-head">full Name</label>
          <input type="text" maxLength={30} placeholder="Your Full Name" className="input-style" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="input" className="input-head">Email</label>
          <input type="email" maxLength={30} placeholder="Your Email Address" className="input-style" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="input" className="input-head">Phone</label>
          <input type="number" maxLength={50} placeholder="Your mob num" className="input-style" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="input" className="input-head">Subject</label>
          <input type="select" maxLength={50} className="input-style" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="input" className="input-head">Your Budget</label>
          <input type="number" placeholder="0" maxLength={50} className="input-style" />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="textarea" className="input-head">Message</label>
        <textarea className="txt-area resize-none" placeholder="Write your messages here" name="" id="" cols="30" rows="5"></textarea>
      </div>
      <button className="btn-message">send message</button>
    </div>
  );
}

export default Contact;
