import React, { useEffect, useState } from 'react';
import API from '../api';

function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get('/users').then(res => setUsers(res.data));
  }, []);

  const handleDelete = async id => {
    await API.delete(`/users/${id}`);
    setUsers(users.filter(u => u._id !== id));
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.username} ({user.role})
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;