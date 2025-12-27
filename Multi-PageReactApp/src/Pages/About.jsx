import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="page">
      <h1>About This App</h1>
      <p>
        This is a Multi-Page React Application built to demonstrate React Router
        capabilities like dynamic parameters and navigation hooks.
      </p>
      <button onClick={() => navigate("/")} className="back-btn">
        Back to Home
      </button>
    </div>
  );
};

export default About;
