import "../../components/css/Scroll.css";
import { ResultsTable } from "./components/ResultsTable";
import { Top } from "./components/Top";

export const Home = () => {
  return (
    <div className="text-black dark:text-white py-4 overflow-y-scroll flex flex-col gap-12 custom-scrollbar">
      <Top />
      <ResultsTable />
    </div>
  );
};
