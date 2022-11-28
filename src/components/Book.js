import PropTypes from 'prop-types';
import SelectShelfButton from './SelectShelfButton';

const Book = ({book, shelves, onChangeShelf}) => {
    const handleSelfChange = (event) => {
        debugger;
        onChangeShelf();
    }
    return (
        <div className='book'>
            <div className='book-top'>
                <img className="book-cover" src={book?.imageLinks.smallThumbnail} alt={book?.title}></img>
            </div>
            <div className="book-cover-title">{book?.title}</div>
            <div className="book-authors">{book?.authors}</div>
            <div className="book-shelf-changer">
                <SelectShelfButton shelves={shelves} onChangeShelf={handleSelfChange}></SelectShelfButton>
            </div>
      
        </div>
    )
}

export default Book;