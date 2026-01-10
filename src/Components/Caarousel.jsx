import Carousel from "react-bootstrap/Carousel";
import "./Caarousel.css";

function Caarousel() {
  return (
    <Carousel
      controls={false}
      indicators={false}
      interval={5000}
      fade
    >
      <Carousel.Item>
         <video
          className="d-block w-100"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Videos/large.mp4" type="video/mp4" />
        </video>

          <Carousel.Caption className="apple-captions">
            <h1>Watch Series 11</h1>
            <p>Quit quitting your fitness goals</p>
            <div className="apple-buttons">
    <button className="btn-primary">Learn more</button>
    <button className="btn-secondary">Buy</button>
  </div>
          </Carousel.Caption>
       
        <br/>
        <br/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caarousel;
