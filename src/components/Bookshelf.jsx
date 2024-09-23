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
  </div>
  <div className="bookCardsDiv">{/* Book cards will display here */}</div>
</div>
