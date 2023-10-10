import { useState } from "react";
import { ClipBoard } from "./ClipBoard";
import { useGlobalContext } from "../contextAPI/context";

export const Location = ({ data }) => {
  const { setInput, input } = useGlobalContext();
  const [selectPic, setSelectPic] = useState(0);
  const { title, url, description, photos, tags } = data;
  return (
    <div className="relative flex w-full mt-16 justify-center gap-6">
      <img
        src={photos[selectPic]}
        className="w-[350px] h-[250px] rounded-2xl object-fill transition-all duration-500"
      />
      <div className="flex flex-col gap-1 w-[80%]">
        <a href={url} target="blank" className="text-[1.5rem] font-medium">
          {title}
        </a>
        <p className="text-[1rem] text-gray-500 ">{`${description.substring(
          0,
          100
        )}...`}</p>
        <a
          href={url}
          target="blank"
          className="text-[1rem] text-sky-600 underline"
        >
          อ่านต่อ
        </a>
        <div className="flex gap-1 text-[1rem] text-gray-500">
          <h1 className="mr-2">หมวด</h1>
          {tags.map((tag, index) => {
            return (
              <div className="flex gap-2">
                <p1 className={`${index !== tags.length - 1 && "hidden"}`}>
                  และ
                </p1>
                <p1
                  className="underline cursor-pointer"
                  onClick={() => setInput(input + "  " + tag)}
                >
                  {tag}
                </p1>
              </div>
            );
          })}
        </div>
        <div className="flex mt-5 gap-5">
          {photos.map((img, index) => {
            return (
              index >= 0 &&
              index < 4 && (
                <img
                  src={img}
                  className="w-[80px] h-[80px] object-fill rounded-xl cursor-pointer hover:border-[1px] hover:opacity-60"
                  onClick={() => setSelectPic(index)}
                />
              )
            );
          })}
        </div>
      </div>
      <ClipBoard url={url} />
    </div>
  );
};
