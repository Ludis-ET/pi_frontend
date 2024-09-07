import { useState } from "react";

export const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const getCalendarDays = () => {
    const daysInPrevMonth = daysInMonth(currentMonth - 1, currentYear);
    const daysInCurrentMonth = daysInMonth(currentMonth, currentYear);
    const totalCalendarCells = firstDayOfMonth + daysInCurrentMonth;
    const calendarDays = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarDays.push(
        <span
          key={`prev-${i}`}
          className="px-1 text-gray-400 w-14 flex justify-center items-center"
        >
          {daysInPrevMonth - firstDayOfMonth + i + 1}
        </span>
      );
    }

    for (let i = 1; i <= daysInCurrentMonth; i++) {
      const isToday =
        i === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();
      calendarDays.push(
        <span
          key={`current-${i}`}
          className={`px-1 w-14 flex justify-center items-center border ${
            isToday
              ? "bg-green-500 text-white border-green-500 rounded-2xl shadow-md"
              : "hover:border-green-500 hover:text-green-500 cursor-pointer"
          }`}
        >
          {i}
        </span>
      );
    }

    return calendarDays;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="flex items-center justify-center px-2 mt-12">
      <div className="w-full max-w-lg p-6 mx-auto bg-white rounded-2xl shadow-xl flex flex-col">
        <div className="flex justify-between pb-4">
          <div className="-rotate-90 cursor-pointer" onClick={prevMonth}>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.001 6L6.00098 1L1.00098 6"
                stroke="black"
                strokeOpacity="0.4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="uppercase text-sm font-semibold text-gray-600">
            {monthNames[currentMonth]} - {currentYear}
          </span>
          <div className="rotate-90 cursor-pointer" onClick={nextMonth}>
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.001 6L6.00098 1L1.00098 6"
                stroke="black"
                strokeOpacity="0.4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="flex justify-between font-medium uppercase text-xs pt-4 pb-2 border-t">
          {dayNames.map((day) => (
            <span
              key={day}
              className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md"
            >
              {day}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-2 text-center">
          {getCalendarDays()}
        </div>
      </div>
    </div>
  );
};
