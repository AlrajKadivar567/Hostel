import { useState, useEffect } from 'react'
import LeaveForm from './components/LeaveForm'

function App() {
  const [leaves, setLeaves] = useState(() => {
    const saved = localStorage.getItem('leaves')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('leaves', JSON.stringify(leaves))
  }, [leaves])

  function addLeave(leave) {
    setLeaves([...leaves, leave])
  }

  return (
    <div>
      <h1>Hostel Portal</h1>
      <LeaveForm addLeave={addLeave} />
      <p>Total leave requests: {leaves.length}</p>
    </div>
  )
}

export default App
