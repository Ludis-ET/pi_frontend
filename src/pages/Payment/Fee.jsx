import React, { useContext, useEffect, useState } from "react";
import "../../components/css/Scroll.css";
import { AuthContext } from "../../context";
import { useFetchFee } from "../../hooks";

export const Fee = () => {
  const { setLoading } = useContext(AuthContext);
  const initialPayments = useFetchFee();
  const [payments, setPayments] = useState([]);
  const [sortType, setSortType] = useState("");
  const [sortByTime, setSortByTime] = useState("newest");

  useEffect(() => {
    if (initialPayments) {
      setLoading(false);
      filterAndSortPayments(initialPayments);
    }
  }, [initialPayments, sortType, sortByTime]);

  const filterAndSortPayments = (paymentData) => {
    let filteredPayments = [...paymentData];

    if (sortType) {
      filteredPayments = filteredPayments.filter(
        (payment) => payment.types === sortType
      );
    }

    filteredPayments.sort((a, b) =>
      sortByTime === "newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

    setPayments(filteredPayments);
  };

  const handleSortTypeChange = (e) => {
    setSortType(e.target.value);
    filterAndSortPayments(initialPayments);
  };

  const handleSortByTimeChange = (e) => {
    setSortByTime(e.target.value);
    filterAndSortPayments(initialPayments);
  };

  return (
    <div className="container mx-auto p-4 text-black h-full overflow-y-scroll">
      <div className="flex justify-between gap-4 items-center mb-6">
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
            <option value="Uniform">Uniform</option>
            <option value="Book">Book</option>
            <option value="Other">Other</option>
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
      <div className="grid grid-cols-1 gap-4 ">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold mr-4">
                {payment.parent}{" "}
              </div>
              <div>
                <h4 className="font-semibold text-lg">{payment.small_desc}</h4>
                <p className="text-sm text-gray-500">
                  {new Date(payment.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">
                {payment.types}
              </div>

              <div
                className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                  payment.status === "PAID"
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
