import { useState } from 'react';

const Bookshelf = () => {

    // Create state variable for BOOKS
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);
    
    // Create state variable for NEW BOOK
    const [newBook, setNewBook] = useState([{ title: '', author: '' }]);
    
    // Event Handler for change in form data
    const handleInputChange = (event) => {
        
        // Use event data to update the NEW BOOK state variable on the field that has been changed, with its new value. 
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    
       };
    
    // Event Handler for submission of form data
    const handleSubmit = (event) => {

        // Prevent navigating to a different webpage
        event.preventDefault();

        // Create copy of state variable BOOKS
        const newBooksArray = [...books];

        // Add NEW BOOK to BOOKS copy
        newBooksArray.push(newBook);

        // Update state variable BOOKS with the updated BOOKS array. 
        setBooks(newBooksArray);

        // Initiate NEW BOOK state value. 
        setNewBook[{ title: ' ', author: '' }];

     };
      
return (
    <div className="bookshelfDiv">
        <div className="formDiv">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input
                    id="title"
                    name="title"
                    value={newBook.title}
                    onChange={handleInputChange}
                />
                <label htmlFor="author">Author: </label>
                <input
                    id="author"
                    name="author"
                    value={newBook.author}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit new book</button>
            </form>
        </div>
    <div className="bookCardsDiv">{/* Book cards will display here */}
        <ul>
            {books.map((book, index) => 
                <div>
                    <h4>Title: {book.title}</h4>
                    <h4>Author: {book.author}</h4>
                </div>
            )}
        </ul>
    </div>
    </div>
);
};

export default Bookshelf;