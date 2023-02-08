import { useState } from 'react';
import Edit from './Edit';
import { AiOutlineEdit } from 'react-icons/ai';

const ShowList = ({ todo, deleteItem, onEdit }) => {
    const [showEdit, SetShowEdit] = useState(false);

    const handler = () => deleteItem(todo.id);

    const editHandler = () => {
        SetShowEdit(!showEdit);
    };

    const handleSubmit = (id, newTitle) => {
        SetShowEdit(false);
        onEdit(id, newTitle);
    };
    let content = <h3>{todo.title}</h3>;
    if (showEdit) {
        content = <Edit onSubmit={handleSubmit} todo={todo} />;
    }

    return (
        <div className='card'>
            <button className='delete' onClick={handler} />
            <AiOutlineEdit onClick={editHandler} />
            <h1 className='card-header'>
                <p class='card-header-title'>{content}</p>
            </h1>
        </div>
    );
};
export default ShowList;
