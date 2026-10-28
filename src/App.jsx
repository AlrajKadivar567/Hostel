import { useState, useEffect } from 'react'
import LeaveForm from './components/LeaveForm'
import ComplaintForm from './components/ComplaintForm'

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

  return (
    <div>
      <h1>Hostel Portal</h1>
      <LeaveForm addLeave={addLeave} />
      <ComplaintForm addComplaint={addComplaint} />
      <p>Total leave requests: {leaves.length}</p>
      <p>Total complaints: {complaints.length}</p>
    </div>
  )
}

export default App
