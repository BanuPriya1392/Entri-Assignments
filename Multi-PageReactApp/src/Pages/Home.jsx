import { Link } from "react-router-dom";

const Home = () => (
  <div className="page">
    <h1>Welcome to the User Manager</h1>
    <p>
      This application allows you to navigate through user profiles and learn
      about our system.
    </p>
    <div className="home-actions">
      <Link to="/users" className="view-btn">
        Browse Users
      </Link>
      <Link to="/about" className="view-btn" style={{ marginLeft: "10px" }}>
        Learn More
      </Link>
    </div>
  </div>
);

export default Home;
