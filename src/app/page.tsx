import Tools from "./components/Tools"
import Designer from "./components/Designer"

export default function Home() {
  return (
    <div className="min-h-screen flex justify-between bg-slate-700">
      <div className="py-4 px-4 lg:w-1/5">
        <Tools />
      </div>
      <div className="py-4 px-4 lg:w-4/5">
        <Designer />
      </div>
    </div>
  )
}
