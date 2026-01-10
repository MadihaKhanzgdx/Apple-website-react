import Carousel from "react-bootstrap/Carousel";
import "./Caarousel2.css";

function Caarousel2() {
  return (
    <Carousel
      controls={false}
      indicators={false}
      interval={5000}
      fade
    >
      <Carousel.Item>
        <div className="apple-slide">
          <img
            src="/images/img2.png"
            alt="iphone"
          />

          <Carousel.Caption className="apple-captiona">
            <h1 style={{color:'black'}}>iPad air </h1>
            <p style={{color:'black'}}>Now supercharged by the M3 chip.</p>
            <div className="apple-buttons">
    <button className="btn-primary">Learn more</button>
    <button className="btn-secondary">buy</button>
  </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caarousel2;
