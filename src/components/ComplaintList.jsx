function ComplaintList({ complaints, markDone }) {
  return (
    <div>
      <h2>Complaints</h2>
      {complaints.length === 0 && <p>No complaints yet</p>}
      {complaints.map((complaint) => (
        <div className="card" key={complaint.id}>
          <h3>{complaint.name} (Room {complaint.room})</h3>
          <p>Type: {complaint.type}</p>
          <p>{complaint.details}</p>
          <p>Status: <span className={complaint.status === 'Done' ? 'done' : 'pending'}>{complaint.status}</span></p>
          {complaint.status === 'Pending' && (
            <button onClick={() => markDone(complaint.id)}>Mark Done</button>
          )}
        </div>
      ))}
    </div>
  )
}

export default ComplaintList
