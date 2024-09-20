import { useContext } from "react";
import { PerformanceGauge } from "./PerformanceGauge";
import { StudentContext } from "../../../context";

export const Top = () => {
  const { student } = useContext(StudentContext);

  function getOrdinalSuffix(num) {
    switch (num) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
  console.log(student);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex gap-2">
        <PerformanceGauge progress={student ? student.average : 0} />
        <div className="bg-gray-300 dark:text-[#333] p-4 flex flex-col gap-4 justify-center items-center rounded-lg w-32 lg:w-56 h-40">
          <p>Rank</p>
          <b className="lg:text-2xl flex justify-center items-center">
            {student && `${student.rank}${getOrdinalSuffix(student.rank)} / ${student.count}`}
          </b>
        </div>
        <div className="bg-gray-300 lg:text-2xl font-bold dark:text-[#333] p-4 flex flex-col gap-4 justify-center items-center rounded-lg w-30 lg:w-56 h-[100]">
          <p className="font-light">Total</p>
          <b className="flex gap-1">
            {" "}
            <p>{student && student.total} marks</p>
          </b>
        </div>
      </div>
    </div>
  );
};
