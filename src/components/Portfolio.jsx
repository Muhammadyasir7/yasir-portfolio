import { FaGripVertical } from "react-icons/fa";

function Portfolio() {
  return (
    <div>
        <span className="flex items-center gap-1 border rounded-full w-fit px-3 py-1 span-sec">
        <FaGripVertical /> PORTFOLIO
      </span>
      <div className="my-7">
        <h1 className="text-4xl leading-tight">
          My
          <span className="color-prim"> Pricing</span>
        </h1>
      </div>
    </div>
  )
}

export default Portfolio;