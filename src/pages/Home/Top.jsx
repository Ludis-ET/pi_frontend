import { PerformanceGauge } from "./PerformanceGauge";

export const Top = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div>
        <PerformanceGauge progress={0} />
      </div>
      top
    </div>
  );
};
