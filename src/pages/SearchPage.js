import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import Book from '../components/Book';
import * as BooksAPI from '../BooksAPI';
import { useState } from 'react';

const SearchPage = ({books, onUpdateBook}) => {
    const [searchResults, setSearchResults] = useState([]);
    const _getBookById = (bookId) => {
        return books?.find(element => element.id === bookId);
    };
    const onSearchBook = (searchQuery) => {
        const search = async () => {
            let res = await BooksAPI.search(searchQuery);
            console.log(res);
            if (res.error) {
                setSearchResults(res.error.items);
            } else {
                let result = res?.map((element) => {
                    return _getBookById(element.id) || element;
                });
                setSearchResults(result);
            }
        }
        if (searchQuery) {
            search();
        } else {
            setSearchResults([]);
        }
    };

    return (
        <div>
            <div className='search-books-bar'>
                <Link className="close-search" to="/"></Link>
                <SearchBox type={"text"} helpText={"Search by Title, authot or ISBN"} onSearchBook={onSearchBook}></SearchBox>
            </div>
            <div className='search-books-results'>
                <ul className='books-grid'>
                    {   searchResults ? 
                        searchResults?.map((item, key) => {
                            return <li key={key}><Book book={item} onUpdateBook={onUpdateBook} ></Book></li>
                        }) : 'No results found with this query'
                    }
                    
                </ul>
     
            </div>
            
        
        </div>

    )
}

export default SearchPage;