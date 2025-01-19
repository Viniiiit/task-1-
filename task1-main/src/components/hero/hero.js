import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-title">
        <div className="hero-main">Premium Coffee Experience</div>
        <div className="hero-sub">
          Discover the finest coffee beans sourced ethically from around the
          world.
        </div>
      </div>
      <button className="hero-buy-now">Buy Now</button>
    </div>
  );
};

export default Hero;
