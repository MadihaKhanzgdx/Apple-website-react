import Carousel from "react-bootstrap/Carousel";
import "./Caarousel1.css";

function Caarousel1() {
  return (
    <Carousel
      controls={false}
      indicators={false}
      interval={5000}
      fade
    >
      <Carousel.Item>
        <div className="apple-slides">
          <img
            src="/images/img1.png"
            alt="iphone"
          />

          <Carousel.Caption className="apple-caption">
            <h1 style={{color:'black'}}>iPhone </h1>
            <p style={{color:'black'}}>Say hello to the latest generation of iphone.</p>
            <div className="apple-buttons">
    <button className="btn-primary">Learn more</button>
    <button className="btn-secondary">Shop iphone</button>
  </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caarousel1;
