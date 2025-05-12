import React, { useState } from 'react'
import { FaBook } from "react-icons/fa";
import "./Todo.css"
const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [inputval, setInputVal] = useState("");

    const handleSubmit = () => {
        setTodo((todo) => {
            return todo.concat({
                text: inputval,
                id: Math.floor(Math.random() * 100)
            })
        })
        setInputVal("");
    }

    const removeTodo = (id) => {
        setTodo((todo) => todo.filter(t => t.id !== id));
    }
    return (
        <>
            <div className='container'>
                <div className="title">
                    <div className='header'><h1>Todo List &nbsp;<i><FaBook /></i></h1></div>

                </div>

                <div className="search-box">
                    <input
                        type="text"
                        placeholder='Enter Your Task'
                        value={inputval}
                        onChange={(e) => setInputVal(e.target.value)}

                    />
                    <button onClick={() => handleSubmit()}>ADD</button>
                </div>
                <ul className="todo-list">
                    {
                        todo.map(({ text, id }) => (
                            <li key={id} className='todo'>
                                <span>{text}</span>
                                <span className='close' onClick={() => removeTodo(id)}>x</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Todo