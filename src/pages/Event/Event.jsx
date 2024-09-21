import { useState, useEffect } from "react";
import "../../components/css/Scroll.css";
import { useFetchEvent } from "../../hooks";

export const Event = () => {
  const events = useFetchEvent();
  const [sortedEvents, setSortedEvents] = useState([]);

  useEffect(() => {
    if (events && events.length > 0) {
      const sorted = [...events].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setSortedEvents(sorted);
    }
  }, [events]);

  return (
    <div className="container mx-auto my-10 p-4 max-h-full overflow-y-scroll">
      <div className="relative border-l border-gray-200">
        {sortedEvents.length > 0 &&
          sortedEvents.map((event, index) => (
            <div
              key={index}
              className={`mb-8 flex items-center justify-between ${
                index % 2 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="order-1 hidden lg:block lg:w-5/12"></div>
              <div className="z-20 hidden lg:flex items-center order-1 bg-purple-500 shadow-xl w-8 h-8 rounded-full"></div>
              <div className="order-1 bg-purple-500 rounded-lg shadow-xl lg:w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-white text-xl">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h3>
                <h4 className="text-lg font-semibold text-white">
                  {event.title}
                </h4>
                {event.picture && (
                  <img src={event.picture} className="my-4" alt="" />
                )}
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
