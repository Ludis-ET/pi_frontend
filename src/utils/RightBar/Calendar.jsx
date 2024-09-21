import { useContext, useEffect, useState } from "react";
import { AuthContext, StudentContext } from "../../context";

export const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const { student } = useContext(StudentContext);
  const { authTokens } = useContext(AuthContext);
  const [absentDays, setAbsentDays] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchAbsents = async () => {
      const response = await fetch(
        `${backendUrl}api/absents/?student=${student.id}`,
        {
          headers: {
            Authorization: `Bearer ${authTokens.access}`,
          },
        }
      );
      const data = await response.json();
      const absentDates = data.map((item) =>
        new Date(item.date).toDateString()
      );
      setAbsentDays(absentDates);
    };
    if (student) {
      fetchAbsents();
    }
  }, [currentMonth, currentYear, student, authTokens, backendUrl]);

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

  const handleDayClick = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    if (selectedDate > today) {
      setSelectedDate(selectedDate);
      setShowForm(true);
    }
  };

  const getCalendarDays = () => {
    const daysInPrevMonth = daysInMonth(currentMonth - 1, currentYear);
    const daysInCurrentMonth = daysInMonth(currentMonth, currentYear);
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
      const dateString = new Date(currentYear, currentMonth, i).toDateString();
      const isToday =
        i === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();
      const isAbsent = absentDays.includes(dateString);
      calendarDays.push(
        <span
          key={`current-${i}`}
          onClick={() => handleDayClick(i)}
          className={`px-1 w-14 flex justify-center items-center border ${
            isAbsent
              ? "bg-red-500 text-white border-red-500 rounded-2xl shadow-md"
              : isToday
              ? "bg-purple-500 text-white border-purple-500 rounded-2xl shadow-md"
              : "hover:border-purple-500 hover:text-purple-500 cursor-pointer"
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    setShowForm(false);
  };

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
              className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-purple-500 text-purple-500 shadow-md"
            >
              {day}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-2 text-center">
          {getCalendarDays()}
        </div>

        {showForm && (
          <div className="mt-4 p-4 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Permission Request for {selectedDate.toDateString()}
            </h3>
            <form onSubmit={handleFormSubmit}>
              <textarea
                className="w-full p-2 border rounded mb-2"
                placeholder="Please provide your reason..."
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded"
              >
                Submit
              </button>
              <button
                type="button"
                className="mt-2 w-full bg-red-500 text-white p-2 rounded"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
