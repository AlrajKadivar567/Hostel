function LeaveList({ leaves, markDone }) {
  return (
    <div>
      <h2>Leave Requests</h2>
      {leaves.length === 0 && <p>No leave requests yet</p>}
      {leaves.map((leave) => (
        <div className="card" key={leave.id}>
          <h3>{leave.name} (Room {leave.room})</h3>
          <p>From: {leave.from} To: {leave.to}</p>
          <p>Reason: {leave.reason}</p>
          <p>Status: <span className={leave.status === 'Done' ? 'done' : 'pending'}>{leave.status}</span></p>
          {leave.status === 'Pending' && (
            <button onClick={() => markDone(leave.id)}>Mark Done</button>
          )}
        </div>
      ))}
    </div>
  )
}

export default LeaveList
