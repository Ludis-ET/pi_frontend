import { useContext } from "react";
import { Four04 } from "../../pages";
import { Calendar } from "../RightBar/Calendar";
import { StudentContext } from "../../context";
import "../../components/css/Scroll.css"


export const Attedance = () => {
  const { student } = useContext(StudentContext);
  return (
    <div>
      <div className="lg:hidden overflow-y-scroll h-full">
        <h1 className="text-black dark:text-white w-full justify-center items-center px-4 text-xl text-bold">{student && student.full_name} Attendance</h1>
        <Calendar />
      </div>
      <div className="hidden lg:block">
        <Four04 />
      </div>
    </div>
  );
};
