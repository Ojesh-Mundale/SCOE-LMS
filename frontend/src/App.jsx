import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ViewNotes from './pages/ViewNotes';
import ViewAttendance from './pages/ViewAttendance';
import Profile from './pages/Profile';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50">
        <Sidebar sidebarOpen={sidebarOpen} />
      </div>

        {/* Main content */}
        <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
          {/* Header */}
          <header className="flex items-center justify-between bg-white shadow px-4 py-3">
            <button
              className="focus:outline-none relative"
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              <svg
                className={`h-6 w-6 text-gray-700 transition-opacity duration-300 ${sidebarOpen ? "opacity-0" : "opacity-100"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 text-gray-700 absolute top-0 left-0 transition-opacity duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src="https://engineering.saraswatikharghar.edu.in/wp-content/uploads/2023/05/thumbnail_Saraswati-Logo-horizontal-final-1.jpg"
              alt="Saraswati Logo"
              className="h-20 object-contain mx-auto"
              style={{ maxWidth: '100%', width: '100%' }}
            />
            <div></div> {/* Placeholder for right side of header */}
          </header>

          {/* Routes */}
          <main className="flex-1 overflow-auto p-6 bg-gradient-to-r from-blue-50 via-white to-orange-50 min-h-[calc(100vh-64px)]">
            <Routes>
              <Route path="/" element={<Navigate to="/studentDashboard" replace />} />
              <Route path="/studentDashboard" element={<Dashboard />} />
              <Route path="/studentDashboard/view-notes" element={<ViewNotes />} />
              <Route path="/studentDashboard/view-attendance" element={<ViewAttendance />} />
              <Route path="/studentDashboard/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
