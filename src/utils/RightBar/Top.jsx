import { useContext, useState, useEffect } from "react";
import { StudentContext } from "../../context";

export const Top = () => {
  const { students, student, setStudent } = useContext(StudentContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (students.length > 0) {
      setIsLoading(false);
    }
  }, [students]);

  const handleSelectChange = (e) => {
    const selectedIndex = Number(e.target.value);
    const selectedStudent = students.find((stu) => stu.id === selectedIndex);
    setStudent(selectedStudent);
  };

  return (
    <div className="w-full flex flex-col gap-2 justify-center items-center py-8">
      {isLoading ? (
        <div className="w-[100px] h-[100px] bg-gray-300 animate-pulse rounded-full"></div>
      ) : (
        <img
          src={
            student?.profile_pic
              ? student.profile_pic
              : "https://imgs.search.brave.com/JAHeWxUYEwHB7KV6V1IbI9oL7wxJwIQ4Sbp8dHQL09A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjAx/MzkxNTc2NC9waG90/by91c2VyLWljb24t/aW4tZmxhdC1zdHls/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9UEotMnZvUWZh/Q3hhZUNsdzZYYlVz/QkNaT3NTTjlIVWVC/SUg1Qk82VmRScz0"
          }
          className="w-[100px] rounded-full h-[100px]"
        />
      )}

      {isLoading ? (
        <div className="w-1/2 h-8 bg-gray-300 animate-pulse rounded-md mt-2"></div>
      ) : (
        <select
          onChange={handleSelectChange}
          className="bg-transparent text-white text-xl outline-none"
        >
          {students.map((stu) => (
            <option key={stu.id} value={stu.id} className="bg-purple-600">
              {stu.full_name}
            </option>
          ))}
        </select>
      )}

      {isLoading ? (
        <div className="w-[150px] h-4 bg-gray-300 animate-pulse mt-2"></div>
      ) : (
        <p className="text-sm text-white">
          {student && `Grade ${student.grade} | ${student.school_ID}`}
        </p>
      )}
    </div>
  );
};
