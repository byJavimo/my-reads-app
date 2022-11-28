import './App.css';
import * as BooksAPI from './BooksAPI';
import {useState, useEffect} from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';

function App() {
  const [books, setBooks] = useState([]);
  const [shelves, setShelves] = useState([
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
   }
  ]);

  const getAllBooks = () => {
    const getAll = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }
    getAll();
  };
  const updateBook = (book) => {
    const update = async () => {
      const res = await BooksAPI.update(book);
      setBooks(res);
    }
    update();
  };

  const onChangeShelf = (book, shelf) => {
    updateBook(book, shelf)
  };

  useEffect(() => {
    getAllBooks();
  },[]);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
          <MainPage title="My reads app" books={books} shelves={shelves} onChangeShelf={onChangeShelf}/>
          }
        />
      <Route
        path="/search"
        element={
          <SearchPage/>
        }
      />
    </Routes>
    </div>
  );
}

export default App;
