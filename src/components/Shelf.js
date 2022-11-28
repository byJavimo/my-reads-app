import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = ({shelf, books, shelves, onUpdateBook}) => {
    const filteredBooksByShelf = books.filter((book) => {
        if(book.shelf === shelf.id) {
            return book;
        };
    });

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <ul className="books-grid">
                {
                    filteredBooksByShelf.map((item, key) => {
                        return <li key={key}><Book book={item} shelves={shelves} onUpdateBook={onUpdateBook}></Book></li>
                    })
                }
            </ul>
        </div>
    )
}

Shelf.propTypes = {
    shelf: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
}

export default Shelf;