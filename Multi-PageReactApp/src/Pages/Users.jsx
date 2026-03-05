import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Banu", email: "banu@example.com" },
  { id: 2, name: "Lirthika", email: "lirthi@example.com" },
  { id: 3, name: "Saanvika", email: "san@example.com" },
];

const Users = () => {
  return (
    <div className="page">
      <h1>Users List</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-card">
            <span>{user.name}</span>
            <Link to={`/users/${user.id}`} className="view-btn">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
