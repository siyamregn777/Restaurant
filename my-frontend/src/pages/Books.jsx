import { useState } from 'react';
import './Books.css';
import bookImage1 from '../images/pexels-chetanvlad-2600204.jpg';
import bookImage2 from '../images/pexels-dapur-melodi-192125-1109197.jpg';

// List of book items with details
const books = [
  { id: 1, title: 'Book One', description: 'An amazing book.', image: bookImage1, price: '$15', time: '2 days' },
  { id: 2, title: 'Book Two', description: 'Another great book.', image: bookImage2, price: '$20', time: '3 days' },
  // Add more books as needed
];

function Books() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleClick = (book) => {
    setSelectedBook(selectedBook === book ? null : book); // Toggle display on click
  };

  return (
    <div className="books-container">
      <h1 className="books-heading">Books</h1> {/* Centered Heading */}
      <div className="books-page">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <img src={book.image} alt={book.title} onClick={() => handleClick(book)} className="book-image" />
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            {selectedBook === book && (
              <div className="book-details">
                <p><strong>Price:</strong> {book.price}</p>
                <p><strong>Delivery Time:</strong> {book.time}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
