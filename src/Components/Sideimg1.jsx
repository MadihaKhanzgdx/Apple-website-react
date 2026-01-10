import React from "react";
import './Sideimg1.css'

const Sideimg1 = () => {
  return <div className="apple-double1">
    
  <div className="apple-card dark1">
    <img src="/images/img5.png" alt="MacBook"/>
    <div className="apple-text1">
      <h2>MacBook Pro14</h2>
      <p>Supercharged by M-series</p>
      <div className="apple-buttons1">
        <button className="btn-primary">Learn more</button>
        <button className="btn-secondary">Buy</button>
      </div>
    </div>
  </div>

   <div className="apple-cards1">
    <img src="/images/img6.png" alt="Apple Fitness" />
    <div className="apple-texxt1">
      <h2>Apple Fitness+</h2>
      <p>Start year strong with guided <br />wordouts and medications.</p>
      <div className="apple-buttons1">
        <button className="btn-primary">Learn more</button>
        <button className="btn-secondary">Try free</button>
      </div>
    </div>
  </div>
    </div>;
};

export default Sideimg1;
