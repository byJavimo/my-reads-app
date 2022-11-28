const SearchBox = ({type, helpText, onSearchBook}) => {
    const handleInputChange = (event) => {
        event.preventDefault();
        onSearchBook(event.target.value);
    };
    return (
        <div className="search-books-input-wrapper">
            <input type={type} placeholder={helpText} onChange={handleInputChange}></input>
        </div>
    )
}

export default SearchBox;