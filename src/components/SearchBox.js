const SearchBox = ({type, helpText}) => {
    return (
        <div className="search-books-input-wrapper">
            <input type={type} placeholder={helpText}></input>
        </div>
    )
}

export default SearchBox;