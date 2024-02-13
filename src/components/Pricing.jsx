import { BiDollar } from "react-icons/bi";

function Pricing() {
  return (
    <div>
      <span className="flex items-center gap-1 border rounded-full w-fit px-3 py-1 span-sec">
        <BiDollar /> PRICING
      </span>
      <div className="my-7">
        <h1 className="text-4xl leading-tight">
          My
          <span className="color-prim"> Pricing</span>
        </h1>
      </div>
      <div className="flex">
        <div className="border rounded-xl p-7 mr-4 border-color">
          <div className="flex justify-between">
            <h3>BASIC</h3>
            <p className="span-sec color-grey">
              Have design ready to build?
              <br />
              or small budget
            </p>
          </div>
          <div className="border-b my-8 pb-5">
            <h1 className="color-grey">
              <span className="color-prim text-4xl">$49</span> / hour
            </h1>
          </div>
          <div className="flex flex-col justify-between h-64">
            <ul className="span-sec leading-6">
              <li>Need your wireframe</li>
              <li>Design with Figma, Framer</li>
              <li>Implement with Webflow, React. WordPress.</li>
              <li>Remote/Online</li>
              <li>Work in business days, no weekend</li>
              <li>Support 6 months</li>
            </ul>
          <button className="package-btn">pick this package!</button>
          </div>
        </div>
        <div className="border rounded-xl p-7 mr-4 border-color">
          <div className="flex justify-between">
            <h3>PREMIUM</h3>
            <p className="span-sec color-grey">
              Not have any design?
              <br />
              Leave it for me
            </p>
          </div>
          <div className="border-b my-8 pb-5">
            <h1 className="color-grey">
              <span className="color-prim text-4xl">$99</span> / hour
            </h1>
          </div>
          <div className="flex flex-col justify-between h-64">
            <ul className="span-sec leading-6">
              <li>Don't need wireframe or anything</li>
              <li>Design with Figma, Framer from scratch</li>
              <li>Implement with Webflow, React. WordPress.</li>
              <li>Remote/Online</li>
              <li>Work with both weekend</li>
              <li>Work in business days, no weekend</li>
              <li>Support 12 months</li>
              <li>Your project alway be priority</li>
              <li>Customer care gifts</li>
            </ul>
          <button className="package-btn">pick this package!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
