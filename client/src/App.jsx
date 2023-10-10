import "./App.css";
import { Card } from "./component/Card";
import { useGlobalContext } from "./contextAPI/context";
import { MdClear } from "react-icons/md";
function App() {
  const { setInput, input } = useGlobalContext();
  return (
    <div className="flex flex-col items-center p-5 w-screen min-h-screen ">
      <div className=" flex flex-col w-full items-center mt-16">
        <h1 className="text-[3rem] font-semibold text-sky-400">เที่ยวไหนดี</h1>
        <div className="relative mt-4 w-[55%]">
          <input
            className=" border-[0.5px] w-full border-gray-100 rounded-md  h-[40px] pl-4 text-[20px] focus:outline-none "
            placeholder="ค้นหาที่เที่ยว"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          {input !== "" && (
            <MdClear
              className="absolute top-[10px] right-2 text-[1.5rem] font-bold cursor-pointer"
              onClick={() => setInput("")}
            />
          )}
        </div>

        <h1 className="w-[55%] mt-4 text-gray-400 border-b-[1px] border-b-gray-400 text-center">
          หาที่เที่ยวแล้วไปกัน...
        </h1>
      </div>
      <Card />
    </div>
  );
}

export default App;
