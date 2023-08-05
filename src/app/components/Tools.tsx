import { BiText, BiFontColor } from "react-icons/bi"
const Tools = () => {
  return (
    <div className="bg-slate-800 w-full min-h-full p-4">
      <div>
        <h1 className="text-white">เครื่องมือพื้นฐาน</h1>
      </div>
      <div className="mt-2 bg-slate-500 py-2 px-2 rounded-full flex gap-2">
        <button className="bg-slate-800 p-2 rounded-full text-white">
          <BiText />
        </button>
        <button className="bg-slate-800 p-2 rounded-full text-white">
          <BiFontColor />
        </button>
      </div>
    </div>
  )
}

export default Tools
