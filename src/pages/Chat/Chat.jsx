import { useContext } from "react";
import { AuthContext } from "../../context";
import { Loading } from "../../utils";

export const Chat = ({ teacher }) => {
  const { loading, setLoading } = useContext(AuthContext);

  if (loading) {
    return <Loading />
  }
  return (
    <div className="chat-area flex-1 flex flex-col">
      <div className="flex-3">
        <h2 className="text-xl py-1 mb-8 border-b-2 dark:text-white border-gray-200">
          Chatting with <b>{teacher.full_name}</b>
        </h2>
      </div>
      <div className="messages flex-1 overflow-auto">
        <div className="message mb-4 flex">
          <div className="flex-2">
            <div className="w-12 h-12 relative">
              <img
                className="w-12 h-12 rounded-full mx-auto"
                src="https://imgs.search.brave.com/_J8N2UDJaL5yqzSP7yAjwI_ndgX4FGOZW3aCDME6dd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib3ktd2l0aC1z/aGlydC10aGF0LXNh/eXMtaGUtaXMtd2Vh/cmluZy1zaGlydC10/aGF0LXNheXMtaGUt/aXMtd2VhcmluZy1z/aGlydF8xMTQ2Nzkx/LTQ5Mi5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
                alt="chat-user"
              />
              <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
            </div>
          </div>
          <div className="flex-1 px-2">
            <div className="inline-block bg-gray-300 rounded-full p-2 px-6  -700">
              <span>
                Hey there. We would like to invite you over to our office for a
                visit. How about it?
              </span>
            </div>
            <div className="pl-4">
              <small className=" -500">15 April</small>
            </div>
          </div>
        </div>
        <div className="message mb-4 flex">
          <div className="flex-2">
            <div className="w-12 h-12 relative">
              <img
                className="w-12 h-12 rounded-full mx-auto"
                src="https://imgs.search.brave.com/_J8N2UDJaL5yqzSP7yAjwI_ndgX4FGOZW3aCDME6dd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib3ktd2l0aC1z/aGlydC10aGF0LXNh/eXMtaGUtaXMtd2Vh/cmluZy1zaGlydC10/aGF0LXNheXMtaGUt/aXMtd2VhcmluZy1z/aGlydF8xMTQ2Nzkx/LTQ5Mi5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
                alt="chat-user"
              />
              <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
            </div>
          </div>
          <div className="flex-1 px-2">
            <div className="inline-block bg-gray-300 rounded-full p-2 px-6  -700">
              <span>All travel expenses are covered by us of course :D</span>
            </div>
            <div className="pl-4">
              <small className=" -500">15 April</small>
            </div>
          </div>
        </div>
        <div className="message me mb-4 flex text-right">
          <div className="flex-1 px-2">
            <div className="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
              <span>It's like a dream come true</span>
            </div>
            <div className="pr-4">
              <small className=" -500">15 April</small>
            </div>
          </div>
        </div>
        <div className="message me mb-4 flex text-right">
          <div className="flex-1 px-2">
            <div className="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
              <span>I accept. Thank you very much.</span>
            </div>
            <div className="pr-4">
              <small className=" -500">15 April</small>
            </div>
          </div>
        </div>
        <div className="message mb-4 flex">
          <div className="flex-2">
            <div className="w-12 h-12 relative">
              <img
                className="w-12 h-12 rounded-full mx-auto"
                src="https://imgs.search.brave.com/_J8N2UDJaL5yqzSP7yAjwI_ndgX4FGOZW3aCDME6dd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib3ktd2l0aC1z/aGlydC10aGF0LXNh/eXMtaGUtaXMtd2Vh/cmluZy1zaGlydC10/aGF0LXNheXMtaGUt/aXMtd2VhcmluZy1z/aGlydF8xMTQ2Nzkx/LTQ5Mi5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
                alt="chat-user"
              />
              <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
            </div>
          </div>
          <div className="flex-1 px-2">
            <div className="inline-block bg-gray-300 rounded-full p-2 px-6  -700">
              <span>You are welome. We will stay in touch.</span>
            </div>
            <div className="pl-4">
              <small className=" -500">15 April</small>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-2 pt-4 pb-10">
        <div className="write bg-white shadow flex rounded-lg">
          <div className="flex-1">
            <textarea
              name="message"
              className="w-full block outline-none py-4 px-4 bg-transparent"
              rows="1"
              placeholder="Type a message..."
              autoFocus
            ></textarea>
          </div>
          <div className="flex-2 w-32 p-2 flex content-center items-center">
            <div className="flex-1">
              <button className="bg-purple-400 w-10 h-10 rounded-full inline-block">
                <span className="inline-block align-text-bottom">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-white"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
