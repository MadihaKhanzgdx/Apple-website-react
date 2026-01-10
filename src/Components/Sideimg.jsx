import React from "react";
import './Sideimg.css'

const Sideimg = () => {
  return <div className="apple-double">
  <div className="apple-cards">
    <img src="/images/img3.png" alt="Apple Fitness" />
    <div className="apple-texxt">
      <h2>Apple Fitness+</h2>
      <p>Start year strong with guided <br />wordouts and medications.</p>
      <div className="apple-buttons">
        <button className="btn-primary">Learn more</button>
        <button className="btn-secondary">Try free</button>
      </div>
    </div>
  </div>

  <div className="apple-card dark">
    <img src="/images/img4.png" alt="MacBook"/>
    <div className="apple-text">
      <h2>MacBook Pro14</h2>
      <p>Supercharged by M-series</p>
      <div className="apple-buttons">
        <button className="btn-primary">Learn more</button>
        <button className="btn-secondary">Buy</button>
      </div>
    </div>
  </div>
</div>
;
};

export default Sideimg;
