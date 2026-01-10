import "./Footer.css";

const Footer = () => {
  return (
    <footer className="apple-footer">
      <div className="apple-footer-container">

        <div className="footer-column">
          <h4>Shop and Learn</h4>
          <a href="#">Store</a>
          <a href="#">Mac</a>
          <a href="#">iPad</a>
          <a href="#">iPhone</a>
          <a href="#">Watch</a>
          <a href="#">AirPods</a>
        </div>

        <div className="footer-column">
          <h4>Apple Wallet</h4>
          <a href="#">Wallet</a>
          <a href="#">Apple Pay</a>
        </div>

        <div className="footer-column">
          <h4>Account</h4>
          <a href="#">Manage Your Apple ID</a>
          <a href="#">Apple Store Account</a>
          <a href="#">iCloud.com</a>
        </div>

        <div className="footer-column">
          <h4>Entertainment</h4>
          <a href="#">Apple Music</a>
          <a href="#">Apple TV+</a>
          <a href="#">Apple Fitness+</a>
          <a href="#">Apple Arcade</a>
        </div>

        <div className="footer-column">
          <h4>Apple Values</h4>
          <a href="#">Accessibility</a>
          <a href="#">Environment</a>
          <a href="#">Privacy</a>
          <a href="#">Supplier Responsibility</a>
        </div>

      </div>

      <div className="apple-footer-bottom">
        <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sales Policy</a>
          <a href="#">Legal</a>
          <a href="#">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
