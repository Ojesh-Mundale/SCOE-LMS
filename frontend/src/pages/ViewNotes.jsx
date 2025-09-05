export default function ViewNotes() {
  const subjects = ['TCS', 'SE', 'IP', 'CN', 'DWM'];

  return (
    <div className="text-blue-900">
      <h2 className="text-3xl font-bold mb-6">View Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold mb-2 text-blue-700">{subject} Notes</h3>
            <p className="text-gray-600 mb-4">Notes for {subject}</p>
            <button className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-orange-600 transition-all duration-300">
              View Notes
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
