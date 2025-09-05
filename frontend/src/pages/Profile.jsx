import { useState } from 'react';

export default function Profile() {
  const [editable, setEditable] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Ojesh Mundale',
    collegeEmail: 'ojeshmundale24@comp.sce.edu.in',
    grNo: 'S2320138',
    department: 'Computer Engineering',
    currentYear: '3rd Year',
  });

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleEdit = () => {
    setEditable(!editable);
  };

  return (
    <div className="text-blue-900 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Profile</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={profileData.name}
            onChange={handleChange}
            disabled={!editable}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              editable ? 'bg-white' : 'bg-gray-100 cursor-not-allowed'
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="collegeEmail">College Email:</label>
          <input
            id="collegeEmail"
            name="collegeEmail"
            type="email"
            value={profileData.collegeEmail}
            onChange={handleChange}
            disabled={!editable}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              editable ? 'bg-white' : 'bg-gray-100 cursor-not-allowed'
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="grNo">GR No.:</label>
          <input
            id="grNo"
            name="grNo"
            type="text"
            value={profileData.grNo}
            onChange={handleChange}
            disabled={!editable}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              editable ? 'bg-white' : 'bg-gray-100 cursor-not-allowed'
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="department">Department:</label>
          <input
            id="department"
            name="department"
            type="text"
            value={profileData.department}
            onChange={handleChange}
            disabled={!editable}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              editable ? 'bg-white' : 'bg-gray-100 cursor-not-allowed'
            }`}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="currentYear">Current Year:</label>
          <input
            id="currentYear"
            name="currentYear"
            type="text"
            value={profileData.currentYear}
            onChange={handleChange}
            disabled={!editable}
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              editable ? 'bg-white' : 'bg-gray-100 cursor-not-allowed'
            }`}
          />
        </div>
        <button
          onClick={toggleEdit}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          {editable ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
}
