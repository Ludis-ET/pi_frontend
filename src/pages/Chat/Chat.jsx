import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import { Loading } from "../../utils";

export const Chat = ({ teacher, side }) => {
  const { authTokens, myprofile } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [chat, setChat] = useState([]);
  const [error, setError] = useState(null);
  const [messageText, setMessageText] = useState("");
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

        const response2 = await fetch(
          `${backendUrl}api/chat-messages/?recipient_parent=${myprofile.id}&sender_teacher=${teacher.id}`,
          {
            headers: {
              Authorization: `Bearer ${authTokens.access}`,
            },
          }
        );

        if (!response.ok || !response2.ok) {
          const errorData = await response.json();
          console.error("Fetch error:", errorData);
          throw new Error("Failed to fetch chat messages");
        }

        const data = await response.json();
        const data2 = await response2.json();
        const combinedData = [...data, ...data2];
        combinedData.sort(
          (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
        );
        setChat(combinedData);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChat();
  }, [backendUrl, teacher.id, myprofile.id]);

  const sendMessage = async () => {
    if (!messageText.trim()) return;
    try {
      const messagePayload = {
        sender_type: "parent",
        sender_parent: myprofile.id,
        recipient_teacher: teacher.id,
        message: messageText,
      };

      const response = await fetch(`${backendUrl}api/chat-messages/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authTokens.access}`,
        },
        body: JSON.stringify(messagePayload),
      });

      if (!response.ok) {
        throw new Error("Failed to send the message");
      }

      const newMessage = await response.json();

      setChat((prevChat) => [...prevChat, newMessage]);
      setMessageText("");
    } catch (error) {
      console.error("Send message error:", error);
      setError("Failed to send message");
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="error-message text-red-500">{error}</div>
      ) : (
        <div className="chat-area flex-1 flex flex-col">
          <div className="flex-3">
            <h2 className="text-xl py-1 mb-8 border-b-2 dark:text-white border-gray-200">
              Chatting with <b>{teacher.full_name}</b>
            </h2>
          </div>
          <div className="messages w-full flex-1 overflow-auto">
            {chat.map((message) => (
              <div
                key={message.id}
                className={`message mb-4 flex ${
                  message.sender_parent === myprofile.id ? "me text-right" : ""
                }`}
              >
                <div className="flex-2">
                  {message.sender_type === "teacher" && (
                    <div className="w-12 h-12 relative">
                      <img
                        className="w-12 h-12 rounded-full mx-auto"
                        src={
                          teacher.profile_pic
                            ? teacher.profile_pic
                            : "https://imgs.search.brave.com/JAHeWxUYEwHB7KV6V1IbI9oL7wxJwIQ4Sbp8dHQL09A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAx/MzkxNTc2NC9waG90/by91c2VyLWljb24t/aW4tZmxhdC1zdHls/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UEotMnZvUWZh/Q3hhZUNsdzZYYlVz/QkNaT3NTTjlIVWVC/SUg1Qk82VmRScz0"
                        }
                        alt="chat-user"
                      />
                    </div>
                  )}
                </div>
                <div className="flex-1 px-2">
                  <div
                    className={`inline-block rounded-full p-2 px-6 ${
                      message.sender_parent === myprofile.id
                        ? "bg-gray-600 text-white"
                        : message.sender_type === "teacher"
                        ? "bg-purple-600 text-white"
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
          </div>
          {!side && (
            <div className="flex-2 pt-4 pb-10 relative">
              <div className="flex-2 pt-4 pb-10 absolute bottom-10 w-full z-[999] lg:bottom-0">
                <div className="write shadow flex justify-between rounded-lg">
                  <div className="flex-2">
                    <textarea
                      name="message"
                      className="w-full block outline-none py-4 px-4 bg-transparent"
                      rows="1"
                      placeholder="Type a message..."
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="p-2 flex content-center items-center">
                    <div className="flex-1">
                      <button
                        className="bg-purple-400 w-10 h-10 rounded-full inline-block hover:bg-purple-500"
                        onClick={sendMessage}
                      >
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
          )}
        </div>
      )}
    </>
  );
};
