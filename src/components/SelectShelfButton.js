import { useState } from "react";

const SelectShelfButton = ({shelves, onChangeShelf}) => {
    const [shelfSelected, setShelfSelected] = useState({});

    const handleChange = (event) => {
        debugger
        event.preventDefault();
        onChangeShelf(event);
    };
    return (
        <select onChange={handleChange} defaultValue={shelfSelected.id} >
             <optgroup label="Move to">
                {shelves.map((item) =>{
                    return <option key={item.id} value={item.id}>{item.name}</option>
                })}
            </optgroup>
        </select>
    )
}

export default SelectShelfButton;