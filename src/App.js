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
  const SHELVES = [
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
  ];
  const [books, setBooks] = useState([]);

  const getAllBooks = () => {
    const getAll = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }
    getAll();
  };

  const updateBook = (book, shelf) => {
    const update = async () => {
      await BooksAPI.update(book, shelf);
      getAllBooks();
    }
    update();
  };

  const onUpdateBook = (book, shelf) => {
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
            <MainPage title="My reads app" books={books} shelves={SHELVES} onUpdateBook={onUpdateBook}/>
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
