import { useContext, useState, useEffect } from "react";
import { useFetchTeachers } from "../../hooks";
import { AuthContext } from "../../context";

export const List = ({ setSelected, selected }) => {
  const { setLoading } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const teachers = useFetchTeachers();

  useEffect(() => {
    if (teachers) {
      setLoading(true);
      const filtered = teachers.filter((teacher) =>
        teacher.full_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTeachers(filtered);
      setLoading(false);
    }
  }, [teachers, searchTerm, setLoading]);

  return (
    <div className="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6">
      <div className="search flex-2 pb-6 px-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200"
          placeholder="Search"
        />
      </div>
      <div className="flex-1 h-full overflow-auto px-2">
        {filteredTeachers.length > 0 ? (
          filteredTeachers.map((teacher) => (
            <div
              key={teacher.id}
              onClick={() => setSelected(teacher)}
              className={`entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md border-l-2 ${
                selected && selected.id === teacher.id
                  ? "border-purple-500"
                  : "border-transparent"
              }`}
            >
              <div className="flex-2">
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
                  <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                </div>
              </div>
              <div className="flex-1 px-2">
                <div className="truncate w-32">
                  <span className="font-semibold">{teacher.full_name}</span>
                </div>
                <div>
                  <small className="text-gray-600">
                    {teacher.subject.name} Teacher
                  </small>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No teachers found</p>
        )}
      </div>
    </div>
  );
};
