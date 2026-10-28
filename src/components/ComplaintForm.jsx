import { useState } from 'react'

function ComplaintForm({ addComplaint }) {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [type, setType] = useState('Food')
  const [details, setDetails] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    addComplaint({
      id: Date.now(),
      name,
      room,
      type,
      details,
      status: 'Pending'
    })
    setName('')
    setRoom('')
    setType('Food')
    setDetails('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Complaint</h2>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input placeholder="Room number" value={room} onChange={(e) => setRoom(e.target.value)} required />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Food</option>
        <option>Water</option>
        <option>Electricity</option>
        <option>Cleaning</option>
        <option>Other</option>
      </select>
      <textarea placeholder="Describe the problem" value={details} onChange={(e) => setDetails(e.target.value)} required />
      <button type="submit">Submit Complaint</button>
    </form>
  )
}

export default ComplaintForm
