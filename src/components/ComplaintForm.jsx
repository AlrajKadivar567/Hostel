import { useState } from 'react'

function ComplaintForm({ addComplaint, user }) {
  const [type, setType] = useState('Food')
  const [details, setDetails] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    addComplaint({
      id: Date.now(),
      name: user.name,
      room: user.room,
      type,
      details,
      status: 'Pending'
    })
    setType('Food')
    setDetails('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Complaint</h2>
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
