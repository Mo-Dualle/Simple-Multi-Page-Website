
import './styles/Home.css';

const Home = (props) => {
  if (!props.title || !props.description) {
    return null; 
  }

  return (
    <div className="home-container">
      <p className="home-text">
        Title: <span>{props.title}</span>
      </p>
      <p className="home-text">
        Description: <span>{props.description}</span>
      </p>
    </div>
  );
};

export default Home;
