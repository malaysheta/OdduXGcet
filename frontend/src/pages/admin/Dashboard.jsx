import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/signin')
  }

  const adminCards = [
    { title: 'Employees', description: 'Manage all employees', path: '/admin/employees', icon: '👥' },
    { title: 'Attendance', description: 'View and manage attendance', path: '/admin/attendance', icon: '📅' },
    { title: 'Leave Approvals', description: 'Approve or reject leaves', path: '/admin/leaves', icon: '✅' },
    { title: 'Payroll', description: 'Manage salary structures', path: '/admin/payroll', icon: '💵' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-purple-600">Dayflow</h1>
            <p className="text-sm text-gray-600">{user?.role === 'admin' ? 'Admin' : 'HR'} Dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-semibold">{user?.employeeProfile?.personalDetails?.fullName || 'Admin'}</p>
              <p className="text-sm text-gray-600 capitalize">{user?.role}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Admin Dashboard 🎯
          </h2>
          <p className="text-gray-600">Manage your organization efficiently</p>
        </div>

        {/* Admin Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminCards.map((card) => (
            <button
              key={card.path}
              onClick={() => navigate(card.path)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-left group hover:scale-105"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </button>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Employees</h3>
            <p className="text-3xl font-bold text-purple-600">--</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pending Leaves</h3>
            <p className="text-3xl font-bold text-orange-600">--</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Today's Attendance</h3>
            <p className="text-3xl font-bold text-green-600">--</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard
