import { HiLink } from "react-icons/hi";
import { useState, useEffect } from "react";
export const ClipBoard = ({ url }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 1500);

    return clearTimeout();
  }, [alert]);
  return (
    <div className="absolute flex gap-2 w-[50px] flex-col h-[80px] items-center z-50 right-20 bottom-5 text-[2rem]">
      <HiLink
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(url);
        }}
        className=" cursor-pointer hover:text-gray-500"
      />
      {alert && (
        <h1 className="text-[0.7rem] opacity-75 bg-sky-300 p-1 rounded-xl ">
          Coppied!
        </h1>
      )}
    </div>
  );
};
