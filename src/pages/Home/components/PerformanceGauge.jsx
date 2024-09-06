import React from "react";

export const PerformanceGauge = ({ progress }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-gray-200 rounded-lg flex items-center justify-center relative w-32 lg:w-52 h-52">
      <p className="absolute bottom-4 text-lg">Average</p>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        className="absolute"
      >
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="rgba(128, 0, 128, 0.2)"
          strokeWidth="15"
          fill="none"
          className="dark:stroke-gray-700"
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
          className="dark:stroke-indigo-400"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
        >
          {progress > 0 && progress + "%"}
        </text>
      </svg>
      {progress === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="animate-spin h-12 w-12 text-purple-600 dark:text-purple-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 016-7.742V6a4 4 0 00-4 4H4z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};
