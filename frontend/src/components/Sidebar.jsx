import { NavLink } from 'react-router-dom';

const Sidebar = ({ sidebarOpen }) => {
  return (
    <div className={`transition-all duration-300 ease-in-out bg-white shadow-lg ${sidebarOpen ? "w-64" : "w-0"} overflow-hidden`}>
      <div className="flex flex-col items-center px-4 py-3 border-b border-gray-200">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKY-6Ib8M53NO5wvq0oRkYi5naz4QeKvmHKA&s"
          alt="SCOE Logo"
          className="w-16 h-16 rounded-full mb-2"
        />
        <h1 className="text-xl font-semibold text-blue-700">SCOE</h1>
      </div>
      <nav className="mt-5 px-2 space-y-1">
        <NavLink
          to="/studentDashboard"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 mb-2 rounded-lg font-semibold transition-all duration-300 transform ${
              isActive
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                : 'text-blue-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-orange-100 hover:text-blue-900 hover:scale-105 hover:shadow-md'
            }`
          }
          end
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
          </svg>
          Dashboard
        </NavLink>
        <NavLink
          to="/studentDashboard/view-notes"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 mb-2 rounded-lg font-semibold transition-all duration-300 transform ${
              isActive
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                : 'text-blue-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-orange-100 hover:text-blue-900 hover:scale-105 hover:shadow-md'
            }`
          }
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          View Notes
        </NavLink>
        <NavLink
          to="/studentDashboard/view-attendance"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 mb-2 rounded-lg font-semibold transition-all duration-300 transform ${
              isActive
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                : 'text-blue-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-orange-100 hover:text-blue-900 hover:scale-105 hover:shadow-md'
            }`
          }
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          View Attendance
        </NavLink>
        <NavLink
          to="/studentDashboard/profile"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 mb-2 rounded-lg font-semibold transition-all duration-300 transform ${
              isActive
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                : 'text-blue-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-orange-100 hover:text-blue-900 hover:scale-105 hover:shadow-md'
            }`
          }
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Profile
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
