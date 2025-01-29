import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes
import './Header.css';

function Header({ isAuthenticated, isAdmin, onLogout }) {
  return (
    <header className="header">
      <nav>
        <ul className="menu">
          {/* Home Link */}
          <li>
            <Link to="/" className="home-link">
              <h1 className="home-icon">WOW TASTE</h1>
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="dropdown">
            <Link to="#">Services</Link>
            <ul className="dropdown-menu">
              <li><Link to="/our-menu">Our Menu</Link></li>
              <li><Link to="/books">Books</Link></li>
              <li><Link to="/cooking">Cooking</Link></li>
            </ul>
          </li>

          {/* About Us Dropdown */}
          <li className="dropdown">
            <Link to="#">About Us</Link>
            <ul className="dropdown-menu">
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/ourstories">Our Stories</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </li>

          {/* User Profile Links - Only for Logged-in Users */}
          {isAuthenticated && (
            <>
              <li><Link to="/profile">User Profile</Link></li>
              <li><Link to="/order-management">Order Management</Link></li>

              {/* Admin Links - Only for Admin */}
              {isAdmin && (<li className="dropdown">
                  <Link to="#">Admin Dashboard</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/admin-dashboard">Overview</Link></li>
                    <li><Link to="/menu-management">Menu Management</Link></li>
                    <li><Link to="/books-management">Books Management</Link></li>
                    <li><Link to="/videos-management">Video Management</Link></li>
                  </ul>
                </li>
              )}
              {/* Logout Link */}
              <li><button onClick={onLogout}>Logout</button></li>
            </>
          )}

          {/* Authentication Links - Only for Non-Logged-in Users */}
          {!isAuthenticated && (
            <>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}


// PropTypes validation
Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired, // Boolean, required
  isAdmin: PropTypes.bool.isRequired, // Boolean, required
  onLogout: PropTypes.bool.isRequired,
};

export default Header;
