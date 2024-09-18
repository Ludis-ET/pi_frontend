import { Calendar } from "./Calendar";
import { Top } from "./Top";
import Logo from "../../assets/logo.png";

export const RightBar = () => {
  return (
    <div className="bg-[#af84ff] hidden lg:flex w-1/4 flex-col items-center gap-8">
      <Top />
      <Calendar />
      <img src={Logo} className="w-1/2" alt="" />
    </div>
  );
};
