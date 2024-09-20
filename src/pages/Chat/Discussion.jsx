import { List } from "./List";
import chat from "../../assets/chat.svg";
import { useState } from "react";
import { Chat } from "./Chat";

export const Discussion = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full h-screen text-black ">
      <div className="flex h-full">
        <div className="flex-1  w-full h-full">
          <div className="main-body container m-auto w-11/12 h-full flex flex-col">
            <div className="py-4 flex-2 flex flex-row">
              <div className="flex-1">
                <span className="xl:hidden inline-block  -700 hover: -900 align-bottom">
                  <span className="block h-6 w-6 p-1 rounded-full hover:bg-gray-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </span>
                </span>
              </div>
              <div className="flex-1 text-right dark:text-white">
                <span className="inline-block ">
                  Status:{" "}
                  <span className="inline-block align-text-bottom w-4 h-4 bg-green-400 rounded-full border-2 border-white"></span>{" "}
                  <b>Online</b>
                </span>
              </div>
            </div>

            <div className="main flex-1 flex flex-col">
              <div className="flex-1 flex h-full">
                <List setSelected={setSelected} selected={selected} />

                {!selected ? (
                  <div className="w-full h-full flex justify-center items-center">
                    <img src={chat} className=" w-72" alt="" />
                  </div>
                ) : (
                  <Chat teacher={selected} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
