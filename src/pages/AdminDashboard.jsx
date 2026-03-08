import  { useEffect, useState } from "react";
import "../styles/dashboard.css";

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users/")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;