import './AboutUs.css';
import ownerPhoto from '../../public/images/pexels-cachi290-29831643 (1).jpg'; // Replace with the actual path to the owner's photo

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p className="about-us-intro">
        Welcome to our business! We’re passionate about delivering the best services and creating lasting connections with our clients. Here’s a bit about who we are and what we stand for.
      </p>
      <div className="owner-section">
        <img src={ownerPhoto} alt="Owner" className="owner-photo" />
        <div className="owner-description">
          <h2>John Doe</h2>
          <p>
            John is the visionary behind our business, bringing years of experience and dedication. 
            With a background in [industry], he has been leading our company with integrity and 
            commitment to excellence. John’s goal is to provide exceptional services and help our
             clients achieve their aspirations. When hes not working, John enjoys [hobby/interest],
              which reflects his love for [related topic].
          </p>
          <p>
            Under Johns leadership, our company has grown tremendously and continues to 
            innovate. He believes in empowering his team and always puts the client’s needs
             first. Join us on this journey, and let us make your experience unforgettable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
