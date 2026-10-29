import { useState, useEffect } from 'react'
import Login from './components/Login'
import LeaveForm from './components/LeaveForm'
import ComplaintForm from './components/ComplaintForm'
import LeaveList from './components/LeaveList'
import ComplaintList from './components/ComplaintList'
import Menu from './components/Menu'

const defaultMenu = {
  breakfast: 'Poha and tea',
  lunch: 'Rice, dal, sabzi, roti',
  snacks: 'Samosa and chai',
  dinner: 'Paneer, roti, rice'
}

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user')
    return saved ? JSON.parse(saved) : null
  })

  const [leaves, setLeaves] = useState(() => {
    const saved = localStorage.getItem('leaves')
    return saved ? JSON.parse(saved) : []
  })

  const [complaints, setComplaints] = useState(() => {
    const saved = localStorage.getItem('complaints')
    return saved ? JSON.parse(saved) : []
  })

  const [menu, setMenu] = useState(() => {
    const saved = localStorage.getItem('menu')
    return saved ? JSON.parse(saved) : defaultMenu
  })

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  useEffect(() => {
    localStorage.setItem('leaves', JSON.stringify(leaves))
  }, [leaves])

  useEffect(() => {
    localStorage.setItem('complaints', JSON.stringify(complaints))
  }, [complaints])

  useEffect(() => {
    localStorage.setItem('menu', JSON.stringify(menu))
  }, [menu])

  function addLeave(leave) {
    setLeaves([...leaves, leave])
  }

  function addComplaint(complaint) {
    setComplaints([...complaints, complaint])
  }

  function markLeaveDone(id) {
    setLeaves(leaves.map((l) => (l.id === id ? { ...l, status: 'Done' } : l)))
  }

  function markComplaintDone(id) {
    setComplaints(complaints.map((c) => (c.id === id ? { ...c, status: 'Done' } : c)))
  }

  function deleteLeave(id) {
    setLeaves(leaves.filter((l) => l.id !== id))
  }

  function deleteComplaint(id) {
    setComplaints(complaints.filter((c) => c.id !== id))
  }

  if (!user) {
    return (
      <div className="container">
        <h1>Hostel Portal</h1>
        <Login onLogin={setUser} />
      </div>
    )
  }

  const isAdmin = user.role === 'admin'

  const visibleLeaves = isAdmin
    ? leaves
    : leaves.filter((l) => l.name === user.name && l.room === user.room)

  const visibleComplaints = isAdmin
    ? complaints
    : complaints.filter((c) => c.name === user.name && c.room === user.room)

  return (
    <div className="container">
      <h1>Hostel Portal</h1>
      <div className="topbar">
        <p>Logged in as: <b>{isAdmin ? 'Admin' : user.name + ' (Room ' + user.room + ')'}</b></p>
        <button onClick={() => setUser(null)}>Logout</button>
      </div>
      <Menu menu={menu} updateMenu={setMenu} isAdmin={isAdmin} />
      {!isAdmin && (
        <div className="forms">
          <LeaveForm addLeave={addLeave} user={user} />
          <ComplaintForm addComplaint={addComplaint} user={user} />
        </div>
      )}
      <div className="lists">
        <LeaveList leaves={visibleLeaves} markDone={markLeaveDone} deleteLeave={deleteLeave} isAdmin={isAdmin} />
        <ComplaintList complaints={visibleComplaints} markDone={markComplaintDone} deleteComplaint={deleteComplaint} isAdmin={isAdmin} />
      </div>
    </div>
  )
}

export default App
