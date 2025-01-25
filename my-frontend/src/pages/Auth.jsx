import  { useState } from 'react';
import './Auth.css';

function Auth() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    alert(isLogin ? 'Logging in...' : 'Signing up...');
  };

  return (
    <div className="auth-container">
      <div className="auth-toggle">
        <button className={isLogin ? 'active' : ''} onClick={toggleForm}>
          {isLogin ? 'Login' : 'Signup'}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <label>
            Name:
            <input type="text" name="name" placeholder="Your Name" required />
          </label>
        )}

        <label>
          Email:
          <input type="email" name="email" placeholder="Email Address" required />
        </label>

        <label>
          Password:
          <input type="password" name="password" placeholder="Password" required />
        </label>

        <button type="submit" className="submit-button">
          {isLogin ? 'Login' : 'Signup'}
        </button>

        <div className="alternative">
          <p>Or</p>
          <button type="button" className="alternative-button">
            Continue with Google
          </button>
        </div>
      </form>
      
      <p className="toggle-link">
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <span onClick={toggleForm}>{isLogin ? ' Signup' : ' Login'}</span>
      </p>
    </div>
  );
}

export default Auth;
