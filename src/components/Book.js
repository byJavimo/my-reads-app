import SelectShelfButton from './SelectShelfButton';

const Book = ({book, onUpdateBook}) => {
    const CATEGORY_SHELVES = [
        {
         id: 'currentlyReading',
         name: "Currently reading"
        },
        {
         id: 'wantToRead',
         name: "Want to read",
        },
        {
         id: 'read',
         name:  "Read"
        },
        {
         id: 'none',
         name: 'None'
        }
    ];

    const handleSelfChange = (shelfSelected) => {
        onUpdateBook(book, shelfSelected);
    };

    let defaultSelectedValue = book.shelf ? book.shelf : 'none';

    return (
        <div className='book'>
            <div className='book-top'>
                <img className="book-cover" src={book?.imageLinks?.smallThumbnail} alt={book?.title}></img>
            </div>
            <div className="book-cover-title">{book?.title}</div>
            <div className="book-authors">{book?.authors}</div>
            <div className="book-shelf-changer">
                <SelectShelfButton options={CATEGORY_SHELVES} onChangeShelf={handleSelfChange} optionSelected={defaultSelectedValue}></SelectShelfButton>
            </div>
        </div>
    )
}

export default Book;