import AddButton from '../components/AddButton.js';
import Header from '../components/Header.js';
import Shelf from '../components/Shelf.js'

const MainPage = ({title, books, shelves, onUpdateBook}) => {

    return (
        <div>
            <Header title={title}></Header>
            {shelves.map((item, key) => {
                return <Shelf key={key} shelf={item} books={books} shelves={shelves} onUpdateBook={onUpdateBook}></Shelf>
            })}
            <AddButton></AddButton>
        </div>
    )
}

export default MainPage;