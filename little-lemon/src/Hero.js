import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/booking");
  };

  return (
    <div className="hero-background">
      <div className="hero-content">
        <h1 id="hero-title">Little Lemon</h1>
        <br />
        <h2 id="hero-location">Chicago</h2>
        <br />
        <p id="hero-description">
          We are a family-owned Mediterranean restaurant,<br />
          focused on traditional recipes served with a modern<br />
          twist.
        </p>
        <button className="buttons" onClick={handleClick}>Reserve a Table</button>
      </div>
      <div className="hero-image-container">
        <img id="hero-image" src={require("./restaurantfood.jpg")} alt="Little-Lemon" />
      </div>
    </div>
  );
}

export default Hero;