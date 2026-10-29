import { useState } from 'react'

function Login({ onLogin }) {
  const [role, setRole] = useState('student')
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (role === 'admin') {
      if (password === 'admin123') {
        onLogin({ role: 'admin', name: 'Warden', room: '' })
      } else {
        setError('Wrong password')
      }
    } else {
      onLogin({ role: 'student', name, room })
    }
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>
      {role === 'student' && (
        <>
          <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input placeholder="Room number" value={room} onChange={(e) => setRoom(e.target.value)} required />
        </>
      )}
      {role === 'admin' && (
        <input type="password" placeholder="Admin password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      )}
      {error && <p className="error">{error}</p>}
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
