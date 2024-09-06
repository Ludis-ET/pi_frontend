const subjects = [
  { name: "Mathematics", midExam: 13, test: 25, assignment: 20, final: 25 },
  { name: "Science", midExam: 5, test: 20, assignment: 15, final: 22 },
  { name: "History", midExam: 7, test: 22, assignment: 18, final: 30 },
  { name: "English", midExam: 8, test: 20, assignment: 15, final: 19 },
  { name: "Geography", midExam: 6, test: 20, assignment: 15, final: 20 },
  { name: "Physics", midExam: 8, test: 20, assignment: 18, final: 12 },
  { name: "Chemistry", midExam: 8, test: 20, assignment: 12, final: 35 },
  { name: "Biology", midExam: 8, test: 25, assignment: 18, final: 0 },
  {
    name: "Computer Science",
    midExam: 10,
    test: 25,
    assignment: 2,
    final: 9,
  },
];

const calculateTotal = (subject) =>
  subject.midExam + subject.test + subject.assignment + subject.final;

const determineStatus = (total) => (total >= 50 ? "Pass" : "Fail");

export const ResultsTable = () => {
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
          {subjects.map((subject) => {
            const total = calculateTotal(subject);
            return (
              <tr key={subject.name}>
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
