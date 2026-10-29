import { useState } from 'react'

function Menu({ menu, updateMenu, isAdmin }) {
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState(menu)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSave(e) {
    e.preventDefault()
    updateMenu(form)
    setEditing(false)
  }

  if (editing) {
    return (
      <form onSubmit={handleSave}>
        <h2>Edit Today's Menu</h2>
        <label>Breakfast</label>
        <input name="breakfast" value={form.breakfast} onChange={handleChange} />
        <label>Lunch</label>
        <input name="lunch" value={form.lunch} onChange={handleChange} />
        <label>Snacks</label>
        <input name="snacks" value={form.snacks} onChange={handleChange} />
        <label>Dinner</label>
        <input name="dinner" value={form.dinner} onChange={handleChange} />
        <button type="submit">Save Menu</button>
      </form>
    )
  }

  return (
    <div className="menu">
      <h2>Today's Menu</h2>
      <div className="menu-grid">
        <div className="menu-item">
          <h4>Breakfast</h4>
          <p>{menu.breakfast}</p>
        </div>
        <div className="menu-item">
          <h4>Lunch</h4>
          <p>{menu.lunch}</p>
        </div>
        <div className="menu-item">
          <h4>Snacks</h4>
          <p>{menu.snacks}</p>
        </div>
        <div className="menu-item">
          <h4>Dinner</h4>
          <p>{menu.dinner}</p>
        </div>
      </div>
      {isAdmin && <button onClick={() => { setForm(menu); setEditing(true) }}>Edit Menu</button>}
    </div>
  )
}

export default Menu
