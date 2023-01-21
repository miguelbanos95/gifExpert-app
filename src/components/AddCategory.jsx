import React, { useState } from 'react';
import "./GifGrid.css";

const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const handleOnChange = (e) => {
        //important: evaluate the event!!
        setInputValue(e.target.value)
    }

    const handleOfSubmit = (e) => { 
        e.preventDefault();

        /* controls the condition of whether an \\inputvalue is greater than or equal to 1, 
        it does not add anything and jumps to the next scope."*/
        if( inputValue.trim().length <=1 ) return;

        setInputValue('');

        onNewCategory( inputValue.trim().toUpperCase() );
    }


    return (
        <form onSubmit={handleOfSubmit}>
            <input type="text"
                placeholder="Search all the GIFs"
                onChange={handleOnChange}
                value={inputValue}
            />
        </form>
    );
};

export default AddCategory;