import { PerformanceGauge } from "./PerformanceGauge";

export const Top = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex gap-2">
        <PerformanceGauge progress={0} />
        <div className="bg-gray-300 dark:text-[#333] p-4 flex flex-col gap-4 justify-center items-center rounded-lg w-56 h-40">
          <p>Rank</p>
          <b className="text-2xl">
            1<sup>st</sup> / 300
          </b>
        </div>
        <div className="bg-gray-300 text-2xl font-bold dark:text-[#333] p-4 flex flex-col gap-4 justify-center items-center rounded-lg w-56 h-[100]">
          2019 E.C
        </div>
      </div>
    </div>
  );
};
