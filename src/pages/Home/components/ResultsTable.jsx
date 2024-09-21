import { useContext, useState, useEffect } from "react";
import { StudentContext } from "../../../context";

export const ResultsTable = () => {
  const { results, setFailedSubjects } = useContext(StudentContext);

  if (!results) {
    return <div>Loading...</div>;
  }

  const calculateTotal = (scores) => {
    return scores.reduce((acc, curr) => acc + curr.score, 0);
  };

  const determineStatus = (total) => {
    return total >= 50 ? "Pass" : "Fail";
  };

  const subjects = {};
  results.forEach(({ score, test_type, subject }) => {
    if (!subjects[subject.id]) {
      subjects[subject.id] = {
        id: subject.id,
        name: subject.name,
        midExam: 0,
        test: 0,
        assignment: 0,
        final: 0,
      };
    }

    switch (test_type) {
      case "midterm":
        subjects[subject.id].midExam += score;
        break;
      case "quiz":
        subjects[subject.id].test += score;
        break;
      case "assignment":
        subjects[subject.id].assignment += score;
        break;
      case "final":
        subjects[subject.id].final += score;
        break;
      default:
        break;
    }
  });

  const subjectArray = Object.values(subjects);

  useEffect(() => {
    const failed = subjectArray
      .filter((subject) => {
        const total = calculateTotal([
          { score: subject.midExam },
          { score: subject.test },
          { score: subject.assignment },
          { score: subject.final },
        ]);
        return determineStatus(total) === "Fail";
      })
      .map((subject) => ({ id: subject.id, name: subject.name }));

    setFailedSubjects(failed);
  }, [results]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Subject
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Mid Exam
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Test
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Assignment
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Final
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Total
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {subjectArray.map((subject) => {
            const total = calculateTotal([
              { score: subject.midExam },
              { score: subject.test },
              { score: subject.assignment },
              { score: subject.final },
            ]);

            return (
              <tr key={subject.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center">
                  {subject.name}
                  <span
                    className={`ml-2 inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 ${
                      determineStatus(total) === "Pass"
                        ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                        : "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
                    }`}
                  >
                    {determineStatus(total)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {subject.midExam}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {subject.test}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {subject.assignment}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {subject.final}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {total}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
