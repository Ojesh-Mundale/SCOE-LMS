export default function ViewAttendance() {
  const attendanceData = [
    { subject: 'TCS', total: 30, attended: 28, percentage: 93.33 },
    { subject: 'SE', total: 25, attended: 22, percentage: 88 },
    { subject: 'IP', total: 28, attended: 25, percentage: 89.29 },
    { subject: 'CN', total: 32, attended: 30, percentage: 93.75 },
    { subject: 'DWM', total: 26, attended: 24, percentage: 92.31 },
  ];

  return (
    <div className="text-blue-900">
      <h2 className="text-3xl font-bold mb-6">View Attendance</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gradient-to-r from-blue-100 to-orange-100">
              <th className="px-4 py-2 text-left text-blue-700 font-semibold">Subject</th>
              <th className="px-4 py-2 text-left text-blue-700 font-semibold">Total Classes</th>
              <th className="px-4 py-2 text-left text-blue-700 font-semibold">Attended</th>
              <th className="px-4 py-2 text-left text-blue-700 font-semibold">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition-colors duration-300">
                <td className="px-4 py-2 font-medium">{item.subject}</td>
                <td className="px-4 py-2">{item.total}</td>
                <td className="px-4 py-2">{item.attended}</td>
                <td className={`px-4 py-2 font-semibold ${item.percentage >= 90 ? 'text-green-600' : item.percentage >= 85 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {item.percentage}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
