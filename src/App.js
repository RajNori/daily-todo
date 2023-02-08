import React, { useState } from 'react';
import Add from './components/Add';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    const editTodoById = (id, newTitle) => {
        const updatedTodo = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, title: newTitle };
            }
            return todo;
        });
        setTodos(updatedTodo)
    };

    const delTodoById = (id) => {
        const updatedArray = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(updatedArray);
    };

    const createTodo = (userInput) => {
        const addTodo = [
            ...todos,
            { id: Math.round((Math.random()) * 9999), title: userInput },
        ];
        setTodos(addTodo);
    };

    return (
        <section className='section'>
            <div className='container'>
                <TodoList onEdit={editTodoById} deleteItem={delTodoById} todos={todos} />
                <Add onCreate={createTodo} />
                <h1 className='title'>Total tasks: {todos.length}</h1>
            </div>
        </section>
    );
}
export default App;

