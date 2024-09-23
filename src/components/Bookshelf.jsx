import { useState } from "react";

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({ title: "", author: "" });
  

    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        setBooks([...books, newBook]);
        setNewBook({ title: "", author: "" });
      };
      return (

<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
          <p>Title:</p>
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            value={newBook.title}
            required
          />
 <p>Author:</p>
          <input
            type="text"
            name="author"
            onChange={handleInputChange}
            value={newBook.author}
            required
          />
          <br></br>
          <input type="submit" value="Add Book" className="submit-button" />
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book) => (
          <div className="bookCard">
            <h3>{book.title}</h3>
            <h4>by {book.author}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;