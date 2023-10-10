import { useGlobalContext } from "../contextAPI/context";
import { useEffect } from "react";
import { Location } from "./Localtion";
export const Card = () => {
  const { getData, data, input } = useGlobalContext();

  useEffect(() => {
    getData();
  }, [input]);
  return (
    <div className=" mt-2 w-[80%] pl-32 flex flex-col items-center">
      {data.map((data) => {
        return <Location data={data} />;
      })}
    </div>
  );
};
