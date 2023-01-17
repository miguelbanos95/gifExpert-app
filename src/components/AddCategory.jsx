import React, { useState } from 'react';
import "./GifGrid.css";

const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const handleOnChange = (e) => {
        //importante evaluar el evento
        setInputValue(e.target.value)
    }

    const handleOfSubmit = (e) => { 
        e.preventDefault();

        //controla la condicion de si entra un inputvalue > o = a 1 no añade nada y salta al siguiente scope
        if( inputValue.trim().length <=1) return;

        setInputValue('');

        onNewCategory( inputValue.trim() );
    }


    return (
        <form onSubmit={handleOfSubmit}>
            <input type="text"
                placeholder="search"
                onChange={handleOnChange}
                value={inputValue}
            />
        </form>
    );
};

export default AddCategory;