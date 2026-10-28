import { useState } from 'react'

function LeaveForm({ addLeave }) {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [reason, setReason] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    addLeave({
      id: Date.now(),
      name,
      room,
      from,
      to,
      reason,
      status: 'Pending'
    })
    setName('')
    setRoom('')
    setFrom('')
    setTo('')
    setReason('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Apply for Leave</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input placeholder="Room number" value={room} onChange={(e) => setRoom(e.target.value)} required />
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
