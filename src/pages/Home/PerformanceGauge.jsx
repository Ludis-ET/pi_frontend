import React from "react";

export const PerformanceGauge = ({ progress }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-gray-200 rounded-lg flex items-center justify-center">
      <svg
        className="transform"
        width="200"
        height="200"
        viewBox="0 0 200 200"
      >
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="rgba(128, 0, 128, 0.2)"
          strokeWidth="15"
          fill="none"
          className="dark:stroke-gray-700" // Light purple for light mode, dark gray for dark mode
        />
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="purple"
          strokeWidth="15"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          fill="none"
          strokeLinecap="round"
          transition="stroke-dashoffset 0.35s"
          className="dark:stroke-indigo-400" // Purple for light mode, lighter purple for dark mode
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          stroke="#51c5cf"
          strokeWidth="1px"
          dy=".3em"
          className="text-2xl font-semibold text-gray-800 dark:text-gray-200" // Text color adapts to dark mode
        >
          {progress}%
        </text>
      </svg>
    </div>
  );
};
