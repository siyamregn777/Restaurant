import './Available.css'; // Importing the CSS file to style the component
import foodImage1 from '../../imagesimages/pexels-helin-gezer-903013644-25810609.jpg'; // Importing the image for food item 1
import foodImage2 from '../../imagesimages/pexels-chetanvlad-2600204.jpg'; // Importing the image for food item 2
import foodImage3 from '../../imagesimages/pexels-karolina-grabowska-4198930(1).jpg'; // Importing the image for food item 3
import foodImage4 from '../../imagesimages/pexels-helin-gezer-903013644-25810609.jpg'; // Importing the image for food item 4
// import foodImage5 from '../../public/images/'
// Defining an array of food objects with image sources and alt text
const foodImages = [
  { src: foodImage1, alt: 'Food Item 1', text: 'Delicious Pizza'}, // First food item with its image and description
  { src: foodImage2, alt: 'Food Item 2', text: 'Tasty Burger' }, // Second food item with its image and description
  { src: foodImage3, alt: 'Food Item 3', text: 'Fresh Salad' }, // Third food item with its image and description
  { src: foodImage4, alt: 'Food Item 4', text: 'Juicy Steak' }, // Fourth food item with its image and description
];

// Defining the Available component that displays the food images and text
function Available() {
  return (
    <section className="available"> 
      {/* This section wraps the entire available food items */}
      <div className="text-area"> 
        {/* This div wraps the section title with a background */}
        <h2 className="section-title">DAILY FOOD</h2> 
        {/* Section title */}
      </div>
      <div className="food-list">
        {/* This div will hold all the food items horizontally */}
        {foodImages.map((food, index) => (
          <div key={index} className="food-item">
            {/* Iterating through the foodItems and displaying each item */}
            <p className="food-text">{food.text}</p> 
            {/* Food name displayed above the image */}
            <img src={food.src} alt={food.alt} className="food-image" /> 
            {/* The image of each food item */}
            <div className="image-footer"> 
              {/* Footer section for the text below the image */}
              <p className="footer-text">FAST FOOD!</p> 
              {/* Footer text */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Available; 
// Exporting the Available component so it can be used in other parts of the application
