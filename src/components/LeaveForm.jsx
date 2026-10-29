import { useState } from 'react'

function LeaveForm({ addLeave, user }) {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [reason, setReason] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    addLeave({
      id: Date.now(),
      name: user.name,
      room: user.room,
      from,
      to,
      reason,
      status: 'Pending'
    })
    setFrom('')
    setTo('')
    setReason('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Apply for Leave</h2>
      <label>From</label>
      <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} required />
      <label>To</label>
      <input type="date" value={to} onChange={(e) => setTo(e.target.value)} required />
      <textarea placeholder="Reason" value={reason} onChange={(e) => setReason(e.target.value)} required />
      <button type="submit">Submit Leave</button>
    </form>
  )
}

export default LeaveForm
