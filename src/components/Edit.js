import { useState } from 'react';

const Edit = ({ todo, onSubmit }) => {
    const [title, setTitle] = useState(todo.title);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(todo.id, title);
    };

    return (
        <form action='submit' onSubmit={handleSubmit}>
            <input
                className='input is-rounded is-large'
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor='text' className='inputLabel'>
    
            </label>
            <button
                className='button is-primary is-hover is-rounded block'
                onClick={handleSubmit}>
                Save
            </button>
        </form>
    );
};
export default Edit;
