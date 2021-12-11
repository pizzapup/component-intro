// eslint-disable-next-line no-unused-vars
import styles from "./hero.css";
function Hero() {
  return (
    <div className="hero-holder">
      <div className="hero-img-holder">
        <div className="hero-img hero-img-1"></div>
        <div className="hero-img hero-img-2"></div>
      </div>
      <span className="hero-logo">G</span>
      <div className="hero-des-holder">
        <p className="hero-des">
          <h1 className="hero-des-bold">New! Lorem ipsum dolor</h1>sit amet
          consectetur, adipisicing elit. Magni ut optio
        </p>
        <div className="hero-button">Shop now</div>
      </div>
    </div>
  );
}
export default Hero;
