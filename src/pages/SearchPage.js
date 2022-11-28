import { Link } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import Book from '../components/Book';

const SearchPage = () => {

    return (
        <div>
            <div className='search-books-bar'>
                <Link className="close-search" to="/"></Link>
                <SearchBox type={"text"} helpText={"Search by Title, authot or ISBN"}></SearchBox>
            
            </div>
            <div className='search-books-results'>
            Resultados
            {/* <Book></Book> */}
        </div>
        </div>

    )
}

export default SearchPage;