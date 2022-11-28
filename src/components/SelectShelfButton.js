const SelectShelfButton = ({options , optionSelected, onChangeShelf}) => {
    const handleChange = (event) => {
        event.preventDefault();
        onChangeShelf(event.target.value);
    };
    return (
        <select onChange={handleChange} defaultValue={optionSelected} >
             <optgroup label="Move to">
                {options.map((item) =>{
                    return <option key={item.id} value={item.id}>{item.name}</option>
                })}
            </optgroup>
        </select>
    )
}

export default SelectShelfButton;