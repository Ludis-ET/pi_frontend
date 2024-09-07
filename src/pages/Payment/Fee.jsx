import React, { useState } from "react";

export const Fee = () => {
  const initialPayments = [
    {
      id: 1,
      name: "John Doe",
      date: "2024-09-04",
      status: "Paid",
      type: "Tuition",
    },
    {
      id: 2,
      name: "Jane Smith",
      date: "2024-09-03",
      status: "Unpaid",
      type: "Transport",
    },
    {
      id: 3,
      name: "Alex Johnson",
      date: "2024-09-02",
      status: "Paid",
      type: "Lunch",
    },
  ];

  const [payments, setPayments] = useState(initialPayments);
  const [sortType, setSortType] = useState("");
  const [sortByTime, setSortByTime] = useState("newest");

  const handleSortTypeChange = (e) => {
    const selectedType = e.target.value;
    if (selectedType) {
      const sorted = [...initialPayments].filter(
        (payment) => payment.type === selectedType
      );
      setPayments(sorted);
    } else {
      setPayments(initialPayments);
    }
    setSortType(selectedType);
  };
  const handleSortByTimeChange = (e) => {
    const selectedTime = e.target.value;
    const sorted = [...payments].sort((a, b) =>
      selectedTime === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );
    setPayments(sorted);
    setSortByTime(selectedTime);
  };

  return (
    <div className="container mx-auto p-4 text-black ">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center dark:text-white">
          <label htmlFor="sortType" className="mr-2 font-semibold">
            Sort by Type:
          </label>
          <select
            id="sortType"
            value={sortType}
            onChange={handleSortTypeChange}
            className="border bg-transparent outline-none rounded px-2 py-1"
          >
            <option value="">All Types</option>
            <option value="Tuition">Tuition</option>
            <option value="Transport">Transport</option>
            <option value="Lunch">Lunch</option>
          </select>
        </div>

        <div className="flex items-center dark:text-white">
          <label htmlFor="sortByTime" className="mr-2 font-semibold">
            Sort by Date:
          </label>
          <select
            id="sortByTime"
            value={sortByTime}
            onChange={handleSortByTimeChange}
            className="border bg-transparent outline-none rounded px-2 py-1"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold mr-4">
                {payment.name[0]}
              </div>
              <div>
                <h4 className="font-semibold text-lg">{payment.name}</h4>
                <p className="text-sm text-gray-500">{payment.date}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">
                {payment.type}
              </div>

              <div
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                  payment.status === "Paid"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {payment.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
