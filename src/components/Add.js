import React, { useEffect, useState } from 'react';

const Add = ({ onCreate }) => {
    const [item, setItem] = useState('');

const handleChange = (e) => {
        setItem(e.target.value);
    };

const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(item);
        setItem('')
    };
    useEffect(()=>console.clear())
    return (
        <form action='submit' onSubmit={handleSubmit}>
            <input
                className='input is-rounded is-large'
                type='text'
                value={item}
                onChange={handleChange}
            />
            <button className='button is-primary is-hover is-rounded block'>
                Add
            </button>
        </form>
    );
};
export default Add;
