import { useState, useMemo } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState({});

  const sampleData = {
    subjects: [
      { name: 'Data Structures',  modulesCompleted: 3, totalModules: 6 },
      { name: 'Web Development', modulesCompleted: 2, totalModules: 6 },
      { name: 'Database Management',modulesCompleted: 4, totalModules: 6 },
      { name: 'Computer Networks',  modulesCompleted: 1, totalModules: 6 }
    ],
    assignments: [
      { title: 'Data Structures Assignment 3', deadline: '2024-01-15', status: 'Pending' },
      { title: 'Web Dev Project', deadline: '2024-01-20', status: 'In Progress' },
      { title: 'Database Quiz', deadline: '2024-01-18', status: 'Pending' }
    ],
    grades: [
      {
        subject: 'Data Structures',
        grade: 'A',
        percentage: 92,
        ia1: { marks: 28, total: 30 },
        ia2: { marks: 18, total: 20 },
        practical: { marks: 45, total: 50 },
        assignment: { marks: 85, total: 100 },
        attendance: { marks: 92, total: 100 },
        semester: { marks: 46, total: 50 }
      },
      {
        subject: 'Web Development',
        grade: 'A+',
        percentage: 96,
        ia1: { marks: 29, total: 30 },
        ia2: { marks: 19, total: 20 },
        practical: { marks: 48, total: 50 },
        assignment: { marks: 95, total: 100 },
        attendance: { marks: 98, total: 100 },
        semester: { marks: 48, total: 50 }
      },
      {
        subject: 'Database Management',
        grade: 'B+',
        percentage: 85,
        ia1: { marks: 25, total: 30 },
        ia2: { marks: 16, total: 20 },
        practical: { marks: 42, total: 50 },
        assignment: { marks: 78, total: 100 },
        attendance: { marks: 88, total: 100 },
        semester: { marks: 42, total: 50 }
      },
      {
        subject: 'Computer Networks',
        grade: 'A',
        percentage: 90,
        ia1: { marks: 27, total: 30 },
        ia2: { marks: 17, total: 20 },
        practical: { marks: 46, total: 50 },
        assignment: { marks: 88, total: 100 },
        attendance: { marks: 94, total: 100 },
        semester: { marks: 45, total: 50 }
      }
    ],
    schedule: [
      { day: 'Monday', time: '9:30 AM - 10:30 AM', subject: 'Data Structures' },
      { day: 'Monday', time: '10:30 AM - 11:30 AM', subject: 'Web Development' },
      { day: 'Monday', time: '11:30 AM - 12:30 PM', subject: 'Database Management' },
      { day: 'Monday', time: '12:30 PM - 1:30 PM', subject: 'Computer Networks' },
      { day: 'Monday', time: '2:00 PM - 3:00 PM', subject: 'Mathematics' },
      { day: 'Monday', time: '3:00 PM - 4:00 PM', subject: 'Physics' },

      { day: 'Tuesday', time: '9:30 AM - 10:30 AM', subject: 'Web Development' },
      { day: 'Tuesday', time: '10:30 AM - 11:30 AM', subject: 'Data Structures' },
      { day: 'Tuesday', time: '11:30 AM - 12:30 PM', subject: 'Computer Networks' },
      { day: 'Tuesday', time: '12:30 PM - 1:30 PM', subject: 'Database Management' },
      { day: 'Tuesday', time: '2:00 PM - 3:00 PM', subject: 'Mathematics' },
      { day: 'Tuesday', time: '3:00 PM - 4:00 PM', subject: 'Chemistry' },

      { day: 'Wednesday', time: '9:30 AM - 10:30 AM', subject: 'Database Management' },
      { day: 'Wednesday', time: '10:30 AM - 11:30 AM', subject: 'Computer Networks' },
      { day: 'Wednesday', time: '11:30 AM - 12:30 PM', subject: 'Data Structures' },
      { day: 'Wednesday', time: '12:30 PM - 1:30 PM', subject: 'Web Development' },
      { day: 'Wednesday', time: '2:00 PM - 3:00 PM', subject: 'Physics' },
      { day: 'Wednesday', time: '3:00 PM - 4:00 PM', subject: 'Mathematics' },

      { day: 'Thursday', time: '9:30 AM - 10:30 AM', subject: 'Computer Networks' },
      { day: 'Thursday', time: '10:30 AM - 11:30 AM', subject: 'Database Management' },
      { day: 'Thursday', time: '11:30 AM - 12:30 PM', subject: 'Web Development' },
      { day: 'Thursday', time: '12:30 PM - 1:30 PM', subject: 'Data Structures' },
      { day: 'Thursday', time: '2:00 PM - 3:00 PM', subject: 'Chemistry' },
      { day: 'Thursday', time: '3:00 PM - 4:00 PM', subject: 'Physics' },

      { day: 'Friday', time: '9:30 AM - 10:30 AM', subject: 'Mathematics' },
      { day: 'Friday', time: '10:30 AM - 11:30 AM', subject: 'Physics' },
      { day: 'Friday', time: '11:30 AM - 12:30 PM', subject: 'Chemistry' },
      { day: 'Friday', time: '12:30 PM - 1:30 PM', subject: 'Data Structures' },
      { day: 'Friday', time: '2:00 PM - 3:00 PM', subject: 'Web Development' },
      { day: 'Friday', time: '3:00 PM - 4:00 PM', subject: 'Database Management' }
    ],
    announcements: [
      { title: 'Mid-term Exam Schedule', date: '2024-01-10', content: 'Mid-term examinations will begin from January 20th' },
      { title: 'New Library Resources', date: '2024-01-08', content: 'New digital library resources are now available' },
      { title: 'Campus Event', date: '2024-01-05', content: 'Annual tech fest registration is now open' }
    ],
    questionPapers: [
      { title: 'Data Structures - 2023', semester: 'Sem 4', downloads: 245 },
      { title: 'Web Development - 2023', semester: 'Sem 4', downloads: 189 },
      { title: 'Database Management - 2022', semester: 'Sem 4', downloads: 156 },
      { title: 'Computer Networks - 2022', semester: 'Sem 4', downloads: 98 }
    ]
  };

  const timeSlots = [
    '9:30 AM - 10:30 AM',
    '10:30 AM - 11:30 AM',
    '11:30 AM - 12:30 PM',
    '12:30 PM - 1:30 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM'
  ];

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const tableData = useMemo(() => {
    const scheduleMap = {};
    sampleData.schedule.forEach(item => {
      if (!scheduleMap[item.day]) scheduleMap[item.day] = {};
      scheduleMap[item.day][item.time] = item.subject;
    });

    const tableData = days.map(day => {
      const row = { day };
      timeSlots.forEach(slot => {
        row[slot] = scheduleMap[day]?.[slot] || '';
      });
      return row;
    });

    return tableData;
  }, [sampleData.schedule, days, timeSlots]);

  const columns = [
    {
      accessorKey: 'day',
      header: 'Day',
    },
    ...timeSlots.map(slot => ({
      accessorKey: slot,
      header: slot,
    }))
  ];

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const gradesTableData = sampleData.grades.map(grade => ({
    subject: grade.subject,
    ia1: `${grade.ia1.marks}/${grade.ia1.total}`,
    ia2: `${grade.ia2.marks}/${grade.ia2.total}`,
    practical: `${grade.practical.marks}/${grade.practical.total}`,
    assignment: `${grade.assignment.marks}/${grade.assignment.total}`,
    attendance: `${grade.attendance.marks}/${grade.attendance.total}`,
    semester: `${grade.semester.marks}/${grade.semester.total}`,
    grade: grade.grade,
    percentage: `${grade.percentage}%`
  }));

  const gradesColumns = [
    {
      accessorKey: 'subject',
      header: 'Subject',
    },
    {
      accessorKey: 'ia1',
      header: 'IA1',
    },
    {
      accessorKey: 'ia2',
      header: 'IA2',
    },
    {
      accessorKey: 'practical',
      header: 'Practical',
    },
    {
      accessorKey: 'assignment',
      header: 'Assignment',
    },
    {
      accessorKey: 'attendance',
      header: 'Attendance',
    },
    {
      accessorKey: 'semester',
      header: 'Semester',
    },
    {
      accessorKey: 'grade',
      header: 'Grade',
    },
    {
      accessorKey: 'percentage',
      header: 'Percentage',
    }
  ];

  const gradesTable = useReactTable({
    data: gradesTableData,
    columns: gradesColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleViewClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleFileChange = (assignmentIndex, event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setUploadedFiles(prev => ({
        ...prev,
        [assignmentIndex]: file
      }));
    } else {
      alert('Please select a PDF file only.');
      event.target.value = '';
    }
  };

  const handleFileUpload = (assignmentIndex) => {
    const file = uploadedFiles[assignmentIndex];
    if (file) {
      // Here you would typically send the file to your backend
      alert(`File "${file.name}" uploaded successfully for assignment ${assignmentIndex + 1}!`);
      // Clear the uploaded file after successful upload
      setUploadedFiles(prev => {
        const newFiles = { ...prev };
        delete newFiles[assignmentIndex];
        return newFiles;
      });
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div className="text-blue-900">
      <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-4xl font-bold mb-2">Welcome to the Dashboard</h2>
        <p className="text-lg opacity-90">Manage your academic journey with ease</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-xl border-l-8 border-blue-500 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-700">Subjects</h3>
          </div>
          <p className="text-gray-600 mb-4">View your enrolled Subjects and progress</p>
          <button
            onClick={() => handleViewClick('subjects')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View Subjects
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xl border-l-8 border-orange-500 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-orange-700">Assignments</h3>
          </div>
          <p className="text-gray-600 mb-4">Check pending assignments and deadlines</p>
          <button
            onClick={() => handleViewClick('assignments')}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-300"
          >
            View Assignments
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xl border-l-8 border-blue-500 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-700">Grades</h3>
          </div>
          <p className="text-gray-600 mb-4">View your grades and performance</p>
          <button
            onClick={() => handleViewClick('grades')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View Grades
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xl border-l-8 border-orange-500 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-orange-700">Schedule</h3>
          </div>
          <p className="text-gray-600 mb-4">Check your class schedule</p>
          <button
            onClick={() => handleViewClick('schedule')}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-300"
          >
            View Schedule
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xl border-l-8 border-blue-500 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-700">Announcements</h3>
          </div>
          <p className="text-gray-600 mb-4">Latest college announcements</p>
          <button
            onClick={() => handleViewClick('announcements')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View Announcements
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-xl border-l-8 border-orange-500 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-orange-700">Question Papers</h3>
          </div>
          <p className="text-gray-600 mb-4">Access previous year question papers</p>
          <button
            onClick={() => window.open('https://muquestionpapers.com', '_blank')}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-300"
          >
            Visit MU Question Papers
          </button>
        </div>
      </div>

      {/* Sample Data Display Sections */}
      {activeSection === 'subjects' && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Your Subjects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sampleData.subjects.map((subject, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">{subject.name}</h4>
                <p className="text-sm text-gray-600">Modules Completed: {subject.modulesCompleted}/{subject.totalModules}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'assignments' && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold text-orange-700 mb-4">Your Assignments</h3>
          <div className="space-y-6">
            {sampleData.assignments.map((assignment, index) => (
              <div key={index} className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <div className="flex flex-col space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-800 text-lg">{assignment.title}</h4>
                    <p className="text-sm text-gray-600">Deadline: {assignment.deadline}</p>
                    <p className="text-sm text-gray-600">Status: {assignment.status}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload PDF Assignment:
                      </label>
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => handleFileChange(index, e)}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                      />
                      {uploadedFiles[index] && (
                        <p className="text-sm text-green-600 mt-1">
                          Selected: {uploadedFiles[index].name}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => handleFileUpload(index)}
                      className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-300 font-medium"
                    >
                      Upload Assignment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'grades' && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Your Grades</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  {gradesTable.getHeaderGroups().map(headerGroup => (
                    headerGroup.headers.map(header => (
                      <th key={header.id} className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))
                  ))}
                </tr>
              </thead>
              <tbody>
                {gradesTable.getRowModel().rows.map(row => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className="border border-gray-300 px-4 py-2">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeSection === 'schedule' && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold text-orange-700 mb-4">Your Schedule</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  {table.getHeaderGroups().map(headerGroup => (
                    headerGroup.headers.map(header => (
                      <th key={header.id} className="border border-gray-300 px-4 py-2 bg-gray-100 text-left">
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.getRowModel().rows.map(row => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    {row.getVisibleCells().map(cell => (
                      <td key={cell.id} className="border border-gray-300 px-4 py-2">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeSection === 'announcements' && (
        <div className="mt-8 bg-white p-6 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">Announcements</h3>
          <div className="space-y-4">
            {sampleData.announcements.map((announcement, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800">{announcement.title}</h4>
                <p className="text-sm text-gray-600">Date: {announcement.date}</p>
                <p className="text-sm text-gray-600">{announcement.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
