import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import { Loading } from "../../utils";

export const Chat = ({ teacher }) => {
  const { loading, setLoading, authTokens, myprofile } =
    useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

  useEffect(() => {
    const fetchChat = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${backendUrl}api/chat-messages/?sender_parent=${myprofile.id}&recipient_teacher=${teacher.id}`,
          {
            headers: {
              Authorization: `Bearer ${authTokens.access}`,
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Fetch error:", errorData);
          throw new Error("Failed to fetch chat messages");
        }

        const data = await response.json();
        console.log("Fetched data before sorting:", data); // Log before sorting
        data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        console.log("Fetched data after sorting:", data); // Log after sorting
        setMessages(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChat();
  }, [backendUrl, teacher, myprofile]);

  useEffect(() => {
    console.log("Updated messages:", messages); // Log updated messages
  }, [messages]);

  return (
    <>
      <div className="chat-area flex-1 flex flex-col">
        <div className="flex-3">
          <h2 className="text-xl py-1 mb-8 border-b-2 dark:text-white border-gray-200">
            Chatting with <b>{teacher.full_name}</b>
          </h2>
        </div>
        {/* <div className="messages flex-1 overflow-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message mb-4 flex ${
                  message.sender_parent === myprofile.id ? "me text-right" : ""
                }`}
              >
                <div className="flex-2">
                  <div className="w-12 h-12 relative">
                    <img
                      className="w-12 h-12 rounded-full mx-auto"
                      src="default-avatar-url" // Update with actual avatar if available
                      alt="chat-user"
                    />
                    <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                  </div>
                </div>
                <div className="flex-1 px-2">
                  <div
                    className={`inline-block rounded-full p-2 px-6 ${
                      message.sender_parent === myprofile.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-300"
                    }`}
                  >
                    <span>{message.message}</span>
                  </div>
                  <div className="pl-4">
                    <small className="text-gray-500">
                      {new Date(message.timestamp).toLocaleString()}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        {/* <div className="flex-2 pt-4 pb-10">
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
                  <button className="bg-purple-400 w-10 h-10 rounded-full inline-block hover:bg-purple-500">
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
          </div> */}
      </div>
    </>
  );
};
