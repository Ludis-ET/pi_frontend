import { useContext, useState, useEffect } from "react";
import { StudentContext, AuthContext } from "../context";

export const CourseRecommendation = () => {
  const { failedSubjects } = useContext(StudentContext);
  const { authTokens, setLoading } = useContext(AuthContext);
  const [courseMap, setCourseMap] = useState({});

  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  useEffect(() => {
    const fetchCourseBySubject = async (subjectId, name) => {
      try {
        const response = await fetch(
          `${backendUrl}api/courses/?subject=${subjectId}`,
          {
            headers: {
              Authorization: `Bearer ${authTokens.access}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setCourseMap((prevMap) => ({
            ...prevMap,
            [name]: data,
          }));
        }
      } catch (error) {
        console.error(
          `Error fetching courses for subject ${subjectId}:`,
          error
        );
      }
    };

    if (failedSubjects.length > 0) {
      setLoading(true);
      failedSubjects.forEach((subject) => {
        fetchCourseBySubject(subject.id, subject.name);
      });
      setLoading(false);
    }
  }, [failedSubjects, authTokens, backendUrl]);

  return (
    <div className="overflow-y-scroll">
      {Object.entries(courseMap).map(([subjectName, courses]) => (
        <div key={subjectName} className="my-6 ">
          <h6 className="mb-2 dark:text-white text-slate-800 text-xl font-semibold">
            <b className="text-3xl text-red-600">{subjectName}</b> Course Recommendations
          </h6>
          <div className="flex flex-wrap w-full gap-8 justify-center">
            {courses.length > 0 ? (
              courses.map((course) => (
                <div
                  key={course.id}
                  className="flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96"
                >
                  <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img
                      src={course.poster}
                      alt="card-image"
                      className="w-full"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-2">
                      <p className="text-slate-600 leading-normal font-light">
                        {course.course_description}
                      </p>
                      <a
                        href={course.link}
                        target="_blank"
                        className="text-blue-500"
                      >
                        Enroll
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No recommendations available.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
