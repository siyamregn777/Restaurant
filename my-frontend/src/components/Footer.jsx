import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="Footer-foot">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>

        {/* Center Section */}
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p>Email: siyamregnyeshidagna777@gmail.com</p>
          <p>Phone: +251961177953</p>
          <p>Address: 123 Business 4kilo, Addis Ababa, Ethiopia</p>
        </div>

        {/* Right Section */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      <p className="footer-bottom">&copy; 2024 Business Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
