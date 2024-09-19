import { useContext } from "react";
import { PerformanceGauge } from "./PerformanceGauge";
import { StudentContext } from "../../../context";

export const Top = () => {
  const { student } = useContext(StudentContext);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex gap-2">
        <PerformanceGauge progress={80} />
        <div className="bg-gray-300 dark:text-[#333] p-4 flex flex-col gap-4 justify-center items-center rounded-lg w-32 lg:w-56 h-40">
          <p>Rank</p>
          <b className="lg:text-2xl flex justify-center items-center">
            {student && student.rank}
          </b>
        </div>
        <div className="bg-gray-300 lg:text-2xl font-bold dark:text-[#333] p-4 flex flex-col gap-4 justify-center items-center rounded-lg w-30 lg:w-56 h-[100]">
          <p className="font-light">Total</p>
          <b className="flex gap-1">
            {" "}
            <p>1000 </p>/<p> 1100</p>
          </b>
        </div>
      </div>
    </div>
  );
};
