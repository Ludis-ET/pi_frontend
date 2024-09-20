import { useContext } from "react";
import { useFetchTeachers } from "../../hooks";
import { AuthContext } from "../../context";

export const List = () => {
  const { setLoading } = useContext(AuthContext);
  setLoading(true);
  const teachers = useFetchTeachers();
  setLoading(false);

  return (
    <div className="sidebar hidden lg:flex w-1/3 flex-2 flex-col pr-6">
      <div className="search flex-2 pb-6 px-2">
        <input
          type="text"
          className="outline-none py-2 block w-full bg-transparent border-b-2 border-gray-200"
          placeholder="Search"
        />
      </div>
      <div className="flex-1 h-full overflow-auto px-2">
        {teachers &&
          teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="entry cursor-pointer transform hover:scale-105 duration-300 transition-transform bg-white mb-4 rounded p-4 flex shadow-md"
            >
              <div className="flex-2">
                <div className="w-12 h-12 relative">
                  <img
                    className="w-12 h-12 rounded-full mx-auto"
                    src="https://imgs.search.brave.com/_J8N2UDJaL5yqzSP7yAjwI_ndgX4FGOZW3aCDME6dd4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib3ktd2l0aC1z/aGlydC10aGF0LXNh/eXMtaGUtaXMtd2Vh/cmluZy1zaGlydC10/aGF0LXNheXMtaGUt/aXMtd2VhcmluZy1z/aGlydF8xMTQ2Nzkx/LTQ5Mi5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw"
                    alt="chat-user"
                  />
                  <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                </div>
              </div>
              <div className="flex-1 px-2">
                <div className="truncate w-32">
                  <span className="font-semibold">{teacher.name}</span>
                </div>
                <div>
                  <small className="text-gray-600">Yea, Sure!</small>
                </div>
              </div>
              <div className="flex-2 text-right">
                <div>
                  <small className="text-gray-500">15 April</small>
                </div>
                <div>
                  <small className="text-xs bg-purple-500 text-white rounded-full h-6 w-6 leading-6 text-center inline-block">
                    23
                  </small>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
