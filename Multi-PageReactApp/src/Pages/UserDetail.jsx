import { useParams, useNavigate } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data matching logic
  const users = [
    { id: 1, name: "Banu", email: "banu@example.com", role: "Admin" },
    { id: 2, name: "Lirthika", email: "lirthi@example.com", role: "Editor" },
    { id: 3, name: "Saanvika", email: "san@example.com", role: "User" },
  ];

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <h2>User not found!</h2>;

  return (
    <div className="page user-detail">
      <h1>User Detail</h1>
      <div className="detail-card">
        <p>
          <strong>ID:</strong> {user.id}
        </p>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Role:</strong> {user.role}
        </p>
        <button onClick={() => navigate("/users")} className="back-btn">
          ← Go Back to Users
        </button>
      </div>
    </div>
  );
};

export default UserDetail;
