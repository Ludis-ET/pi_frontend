import "../../components/css/Scroll.css"
import { Top } from "./Top";

export const Home = () => {
  return (
    <div className="text-black dark:text-white py-4 overflow-y-scroll custom-scrollbar">
      <Top />
    </div>
  );
};