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
          We are a family-owned <br /> Mediterranean restaurant,<br />
          focused on traditional<br /> recipes served with a modern<br />
          twist.
        </p>
        <button className="buttons" onClick={handleClick}>Reserve a Table</button>
      </div>
    </div>
  );
}

export default Hero;