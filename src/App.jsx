import { useState, useEffect } from 'react'
import LeaveForm from './components/LeaveForm'
import ComplaintForm from './components/ComplaintForm'
import LeaveList from './components/LeaveList'
import ComplaintList from './components/ComplaintList'

function App() {
  const [leaves, setLeaves] = useState(() => {
    const saved = localStorage.getItem('leaves')
    return saved ? JSON.parse(saved) : []
  })

  const [complaints, setComplaints] = useState(() => {
    const saved = localStorage.getItem('complaints')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('leaves', JSON.stringify(leaves))
  }, [leaves])

  useEffect(() => {
    localStorage.setItem('complaints', JSON.stringify(complaints))
  }, [complaints])

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

  return (
    <div className="container">
      <h1>Hostel Portal</h1>
      <div className="forms">
        <LeaveForm addLeave={addLeave} />
        <ComplaintForm addComplaint={addComplaint} />
      </div>
      <div className="lists">
        <LeaveList leaves={leaves} markDone={markLeaveDone} />
        <ComplaintList complaints={complaints} markDone={markComplaintDone} />
      </div>
    </div>
  )
}

export default App
